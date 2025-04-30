
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface ProjectCardProps {
  title: string;
  category: string;
  imageSrc: string;
  className?: string;
}

export function ProjectCard({
  title,
  category,
  imageSrc,
  className
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div 
          className={cn(
            "relative overflow-hidden rounded-lg cursor-pointer",
            "group transform transition-all duration-500",
            "hover:-translate-y-2",
            className
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <img 
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className={cn(
              "absolute inset-0 bg-gradient-to-b from-transparent to-shaza-black/90",
              "opacity-70 transition-opacity duration-300",
              isHovered && "opacity-100"
            )} />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <span className="text-sm text-shaza-gold">{category}</span>
            <h3 className="text-lg font-serif mt-1">{title}</h3>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-3xl bg-shaza-darkgray border-shaza-gold">
        <div className="p-4">
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-auto max-h-[70vh] object-contain mb-4"
          />
          <h3 className="text-xl font-serif text-white mb-1">{title}</h3>
          <p className="text-shaza-gold">{category}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
