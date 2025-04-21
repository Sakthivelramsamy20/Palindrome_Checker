
import { ReactNode, useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const page = pageRef.current;
    
    if (page) {
      gsap.fromTo(
        page,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.3
        }
      );
    }
    
    return () => {
      if (page) {
        gsap.to(page, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: 'power2.in'
        });
      }
    };
  }, []);
  
  return (
    <div ref={pageRef} className="page-container min-h-screen">
      {children}
    </div>
  );
};

export default PageTransition;
