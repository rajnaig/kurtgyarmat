// components/shared/activity-card.tsx
import Image from "next/image"

interface ActivityCardProps {
  title: string
  description: string
  imageSrc: string
}

export function ActivityCard({ title, description, imageSrc }: ActivityCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background p-2">
      <div className="h-60 w-full overflow-hidden rounded-md">
        <Image
          src={imageSrc}
          alt={title}
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-foreground/70">
          {description}
        </p>
      </div>
    </div>
  )
}