import React from 'react'
import { WhiteBlock } from '../white-block'
import { getCartItemDetailsToText } from '@/shared/lib'
import { PizzaSize, PizzaType } from '@/shared/constants/pizza'
import { CheckoutItem } from '../checkout-item'
import { CartStateItem } from '@/shared/lib/get-cart-details'
import { CheckoutItemSkeleton } from '../checkout-item-skeleton'

interface Props {
  items: CartStateItem[]
  onClickCountButton: (type: 'plus' | 'minus', id: number, quantity: number) => void
  removeCartItem: (id: number) => void
  className?: string
  loading: boolean
}

export const CheckoutCart: React.FC<Props> = ({
  items,
  onClickCountButton,
  removeCartItem,
  className,
  loading,
}) => {
  return (
    <WhiteBlock title="1.Корзина" className={className}>
      <div className="flex flex-col gap-4">
        {loading
          ? [...Array(4)].map((_, index) => <CheckoutItemSkeleton key={index} />)
          : items.map((item) => (
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
  )
}
