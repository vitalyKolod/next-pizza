import { mapPizzaType, PizzaSize, PizzaType } from '../constants/pizza'
import { Ingredients, ProductItem } from '@prisma/client'
import { calcTotalPizzaPrice } from './calc-total-pizza-price'

export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredients[],
  selectedIngredients: Set<number>
) => {
  const totalPrice = calcTotalPizzaPrice(type, size, items, ingredients, selectedIngredients)
  const textDetails = `${size} см, ${mapPizzaType[type]} пицца`

  return { totalPrice, textDetails }
}
