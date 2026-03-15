"use client"

import { ComparisonCard, type ComparisonProduct } from "./comparison-card"
import { Skeleton } from "@/components/ui/skeleton"
import { Search, Package } from "lucide-react"

interface SearchResultsProps {
  products: ComparisonProduct[]
  isLoading: boolean
  searchQuery: string
  hasSearched: boolean
}

function ResultsSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="overflow-hidden rounded-2xl border border-border bg-card">
          <Skeleton className="h-48 w-full rounded-none" />
          <div className="space-y-3 p-4">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-8 w-32" />
            <div className="space-y-2">
              <Skeleton className="h-2 w-full" />
              <Skeleton className="h-2 w-full" />
              <Skeleton className="h-2 w-full" />
            </div>
            <Skeleton className="h-10 w-full rounded-xl" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function SearchResults({ products, isLoading, searchQuery, hasSearched }: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="mt-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <Search className="h-5 w-5 animate-pulse text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Analyzing &quot;{searchQuery}&quot;</h2>
            <p className="text-sm text-muted-foreground">Finding the best products from suppliers...</p>
          </div>
        </div>
        <ResultsSkeleton />
      </div>
    )
  }

  if (!hasSearched) {
    return null
  }

  if (products.length === 0) {
    return (
      <div className="mt-12 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary">
          <Package className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">No products found</h3>
        <p className="text-muted-foreground">Try searching for a different product</p>
      </div>
    )
  }

  return (
    <div className="mt-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <Package className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">
              Best matches for &quot;{searchQuery}&quot;
            </h2>
            <p className="text-sm text-muted-foreground">
              {products.length} similar products compared from multiple suppliers
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {products.map((product, index) => (
          <ComparisonCard key={product.id} product={product} rank={index + 1} />
        ))}
      </div>
    </div>
  )
}
