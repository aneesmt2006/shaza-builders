
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  center = true,
  className 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-12",
      center && "text-center",
      className
    )}>
      <h2 className={cn(
        "text-3xl md:text-4xl font-bold font-serif mb-4",
        "relative inline-block after:content-[''] after:block after:h-[3px] after:bg-shaza-gold after:mt-2"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
