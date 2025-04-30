
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function ServiceCard({ 
  title, 
  description, 
  icon: Icon,
  className 
}: ServiceCardProps) {
  return (
    <div className={cn(
      "bg-shaza-darkgray rounded-lg p-6 transition-all duration-300",
      "border border-transparent hover:border-shaza-gold group",
      className
    )}>
      <div className="mb-4 bg-shaza-black/50 p-4 rounded-lg inline-block 
        group-hover:bg-shaza-gold/20 transition-all duration-300">
        <Icon 
          size={32} 
          className="text-shaza-gold" 
        />
      </div>
      <h3 className="text-xl font-serif font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
