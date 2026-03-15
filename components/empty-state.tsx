"use client"

import { Package, SearchX } from "lucide-react"

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
        <div className="relative">
          <Package className="h-12 w-12 text-muted-foreground" />
          <SearchX className="absolute -bottom-1 -right-1 h-6 w-6 text-muted-foreground" />
        </div>
      </div>
      
      <h3 className="mb-2 text-lg font-semibold text-foreground">
        No products found
      </h3>
      
      <p className="max-w-md text-sm text-muted-foreground">
        We could not find any products matching your filters. Try adjusting your
        search criteria or refresh to fetch new trending products.
      </p>
    </div>
  )
}
