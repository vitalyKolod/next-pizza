import { useSet } from 'react-use'
import React from 'react'
import { useSearchParams } from 'next/navigation'

interface PriceProps {
  priceFrom?: number
  priceTo?: number
}

interface QueryFilters extends PriceProps {
  pizzaTypes: string
  sizes: string
  ingredients: string
}

export interface Filters {
  sizes: Set<string>
  pizzaTypes: Set<string>
  selectedIngredients: Set<string>
  prices: PriceProps
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void
  setPizzaTypes: (value: string) => void
  setSizes: (value: string) => void
  setSelectedIngredients: (value: string) => void
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>

  /*Фильтр ингредиентов*/
  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(
      searchParams.get('ingredients') ? searchParams.get('ingredients')?.split(',') : []
    )
  )

  /*Фильтр размеров*/
  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(searchParams.get('sizes') ? searchParams.get('sizes')?.split(',') : [])
  )

  /*Фильтр типа пиццы*/
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>(
      searchParams.get('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : []
    )
  )

  /*Фильтр стоимости*/
  const [prices, setPrices] = React.useState<PriceProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  })

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  // const filters = {
  //   ...prices,
  //   pizzaTypes: Array.from(pizzaTypes),
  //   sizes: Array.from(sizes),
  //   ingredients: Array.from(selectedIngredients),
  // }

  return React.useMemo(
    () => ({
      sizes,
      pizzaTypes,
      selectedIngredients,
      prices,
      setPrices: updatePrice,
      setPizzaTypes: togglePizzaTypes,
      setSizes: toggleSizes,
      setSelectedIngredients: toggleIngredients,
    }),
    [
      sizes,
      pizzaTypes,
      selectedIngredients,
      prices,
      updatePrice,
      togglePizzaTypes,
      toggleSizes,
      toggleIngredients,
    ]
  )
}
