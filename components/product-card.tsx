"use client"

import Image from "next/image"
import { ExternalLink, TrendingUp, Users, Target, BarChart3, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ScoreRing } from "./score-ring"
import { StickerBadge } from "./sticker-badge"
import type { Product } from "@/lib/products-data"

interface ProductCardProps {
  product: Product
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price)
}

function formatNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
  if (num >= 1000) return `${(num / 1000).toFixed(0)}K`
  return num.toString()
}

function getVelocityColor(velocity: string): string {
  switch (velocity) {
    case "Very High": return "text-emerald-400"
    case "High": return "text-green-400"
    case "Medium": return "text-blue-400"
    default: return "text-indigo-400"
  }
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
      {/* Stickers */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
        {product.hot && <StickerBadge type="hot" />}
        {product.trending && !product.hot && <StickerBadge type="trending" />}
        {product.newArrival && <StickerBadge type="new" />}
        {product.score >= 9 && <StickerBadge type="winner" />}
      </div>

      {/* Source Badge */}
      <div className="absolute top-3 right-3 z-10">
        <div
          className={cn(
            "px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wide",
            product.source === "amazon"
              ? "bg-[#FF9900] text-black"
              : "bg-[#2874F0] text-white"
          )}
        >
          {product.source}
        </div>
      </div>

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-4">
        {/* Title & Price Row */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-2 flex-1 text-sm font-semibold leading-tight text-foreground">
            {product.name}
          </h3>
          <div className="text-right">
            <div className="text-lg font-bold text-primary">{formatPrice(product.price)}</div>
          </div>
        </div>

        {/* Category & Tags */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground">
            {product.category}
          </span>
          {product.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-muted px-2 py-0.5 text-[10px] text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Score Rings */}
        <div className="grid grid-cols-4 gap-2 rounded-xl bg-muted/50 p-3">
          <ScoreRing score={product.metrics.metaAds} size="sm" label="Ads" />
          <ScoreRing score={product.metrics.scalability} size="sm" label="Scale" />
          <ScoreRing score={10 - product.metrics.competition} size="sm" label="Easy" />
          <ScoreRing score={product.metrics.trendScore} size="sm" label="Trend" />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Search className="h-3.5 w-3.5" />
            <span>{formatNumber(product.monthlySearches)}/mo</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BarChart3 className="h-3.5 w-3.5 text-muted-foreground" />
            <span className={cn("font-medium", getVelocityColor(product.salesVelocity))}>
              {product.salesVelocity}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Target className="h-3.5 w-3.5" />
            <span>{product.metrics.profitMargin}% margin</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Users className="h-3.5 w-3.5" />
            <span>Low competition</span>
          </div>
        </div>

        {/* AI Summary */}
        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {product.aiSummary}
        </p>

        {/* Action Buttons */}
        <div className="mt-auto flex gap-2">
          <Button
            asChild
            className="flex-1 gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90"
            size="sm"
          >
            <a href={product.productUrl} target="_blank" rel="noopener noreferrer">
              View Details
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Overall Score Badge */}
      <div className="absolute bottom-4 right-4">
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl font-bold text-lg shadow-lg",
            product.score >= 8
              ? "bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/30"
              : product.score >= 6
              ? "bg-blue-500/20 text-blue-400 ring-1 ring-blue-500/30"
              : "bg-indigo-500/20 text-indigo-400 ring-1 ring-indigo-500/30"
          )}
        >
          {product.score}
        </div>
      </div>
    </div>
  )
}
