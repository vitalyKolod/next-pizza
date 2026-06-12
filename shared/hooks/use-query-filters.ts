import React from 'react'
import qs from 'qs'
import { useRouter } from 'next/navigation'
import { Filters } from './use-filters'

export const useQueryFilters = ({ prices, pizzaTypes, sizes, selectedIngredients }: Filters) => {
  const router = useRouter()

  const pizzaTypesString = Array.from(pizzaTypes).join(',')
  const sizesString = Array.from(sizes).join(',')
  const ingredientsString = Array.from(selectedIngredients).join(',')

  React.useEffect(() => {
    const params = {
      ...prices,
      pizzaTypes: pizzaTypesString,
      sizes: sizesString,
      ingredients: ingredientsString,
    }

    const query = qs.stringify(params, {
      arrayFormat: 'comma',
    })

    router.replace(`?${query}`, {
      scroll: false,
    })
  }, [prices.priceFrom, prices.priceTo, pizzaTypesString, sizesString, ingredientsString])
}
