"use client"

import { cn } from "@/lib/utils"

interface ScoreRingProps {
  score: number
  size?: "sm" | "md" | "lg"
  label?: string
  showLabel?: boolean
}

export function ScoreRing({ score, size = "md", label, showLabel = true }: ScoreRingProps) {
  const sizes = {
    sm: { container: 40, stroke: 4, text: "text-xs", labelText: "text-[8px]" },
    md: { container: 56, stroke: 5, text: "text-sm", labelText: "text-[10px]" },
    lg: { container: 72, stroke: 6, text: "text-lg", labelText: "text-xs" },
  }

  const { container, stroke, text, labelText } = sizes[size]
  const radius = (container - stroke) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (score / 10) * circumference

  const getColor = (score: number) => {
    if (score >= 8) return { stroke: "#22c55e", bg: "rgba(34, 197, 94, 0.1)" }
    if (score >= 6) return { stroke: "#3b82f6", bg: "rgba(59, 130, 246, 0.1)" }
    if (score >= 4) return { stroke: "#6366f1", bg: "rgba(99, 102, 241, 0.1)" }
    return { stroke: "#ef4444", bg: "rgba(239, 68, 68, 0.1)" }
  }

  const colors = getColor(score)

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative" style={{ width: container, height: container }}>
        <svg
          className="rotate-[-90deg]"
          width={container}
          height={container}
        >
          <circle
            cx={container / 2}
            cy={container / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={stroke}
            className="text-muted/30"
          />
          <circle
            cx={container / 2}
            cy={container / 2}
            r={radius}
            fill="none"
            stroke={colors.stroke}
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-500"
            style={{
              filter: `drop-shadow(0 0 6px ${colors.stroke})`,
            }}
          />
        </svg>
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center font-bold",
            text
          )}
          style={{ color: colors.stroke }}
        >
          {score}
        </div>
      </div>
      {showLabel && label && (
        <span className={cn("text-muted-foreground font-medium uppercase tracking-wide", labelText)}>
          {label}
        </span>
      )}
    </div>
  )
}
