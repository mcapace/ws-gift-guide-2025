export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-neutral-charcoal/20 rounded ${className || ""}`}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col h-full">
      {/* Image Skeleton */}
      <Skeleton className="h-80 md:h-96 w-full" />
      
      {/* Content Skeleton */}
      <div className="p-7 flex flex-col flex-grow">
        <Skeleton className="h-7 w-32 mb-2" />
        <Skeleton className="h-10 w-48 mb-2" />
        <Skeleton className="h-6 w-40 mb-4" />
        <Skeleton className="h-20 w-full mb-5" />
        <Skeleton className="h-10 w-24 mb-5" />
        <Skeleton className="h-20 w-full mb-5" />
        <Skeleton className="h-12 w-full mt-auto" />
      </div>
    </div>
  );
}

