"use client"

import { TrendingUp, Package, Flame, BarChart3, Sparkles, ShoppingCart } from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  {
    label: "Products Analyzed",
    value: "12,847",
    change: "+234 today",
    icon: Package,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    label: "Trending Now",
    value: "847",
    change: "+12% this week",
    icon: TrendingUp,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
  },
  {
    label: "Hot Products",
    value: "156",
    change: "High demand",
    icon: Flame,
    color: "text-rose-400",
    bgColor: "bg-rose-400/10",
  },
  {
    label: "Success Rate",
    value: "89%",
    change: "Based on user data",
    icon: BarChart3,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
]

export function StatsBar() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/60 p-4 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg"
        >
          {/* Decorative gradient */}
          <div className={cn("absolute -right-4 -top-4 h-20 w-20 rounded-full opacity-20 blur-2xl", stat.bgColor)} />
          
          <div className="relative flex items-start justify-between">
            <div>
              <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
              <p className="mt-1 text-2xl font-bold text-foreground">{stat.value}</p>
              <p className={cn("mt-0.5 text-xs", stat.color)}>{stat.change}</p>
            </div>
            <div className={cn("rounded-xl p-2", stat.bgColor)}>
              <stat.icon className={cn("h-5 w-5", stat.color)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
