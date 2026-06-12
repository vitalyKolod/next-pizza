'use client'
import { cn } from '@/shared/lib/utils'
import React from 'react'
import { PizzaImage } from './pizza-image'
import { Title } from './title'
import { Button } from '../ui'
import { GroupVariants } from './group-variants'
import { PizzaSize, PizzaType, pizzaTypes } from '@/shared/constants/pizza'
import { Ingredients, ProductItem } from '@prisma/client'
import { IngredientItem } from './ingredient-item'
import { usePizzaOptions } from '@/shared/hooks'
import { getPizzaDetails } from '@/shared/lib'

interface Props {
  imageUrl: string
  name: string
  ingredients: Ingredients[] // IProduct['ingredients']
  items: ProductItem[]
  loading?: boolean
  onSubmit: (productItemId: number, ingredients: number[]) => void
  className?: string
}
// форма выбора пиццы
export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  ingredients,
  loading,
  onSubmit,
  className,
}) => {
  const {
    size,
    type,
    selectedIngredients,
    availableSizes,
    currentItemId,
    setSize,
    setType,
    addIngredients,
  } = usePizzaOptions(items)

  const { totalPrice, textDetails } = getPizzaDetails(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  )

  const handleClick = () => {
    if (currentItemId) {
      onSubmit(currentItemId, Array.from(selectedIngredients))
    }
  }

  return (
    <div className={cn(className, 'flex flex-1')}>
      <PizzaImage
        imageUrl={imageUrl}
        size={size}
        className="relative left-2 top-2 transition-all z-10 duration-300 w-[400px]h-[400px]"
      />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
        <div className="flex flex-col gap-4 mt-5">
          <GroupVariants
            items={availableSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />

          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                imageUrl={ingredient.imageUrl}
                name={ingredient.name}
                price={ingredient.price}
                onClick={() => addIngredients(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>
        <Button
          loading={loading}
          onClick={handleClick}
          // loading={loading}
          // onclick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded=[18px] w-full mt-10"
        >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  )
}
