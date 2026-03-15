"use client"

import { RefreshCw, Bell, Sparkles, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavbarProps {
  onRefresh: () => void
  isLoading: boolean
}

export function Navbar({ onRefresh, isLoading }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-600 shadow-lg shadow-primary/30">
            <Sparkles className="h-5 w-5 text-white" />
            <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-background" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              <span className="text-foreground">Trend</span>
              <span className="text-primary">Drop</span>
            </h1>
            <p className="text-[10px] font-medium text-muted-foreground">Product Research for Indian Market</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="hidden gap-2 border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 sm:flex"
          >
            <Crown className="h-4 w-4" />
            Upgrade to Pro
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              3
            </span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={onRefresh}
            disabled={isLoading}
            className="gap-2"
          >
            <RefreshCw className={cn("h-4 w-4", isLoading && "animate-spin")} />
            <span className="hidden sm:inline">Refresh</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
