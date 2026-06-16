import React from 'react'
import { WhiteBlock } from './white-block'
import { CheckoutItemDetails } from './checkout-item-details'
import { ArrowRight, Package, Percent, Truck } from 'lucide-react'
import { Button, Skeleton } from '../ui'

interface Props {
  totalAmount: number
  className?: string
  loading: boolean
}
const VAT = 15
const DELIVERY_PRICE = 250

export const CheckoutSidebar: React.FC<Props> = ({ className, totalAmount, loading }) => {
  const vatPrice = (totalAmount * VAT) / 100
  const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice
  return (
    <WhiteBlock className="p-6 sticky top-4">
      <div className="flex flex-col gap-1">
        <span className="text-xl">Итого:</span>
        {loading ? (
          <Skeleton className="w-48 h-11" />
        ) : (
          <span className="h-11 text-[34px] font-extrabold">{totalPrice} ₽</span>
        )}
      </div>
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Package size={16} className="mr-1 text-gray-400" />
            Стоимость корзины:
          </div>
        }
        value={loading ? <Skeleton className="h-6 w-14 rounded-md" /> : `${totalAmount} ₽`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Percent size={16} className="mr-1 text-gray-400" />
            Налоги:
          </div>
        }
        value={loading ? <Skeleton className="h-6 w-14 rounded-md" /> : `${vatPrice} ₽`}
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Truck size={16} className="mr-1 text-gray-400" />
            Доставка:
          </div>
        }
        value={loading ? <Skeleton className="h-6 w-14 rounded-md" /> : `${DELIVERY_PRICE} ₽`}
      />
      <Button
        loading={loading}
        type="submit"
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
      >
        Оформить заказ
        <ArrowRight size={16} className="ml-2" />
      </Button>
    </WhiteBlock>
  )
}
