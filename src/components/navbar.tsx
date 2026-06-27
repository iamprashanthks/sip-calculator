import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex h-14 items-center justify-between px-4">
        <span className="font-semibold text-lg tracking-tight bg-gradient-to-r from-blue-700 via-purple-600 to-blue-500 bg-clip-text text-transparent">
          SIP Calculator
        </span>
        <a
          href="https://github.com/sponsors/anomalyco"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            size="sm"
            className="gap-2 border-primary/20 hover:border-primary/40"
          >
            <Heart className="size-4 fill-red-500 text-red-500" />
            Support
          </Button>
        </a>
      </div>
    </header>
  )
}
