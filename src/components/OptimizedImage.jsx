// components/OptimizedImage.jsx
import { useState } from "react";
import { User } from "lucide-react";

export default function OptimizedImage({ src, alt, className }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Skeleton Background */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-start justify-center bg-white/5 animate-pulse">
          <User className="w-full h-2/3 text-white/40" />
        </div>
      )}
      
      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}