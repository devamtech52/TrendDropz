"use client"

import { useState } from "react"
import { Search, Sparkles, X, TrendingUp, Target, Users, BarChart3, Zap, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { ScoreRing } from "./score-ring"
import { StickerBadge } from "./sticker-badge"

interface AnalyzedProduct {
  name: string
  metaAds: number
  scalability: number
  competition: number
  profitMargin: number
  trendScore: number
  overallScore: number
  monthlySearches: number
  avgCPC: number
  recommendation: string
  pros: string[]
  cons: string[]
  targetAudience: string[]
  bestPlatforms: string[]
}

function generateAnalysis(productName: string): AnalyzedProduct {
  const metaAds = Math.floor(Math.random() * 4) + 6
  const scalability = Math.floor(Math.random() * 4) + 5
  const competition = Math.floor(Math.random() * 5) + 4
  const profitMargin = Math.floor(Math.random() * 25) + 20
  const trendScore = Math.floor(Math.random() * 4) + 6
  const overallScore = Math.round((metaAds + scalability + (10 - competition) + trendScore) / 4)
  
  const recommendations = [
    "Strong potential for scaling with Meta ads. Focus on video content and UGC for best results.",
    "Excellent product for Indian market. Consider bundling with complementary items.",
    "Good entry point for new dropshippers. Test with small budgets first.",
    "High viral potential. Leverage Instagram Reels and YouTube Shorts for organic reach.",
  ]

  const allPros = [
    "High demand in Indian market",
    "Good profit margins",
    "Easy to ship and handle",
    "Strong repeat purchase potential",
    "Low return rate historically",
    "Multiple supplier options available",
    "Growing trend on social media",
    "Appeals to wide demographic",
  ]

  const allCons = [
    "Seasonal demand fluctuations",
    "Some quality variance between suppliers",
    "Requires good product photography",
    "Moderate competition",
    "May need customer education",
    "Price sensitive market segment",
  ]

  const audiences = [
    "18-34 year olds",
    "Urban professionals",
    "Health conscious consumers",
    "Tech enthusiasts",
    "Budget shoppers",
    "Premium buyers",
    "Gift purchasers",
    "Home makers",
  ]

  const platforms = ["Facebook Ads", "Instagram Ads", "Google Shopping", "Meesho", "Shopify", "WooCommerce"]

  return {
    name: productName,
    metaAds,
    scalability,
    competition,
    profitMargin,
    trendScore,
    overallScore,
    monthlySearches: Math.floor(Math.random() * 80000) + 20000,
    avgCPC: parseFloat((Math.random() * 15 + 5).toFixed(2)),
    recommendation: recommendations[Math.floor(Math.random() * recommendations.length)],
    pros: allPros.sort(() => Math.random() - 0.5).slice(0, 4),
    cons: allCons.sort(() => Math.random() - 0.5).slice(0, 3),
    targetAudience: audiences.sort(() => Math.random() - 0.5).slice(0, 3),
    bestPlatforms: platforms.sort(() => Math.random() - 0.5).slice(0, 3),
  }
}

export function ProductAnalyzer() {
  const [query, setQuery] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<AnalyzedProduct | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleAnalyze = async () => {
    if (!query.trim()) return
    setIsAnalyzing(true)
    setIsOpen(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    const analysis = generateAnalysis(query)
    setResult(analysis)
    setIsAnalyzing(false)
  }

  const handleClose = () => {
    setIsOpen(false)
    setResult(null)
  }

  return (
    <>
      {/* Search Bar */}
      <div className="relative mx-auto max-w-2xl">
        <div className="relative flex items-center gap-2 rounded-2xl border border-border/50 bg-card/80 p-2 backdrop-blur-sm transition-all focus-within:border-primary/50 focus-within:shadow-lg focus-within:shadow-primary/10">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <Input
            type="text"
            placeholder="Enter any product to analyze (e.g., portable mixer, yoga mat)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
            className="flex-1 border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-0"
          />
          <Button
            onClick={handleAnalyze}
            disabled={!query.trim() || isAnalyzing}
            className="gap-2 rounded-xl bg-primary px-6 text-primary-foreground hover:bg-primary/90"
          >
            {isAnalyzing ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Analyzing...
              </>
            ) : (
              <>
                <Search className="h-4 w-4" />
                Analyze
              </>
            )}
          </Button>
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          Get instant AI-powered insights on any product's dropshipping potential
        </p>
      </div>

      {/* Results Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-auto rounded-3xl border border-border/50 bg-card p-6 shadow-2xl">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={handleClose}
            >
              <X className="h-5 w-5" />
            </Button>

            {isAnalyzing ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="relative">
                  <div className="h-20 w-20 animate-spin rounded-full border-4 border-muted border-t-primary" />
                  <Sparkles className="absolute inset-0 m-auto h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">Analyzing Product</h3>
                <p className="mt-2 text-muted-foreground">
                  Scanning Amazon, Flipkart, and social media trends...
                </p>
              </div>
            ) : result ? (
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-2xl font-bold text-foreground">{result.name}</h2>
                      {result.overallScore >= 8 && <StickerBadge type="winner" />}
                      {result.overallScore >= 7 && result.overallScore < 8 && <StickerBadge type="trending" />}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">AI-Powered Product Analysis</p>
                  </div>
                  <div
                    className={cn(
                      "flex h-20 w-20 flex-col items-center justify-center rounded-2xl font-bold shadow-lg",
                      result.overallScore >= 8
                        ? "bg-emerald-500/20 text-emerald-400 ring-2 ring-emerald-500/30"
                        : result.overallScore >= 6
                        ? "bg-blue-500/20 text-blue-400 ring-2 ring-blue-500/30"
                        : "bg-indigo-500/20 text-indigo-400 ring-2 ring-indigo-500/30"
                    )}
                  >
                    <span className="text-3xl">{result.overallScore}</span>
                    <span className="text-xs opacity-70">/10</span>
                  </div>
                </div>

                {/* Score Rings */}
                <div className="grid grid-cols-5 gap-4 rounded-2xl bg-muted/30 p-6">
                  <ScoreRing score={result.metaAds} size="lg" label="Meta Ads" />
                  <ScoreRing score={result.scalability} size="lg" label="Scalability" />
                  <ScoreRing score={10 - result.competition} size="lg" label="Opportunity" />
                  <ScoreRing score={result.trendScore} size="lg" label="Trend" />
                  <ScoreRing score={Math.round(result.profitMargin / 5)} size="lg" label="Profit" />
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="rounded-xl border border-border/50 bg-muted/30 p-4 text-center">
                    <TrendingUp className="mx-auto h-6 w-6 text-primary" />
                    <div className="mt-2 text-2xl font-bold text-foreground">
                      {(result.monthlySearches / 1000).toFixed(0)}K
                    </div>
                    <div className="text-xs text-muted-foreground">Monthly Searches</div>
                  </div>
                  <div className="rounded-xl border border-border/50 bg-muted/30 p-4 text-center">
                    <Target className="mx-auto h-6 w-6 text-emerald-400" />
                    <div className="mt-2 text-2xl font-bold text-foreground">
                      {result.profitMargin}%
                    </div>
                    <div className="text-xs text-muted-foreground">Profit Margin</div>
                  </div>
                  <div className="rounded-xl border border-border/50 bg-muted/30 p-4 text-center">
                    <BarChart3 className="mx-auto h-6 w-6 text-amber-400" />
                    <div className="mt-2 text-2xl font-bold text-foreground">
                      Rs.{result.avgCPC}
                    </div>
                    <div className="text-xs text-muted-foreground">Avg CPC</div>
                  </div>
                  <div className="rounded-xl border border-border/50 bg-muted/30 p-4 text-center">
                    <Users className="mx-auto h-6 w-6 text-blue-400" />
                    <div className="mt-2 text-2xl font-bold text-foreground">
                      {result.competition}/10
                    </div>
                    <div className="text-xs text-muted-foreground">Competition</div>
                  </div>
                </div>

                {/* AI Recommendation */}
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4">
                  <div className="flex items-center gap-2 text-primary">
                    <Zap className="h-5 w-5" />
                    <span className="font-semibold">AI Recommendation</span>
                  </div>
                  <p className="mt-2 text-sm text-foreground">{result.recommendation}</p>
                </div>

                {/* Pros & Cons */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                    <h4 className="flex items-center gap-2 font-semibold text-emerald-400">
                      <div className="h-2 w-2 rounded-full bg-emerald-400" />
                      Pros
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {result.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-emerald-400">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-4">
                    <h4 className="flex items-center gap-2 font-semibold text-red-400">
                      <AlertCircle className="h-4 w-4" />
                      Considerations
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {result.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-red-400">-</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Target Audience & Platforms */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Target Audience</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {result.targetAudience.map((audience, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-400"
                        >
                          {audience}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">Best Platforms</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {result.bestPlatforms.map((platform, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-400"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    className="flex-1 gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={handleClose}
                  >
                    Find Similar Products
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Save Analysis
                  </Button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  )
}
