'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
import { Bot } from 'lucide-react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

// Fallback component when Spline fails to load
function SplineFallback({ className }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <div className="relative">
        {/* Animated glow effect */}
        <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="relative bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-12 border border-accent/20">
          <Bot className="w-32 h-32 text-accent animate-pulse" />
          <p className="text-muted-foreground text-sm mt-4 text-center">Interactive 3D Model</p>
        </div>
      </div>
    </div>
  )
}

// Loading spinner component
function LoadingSpinner() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showFallback, setShowFallback] = useState(false)

  // Timeout fallback - if Spline doesn't load in 10 seconds, show fallback
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoaded) {
        setShowFallback(true)
      }
    }, 10000)

    return () => clearTimeout(timer)
  }, [isLoaded])

  if (hasError || showFallback) {
    return <SplineFallback className={className} />
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Spline
        scene={scene}
        className={className}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </Suspense>
  )
}
