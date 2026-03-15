"use client"

import { ProductCard } from "./product-card"
import { ProductCardSkeleton } from "./product-card-skeleton"
import type { Product } from "@/lib/products-data"
import { PackageX } from "lucide-react"

interface ProductGridProps {
  products: Product[]
  isLoading: boolean
}

export function ProductGrid({ products, isLoading }: ProductGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-muted/50">
          <PackageX className="h-10 w-10 text-muted-foreground" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-foreground">No products found</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Try adjusting your filters to find what you're looking for
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
