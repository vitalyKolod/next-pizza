'use client'
import {
  CheckoutItem,
  CheckoutSidebar,
  Container,
  FormInput,
  Title,
  WhiteBlock,
} from '@/shared/components/shared'
import { Input, Textarea } from '@/shared/components/ui'
import { PizzaSize, PizzaType } from '@/shared/constants/pizza'
import { useCart } from '@/shared/hooks'
import { getCartItemDetailsToText } from '@/shared/lib'

export default function CheckoutPage() {
  const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart()
  const onClickCountButton = (type: 'plus' | 'minus', id: number, quantity: number) => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
    updateItemQuantity(id, newQuantity)
  }

  return (
    <Container className="mt-10">
      <Title text="Оформление заказа" className="font-extrabold mb-8 text-[36px]" />
      <div className="flex gap-10">
        {/* левая часть */}
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1.Корзина">
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <CheckoutItem
                  key={item.id}
                  id={item.id}
                  imageUrl={item.imageUrl}
                  details={getCartItemDetailsToText(
                    item.ingredients,
                    item.pizzaType as PizzaType,
                    item.pizzaSize as PizzaSize
                  )}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  disabled={item.disabled}
                  onClickCountButton={(type) => onClickCountButton(type, item.id, item.quantity)}
                  onClickRemove={() => removeCartItem(item.id)}
                />
              ))}
            </div>
          </WhiteBlock>
          <WhiteBlock title="2.Персональные данные">
            <div className="grid grid-cols-2 gap-5">
              <Input name="name" placeholder="Имя" className="text-base" />
              <Input name="lastName" placeholder="Фамилия" className="text-base" />
              <Input name="email" placeholder="Почта" className="text-base" />
              <FormInput name="phone" placeholder="Телефон" className="text-base" />
            </div>
          </WhiteBlock>
          <WhiteBlock title="3.Адрес доставки">
            <div className="flex flex-col gap-5">
              <Input name="name" placeholder="Введите адрес" className="text-base" />
              <Textarea className="text-base" rows={5} placeholder="Комментарий к заказу" />
            </div>
          </WhiteBlock>
        </div>
        {/* правая часть */}
        <div className="w-[450px]">
          <CheckoutSidebar totalAmount={totalAmount} />
        </div>
      </div>
    </Container>
  )
}
