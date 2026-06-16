'use client'

import React from 'react'
import { AddressSuggestions } from 'react-dadata'
import 'react-dadata/dist/react-dadata.css'

interface Props {
  onChange?: (value?: string) => void
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="bbc0b6147c5d21eae19c91e4ab055d4012225e03"
      onChange={(data) => onChange?.(data?.value)}
    />
  )
}
