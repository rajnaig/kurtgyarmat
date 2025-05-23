// components/testimonial-card.tsx
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
      <Quote className="h-8 w-8 text-muted-foreground mb-4" />
      <p className="mb-4 italic">{quote}</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  )
}