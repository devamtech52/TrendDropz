"use client"

import Image from "next/image"
import { Star, TrendingUp, Users, Target, DollarSign, Flame, Zap, Crown, Rocket, Check, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ComparisonProduct {
  id: string
  name: string
  image: string
  price: number
  supplier: string
  supplierLogo: string
  scores: {
    metaAds: number
    scalability: number
    competition: number
    profitMargin: number
    trendScore: number
  }
  metrics: {
    monthlySearches: string
    avgCPC: string
    estimatedProfit: string
    sellerCount: number
  }
  badges: string[]
  pros: string[]
  recommended?: boolean
}

interface ComparisonCardProps {
  product: ComparisonProduct
  rank: number
}

const getBadgeConfig = (badge: string) => {
  const configs: Record<string, { icon: React.ReactNode; className: string }> = {
    "Best Seller": { icon: <Crown className="h-3 w-3" />, className: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
    "Hot": { icon: <Flame className="h-3 w-3" />, className: "bg-red-500/20 text-red-400 border-red-500/30" },
    "Trending": { icon: <TrendingUp className="h-3 w-3" />, className: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
    "New": { icon: <Zap className="h-3 w-3" />, className: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
    "Winner": { icon: <Rocket className="h-3 w-3" />, className: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
    "High Margin": { icon: <DollarSign className="h-3 w-3" />, className: "bg-green-500/20 text-green-400 border-green-500/30" },
  }
  return configs[badge] || { icon: <Star className="h-3 w-3" />, className: "bg-primary/20 text-primary border-primary/30" }
}

const getScoreColor = (score: number) => {
  if (score >= 8) return "text-emerald-400"
  if (score >= 6) return "text-blue-400"
  if (score >= 4) return "text-indigo-400"
  return "text-red-400"
}

const getScoreBarColor = (score: number) => {
  if (score >= 8) return "bg-emerald-500"
  if (score >= 6) return "bg-blue-500"
  if (score >= 4) return "bg-indigo-500"
  return "bg-red-500"
}

export function ComparisonCard({ product, rank }: ComparisonCardProps) {
  const overallScore = Math.round(
    (product.scores.metaAds + product.scores.scalability + product.scores.competition + product.scores.profitMargin + product.scores.trendScore) / 5
  )

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:shadow-xl",
        product.recommended
          ? "border-primary/50 shadow-lg shadow-primary/10"
          : "border-border hover:border-primary/30"
      )}
    >
      {/* Recommended ribbon */}
      {product.recommended && (
        <div className="absolute -right-8 top-6 z-20 rotate-45 bg-primary px-10 py-1 text-xs font-bold text-primary-foreground shadow-lg">
          TOP PICK
        </div>
      )}

      {/* Rank badge */}
      <div className="absolute left-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-lg bg-background/90 text-sm font-bold text-foreground shadow-md backdrop-blur-sm">
        #{rank}
      </div>

      {/* Product image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-secondary to-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badges overlay */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          {product.badges.slice(0, 3).map((badge) => {
            const config = getBadgeConfig(badge)
            return (
              <span
                key={badge}
                className={cn(
                  "flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium backdrop-blur-sm",
                  config.className
                )}
              >
                {config.icon}
                {badge}
              </span>
            )
          })}
        </div>

        {/* Overall score badge */}
        <div className="absolute right-3 top-3 z-10">
          <div
            className={cn(
              "flex h-14 w-14 flex-col items-center justify-center rounded-xl border-2 bg-background/90 backdrop-blur-sm",
              overallScore >= 8 ? "border-emerald-500" : overallScore >= 6 ? "border-blue-500" : "border-indigo-500"
            )}
          >
            <span className={cn("text-xl font-bold", getScoreColor(overallScore))}>{overallScore}</span>
            <span className="text-[10px] text-muted-foreground">/10</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Supplier */}
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-secondary">
            <Image src={product.supplierLogo} alt={product.supplier} width={14} height={14} />
          </div>
          <span className="text-xs text-muted-foreground">{product.supplier}</span>
        </div>

        {/* Name */}
        <h3 className="mb-3 line-clamp-2 text-base font-semibold text-foreground">{product.name}</h3>

        {/* Price */}
        <div className="mb-4 flex items-baseline gap-2">
          <span className="text-2xl font-bold text-foreground">₹{product.price.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground">Est. Profit: {product.metrics.estimatedProfit}</span>
        </div>

        {/* Score bars */}
        <div className="mb-4 space-y-2">
          {[
            { label: "Meta Ads", value: product.scores.metaAds, icon: <Target className="h-3.5 w-3.5" /> },
            { label: "Scalability", value: product.scores.scalability, icon: <TrendingUp className="h-3.5 w-3.5" /> },
            { label: "Competition", value: product.scores.competition, icon: <Users className="h-3.5 w-3.5" /> },
          ].map((score) => (
            <div key={score.label} className="flex items-center gap-2">
              <div className="flex w-24 items-center gap-1.5 text-xs text-muted-foreground">
                {score.icon}
                {score.label}
              </div>
              <div className="flex-1">
                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div
                    className={cn("h-full rounded-full transition-all duration-500", getScoreBarColor(score.value))}
                    style={{ width: `${score.value * 10}%` }}
                  />
                </div>
              </div>
              <span className={cn("w-8 text-right text-sm font-semibold", getScoreColor(score.value))}>
                {score.value}/10
              </span>
            </div>
          ))}
        </div>

        {/* Quick metrics */}
        <div className="mb-4 grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-secondary/50 p-2 text-center">
            <p className="text-xs text-muted-foreground">Monthly Searches</p>
            <p className="text-sm font-semibold text-foreground">{product.metrics.monthlySearches}</p>
          </div>
          <div className="rounded-lg bg-secondary/50 p-2 text-center">
            <p className="text-xs text-muted-foreground">Avg CPC</p>
            <p className="text-sm font-semibold text-foreground">{product.metrics.avgCPC}</p>
          </div>
        </div>

        {/* Pros */}
        <div className="mb-4 space-y-1">
          {product.pros.slice(0, 2).map((pro, index) => (
            <div key={index} className="flex items-start gap-2 text-xs">
              <Check className="mt-0.5 h-3 w-3 shrink-0 text-emerald-500" />
              <span className="text-muted-foreground">{pro}</span>
            </div>
          ))}
        </div>

        {/* Action button */}
        <button
          className={cn(
            "flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium transition-all",
            product.recommended
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
          )}
        >
          View Details
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
