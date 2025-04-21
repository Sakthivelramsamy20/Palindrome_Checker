
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!isLoading && loaderRef.current) {
      const tl = gsap.timeline();
      
      tl.to(circleRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.3
      });
      
      tl.to(loaderRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          if (loaderRef.current) {
            loaderRef.current.style.display = 'none';
          }
        }
      });
    }
  }, [isLoading]);
  
  if (!isLoading) return null;
  
  return (
    <div ref={loaderRef} className="loading-screen">
      <div ref={circleRef} className="loading-circle"></div>
    </div>
  );
};

export default LoadingScreen;
