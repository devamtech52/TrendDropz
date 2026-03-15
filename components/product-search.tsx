"use client"

import { useState, useRef, useEffect } from "react"
import { Search, Sparkles, Loader2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProductSearchProps {
  onSearch: (query: string) => void
  isSearching: boolean
}

const suggestions = [
  "Portable Mixer",
  "Smart Watch",
  "Wireless Earbuds",
  "LED Strip Lights",
  "Phone Holder",
  "Massage Gun",
]

export function ProductSearch({ onSearch, isSearching }: ProductSearchProps) {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query.trim())
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion)
    onSearch(suggestion)
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative">
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl border-2 bg-card transition-all duration-300",
            isFocused
              ? "border-primary shadow-lg shadow-primary/20"
              : "border-border hover:border-primary/50"
          )}
        >
          {/* Animated gradient border effect */}
          {isFocused && (
            <div className="absolute inset-0 -z-10 animate-pulse bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl" />
          )}

          <div className="flex items-center gap-3 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              {isSearching ? (
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              ) : (
                <Search className="h-6 w-6 text-primary" />
              )}
            </div>

            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Search any product (e.g., Portable Mixer, Smart Watch)..."
              className="flex-1 bg-transparent text-lg text-foreground placeholder:text-muted-foreground focus:outline-none"
              disabled={isSearching}
            />

            <Button
              type="submit"
              disabled={!query.trim() || isSearching}
              className="h-12 gap-2 rounded-xl bg-primary px-6 text-primary-foreground hover:bg-primary/90"
            >
              {isSearching ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Analyzing
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  Analyze
                </>
              )}
            </Button>
          </div>
        </div>
      </form>

      {/* Quick suggestions */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-sm text-muted-foreground">Try:</span>
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => handleSuggestionClick(suggestion)}
            disabled={isSearching}
            className="rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-sm text-secondary-foreground transition-all hover:border-primary hover:bg-primary/10 hover:text-primary disabled:opacity-50"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  )
}
