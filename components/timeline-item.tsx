// components/timeline-item.tsx
interface TimelineItemProps {
    year: string
    title: string
    description: string
  }
  
  export default function TimelineItem({ year, title, description }: TimelineItemProps) {
    return (
      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div className="rounded-full bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold">{year}</div>
          <div className="h-full w-0.5 bg-border mt-2"></div>
        </div>
        <div className="pb-8">
          <h4 className="text-lg font-bold">{title}</h4>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    )
  }