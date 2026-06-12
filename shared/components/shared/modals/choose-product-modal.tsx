'use client'
import { cn } from '@/shared/lib/utils'
import React from 'react'
import { Dialog, DialogContent, DialogTitle } from '@/shared/components/ui/dialog'
import { useRouter } from 'next/navigation'
import { ProductWithRelations } from '@/@types/prisma'
import { ProductForm } from '../product-form'

interface Props {
  className?: string
  product: ProductWithRelations
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
  const router = useRouter()
  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 !w-[1060px] !max-w-[1060px] min-h-[550px] bg-white overflow-hidden',
          className
        )}
      >
        <ProductForm product={product} _onSubmit={() => router.back()} />

        <DialogTitle className="hidden">{product.name}</DialogTitle>
      </DialogContent>
    </Dialog>
  )
}
