"use client"

import { cn } from "@/lib/utils"
import { Flame, Sparkles, TrendingUp, BadgeCheck, Zap, Crown, Target, Rocket } from "lucide-react"

type StickerType = "hot" | "trending" | "new" | "verified" | "top" | "winner" | "target" | "rocket"

interface StickerBadgeProps {
  type: StickerType
  className?: string
}

const stickerConfig: Record<StickerType, { icon: typeof Flame; label: string; colors: string }> = {
  hot: {
    icon: Flame,
    label: "HOT",
    colors: "bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-red-500/50",
  },
  trending: {
    icon: TrendingUp,
    label: "TRENDING",
    colors: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-emerald-500/50",
  },
  new: {
    icon: Sparkles,
    label: "NEW",
    colors: "bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-blue-500/50",
  },
  verified: {
    icon: BadgeCheck,
    label: "VERIFIED",
    colors: "bg-gradient-to-br from-sky-500 to-cyan-600 text-white shadow-sky-500/50",
  },
  top: {
    icon: Crown,
    label: "TOP PICK",
    colors: "bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-blue-500/50",
  },
  winner: {
    icon: Zap,
    label: "WINNER",
    colors: "bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-purple-500/50",
  },
  target: {
    icon: Target,
    label: "HIGH ROI",
    colors: "bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-rose-500/50",
  },
  rocket: {
    icon: Rocket,
    label: "VIRAL",
    colors: "bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-violet-500/50",
  },
}

export function StickerBadge({ type, className }: StickerBadgeProps) {
  const config = stickerConfig[type]
  const Icon = config.icon

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg",
        "transform hover:scale-105 transition-transform",
        config.colors,
        className
      )}
    >
      <Icon className="h-3 w-3" />
      <span>{config.label}</span>
    </div>
  )
}
