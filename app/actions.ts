'use server'

import { prisma } from '@/prisma/prisma-client'
import { PayOrderTemplate } from '@/shared/components'
import { CheckoutFormValues } from '@/shared/constants'
import { sendEmail } from '@/shared/lib'
import { OrderStatus } from '@prisma/client'
import { cookies } from 'next/headers'

export async function createOrder(data: CheckoutFormValues) {
  try {
    const cookieStore = cookies()
    const cartToken = (await cookieStore).get('cartToken')?.value

    if (!cartToken) {
      throw new Error('Cart token not found')
    }

    //Находим корзмеу по токену
    const userCart = await prisma.cart.findFirst({
      include: {
        user: true,
        items: {
          include: {
            ingredients: true,
            productItem: {
              include: {
                product: true,
              },
            },
          },
        },
      },
      where: {
        token: cartToken,
      },
    })

    if (!userCart) {
      throw new Error('Cart not found')
    }

    if (userCart?.totalAmount === 0) {
      throw new Error('Cart is empty')
    }

    const order = await prisma.order.create({
      data: {
        token: cartToken,
        fullName: data.firstName + '' + data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        comment: data.comment,
        totalAmount: userCart.totalAmount,
        status: OrderStatus.PENDING,
        items: JSON.stringify(userCart.items),
      },
    })

    await prisma.cart.update({
      where: {
        id: userCart.id,
      },
      data: {
        totalAmount: 0,
      },
    })
    await prisma.cartItem.deleteMany({
      where: {
        cartId: userCart.id,
      },
    })
    await sendEmail(
      data.email,
      'Vitaly Pizza / оплатите заказ №' + order.id,
      PayOrderTemplate({
        orderId: order.id,
        totalAmount: order.totalAmount,
        paymentUrl:
          'https://maikop.hh.ru/applicant/negotiations?hhtmFrom=resume_list&hhtmFromLabel=header',
      })
    )
  } catch (err) {
    console.log('[CreateOrder] Server error', err)
  }
}
