import { Button } from "@/components/ui/button"
import { Coffee } from "lucide-react"

export function SupportMe() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://buymeacoffee.com/prashanth_ks"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <Button
          variant="outline"
          size="sm"
          className="gap-2 rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:shadow-lg border-primary/20 hover:border-primary/40 transition-all"
        >
          <Coffee className="size-4" />
          <span className="hidden sm:inline">Support Me</span>
        </Button>
      </a>
    </div>
  )
}
