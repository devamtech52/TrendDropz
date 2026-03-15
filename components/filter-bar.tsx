"use client"

import { Filter, X, Flame, TrendingUp, Sparkles, LayoutGrid } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { categories } from "@/lib/products-data"

export interface Filters {
  category: string
  source: string
  scoreRange: string
  sortBy: string
  quickFilter: string
}

interface FilterBarProps {
  filters: Filters
  onFilterChange: (filters: Filters) => void
  totalProducts: number
  filteredCount: number
}

const quickFilters = [
  { id: "all", label: "All Products", icon: LayoutGrid },
  { id: "hot", label: "Hot", icon: Flame },
  { id: "trending", label: "Trending", icon: TrendingUp },
  { id: "new", label: "New Arrivals", icon: Sparkles },
]

export function FilterBar({ filters, onFilterChange, totalProducts, filteredCount }: FilterBarProps) {
  const updateFilter = (key: keyof Filters, value: string) => {
    onFilterChange({ ...filters, [key]: value })
  }

  const hasActiveFilters = 
    filters.category !== "all" || 
    filters.source !== "all" || 
    filters.scoreRange !== "all" ||
    filters.quickFilter !== "all"

  const clearFilters = () => {
    onFilterChange({
      category: "all",
      source: "all",
      scoreRange: "all",
      sortBy: "score",
      quickFilter: "all",
    })
  }

  return (
    <div className="border-b border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        {/* Quick Filters */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {quickFilters.map((qf) => (
            <button
              key={qf.id}
              onClick={() => updateFilter("quickFilter", qf.id)}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all",
                filters.quickFilter === qf.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <qf.icon className="h-4 w-4" />
              {qf.label}
            </button>
          ))}
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="h-4 w-4" />
            <span>Filters:</span>
          </div>

          <Select value={filters.category} onValueChange={(v) => updateFilter("category", v)}>
            <SelectTrigger className="h-9 w-[160px] border-border/50 bg-muted/30">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat.toLowerCase().replace(/ & /g, "-")}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={filters.source} onValueChange={(v) => updateFilter("source", v)}>
            <SelectTrigger className="h-9 w-[140px] border-border/50 bg-muted/30">
              <SelectValue placeholder="Source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sources</SelectItem>
              <SelectItem value="amazon">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FF9900]" />
                  Amazon
                </span>
              </SelectItem>
              <SelectItem value="flipkart">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#2874F0]" />
                  Flipkart
                </span>
              </SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.scoreRange} onValueChange={(v) => updateFilter("scoreRange", v)}>
            <SelectTrigger className="h-9 w-[140px] border-border/50 bg-muted/30">
              <SelectValue placeholder="Score" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Scores</SelectItem>
              <SelectItem value="8-10">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  8-10 (Best)
                </span>
              </SelectItem>
              <SelectItem value="6-7">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  6-7 (Good)
                </span>
              </SelectItem>
              <SelectItem value="1-5">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-indigo-500" />
                  1-5 (Fair)
                </span>
              </SelectItem>
            </SelectContent>
          </Select>

          <Select value={filters.sortBy} onValueChange={(v) => updateFilter("sortBy", v)}>
            <SelectTrigger className="h-9 w-[140px] border-border/50 bg-muted/30">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="score">Highest Score</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="trending">Most Trending</SelectItem>
            </SelectContent>
          </Select>

          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="gap-1 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
              Clear
            </Button>
          )}

          <div className="ml-auto text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredCount}</span> of{" "}
            <span className="font-semibold text-foreground">{totalProducts}</span> products
          </div>
        </div>
      </div>
    </div>
  )
}
