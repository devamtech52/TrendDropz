"use client"

import { Skeleton } from "@/components/ui/skeleton"

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/80">
      <Skeleton className="aspect-[4/3] w-full" />
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <Skeleton className="h-6 w-16" />
        </div>
        
        <div className="flex gap-2">
          <Skeleton className="h-5 w-20 rounded-md" />
          <Skeleton className="h-5 w-16 rounded-md" />
          <Skeleton className="h-5 w-14 rounded-md" />
        </div>

        <div className="grid grid-cols-4 gap-2 rounded-xl bg-muted/30 p-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-3 w-8" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>

        <div className="space-y-1.5">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-4/5" />
        </div>

        <Skeleton className="mt-auto h-9 w-full rounded-lg" />
      </div>
    </div>
  )
}
