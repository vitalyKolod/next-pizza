'use client'
import { ProductWithRelations } from '@/@types/prisma'
import { useCartStore } from '@/shared/store'
import React from 'react'
import toast from 'react-hot-toast'
import { ChooseProductForm } from './choose-product-form'
import { ChoosePizzaForm } from './choose-pizza-form'

interface Props {
  product: ProductWithRelations
  _onSubmit: VoidFunction
}

export const ProductForm: React.FC<Props> = ({ product, _onSubmit }) => {
  const loading = useCartStore((state) => state.loading)
  const addCartItem = useCartStore((state) => state.addCartItem)
  const firstItem = product.items[0]
  const isPizzaForm = Boolean(firstItem.pizzaType)

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id

      await addCartItem({
        productItemId: itemId,
        ingredients,
      })
      toast.success(`${product.name} добавлена в корзину`)
      _onSubmit?.()
    } catch (error) {
      toast.error(`Ошибка при добавлении товар в корзину`)
      console.error('Error adding product to cart:', error)
    }
  }
  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        imageUrl={product.imageUrl}
        name={product.name}
        ingredients={product.ingredients}
        items={product.items}
        onSubmit={onSubmit}
        loading={loading}
      />
    )
  }
  return (
    <ChooseProductForm
      imageUrl={product.imageUrl}
      name={product.name}
      onSubmit={onSubmit}
      price={firstItem.price}
      loading={loading}
    />
  )
}
