"use client"

import { useState, useCallback } from "react"
import { ProductSearch } from "@/components/product-search"
import { SearchResults } from "@/components/search-results"
import { FeatureCards } from "@/components/feature-cards"
import { generateProductsForQuery } from "@/lib/generate-products"
import type { ComparisonProduct } from "@/components/comparison-card"
import { Zap, TrendingUp, Package, Star } from "lucide-react"

export default function TrendDropDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [products, setProducts] = useState<ComparisonProduct[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = useCallback(async (query: string) => {
    setIsSearching(true)
    setSearchQuery(query)
    setHasSearched(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const results = generateProductsForQuery(query)
    setProducts(results)
    setIsSearching(false)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute -right-40 top-1/4 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute -bottom-40 left-1/4 h-[300px] w-[300px] rounded-full bg-primary/3 blur-[80px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Trend<span className="text-primary">Drop</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-1.5 text-sm text-muted-foreground sm:flex">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
              <span>Live Data</span>
            </div>
            <button className="rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80">
              Sign In
            </button>
          </div>
        </div>
      </header>

      <main className="relative">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <Star className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Product Research</span>
            </div>

            {/* Heading */}
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Find Winning Products
              <span className="mt-2 block text-primary">Compare. Analyze. Sell.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              Search any product and instantly compare options from Alibaba, IndiaMART, Amazon & Flipkart. 
              Get detailed scores for Meta Ads potential, scalability, and competition.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-primary" />
                <span>10,000+ Products Analyzed</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span>Real-time Market Data</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-primary" />
                <span>Trusted by 5,000+ Sellers</span>
              </div>
            </div>

            {/* Search Box */}
            <div className="mx-auto mt-10 max-w-3xl">
              <ProductSearch onSearch={handleSearch} isSearching={isSearching} />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="mt-12">
            <FeatureCards />
          </div>
        </section>

        {/* Search Results */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <SearchResults
            products={products}
            isLoading={isSearching}
            searchQuery={searchQuery}
            hasSearched={hasSearched}
          />
        </section>

        {/* Footer */}
        <footer className="border-t border-border/50 bg-card/30">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
                  <Zap className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-semibold text-foreground">TrendDrop</span>
              </div>
              <p className="text-center text-sm text-muted-foreground">
                Product research tool for Indian dropshippers. Data from Alibaba, IndiaMART, Amazon & Flipkart.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
