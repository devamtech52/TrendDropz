"use client"

import { Search, BarChart3, Target, TrendingUp, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Smart Search",
    description: "Find trending products instantly",
  },
  {
    icon: BarChart3,
    title: "Deep Analytics",
    description: "Meta Ads, scalability & competition scores",
  },
  {
    icon: Target,
    title: "Supplier Match",
    description: "Compare across Alibaba, IndiaMART & more",
  },
  {
    icon: TrendingUp,
    title: "Trend Analysis",
    description: "Real-time market demand insights",
  },
  {
    icon: Zap,
    title: "Quick Research",
    description: "Save hours of manual research",
  },
  {
    icon: Shield,
    title: "Verified Data",
    description: "Accurate metrics from trusted sources",
  },
]

export function FeatureCards() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="group rounded-xl border border-border bg-card/50 p-4 transition-all hover:border-primary/30 hover:bg-card"
        >
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
            <feature.icon className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-sm font-semibold text-foreground">{feature.title}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}
