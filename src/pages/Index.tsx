
import Layout from '@/components/Layout';
import PalindromeChecker from '@/components/PalindromeChecker';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const examplesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headerElement = headerRef.current;
    const examplesElement = examplesRef.current;

    if (headerElement && examplesElement) {
      const tl = gsap.timeline({ delay: 0.5 });

      tl.fromTo(
        headerElement, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      tl.fromTo(
        examplesElement.querySelectorAll('.example-item'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: 'power2.out' },
        '-=0.3'
      );
    }
  }, []);

  const palindromeExamples = [
    { text: 'Radar', description: 'A device that sends out radio waves to detect objects' },
    { text: 'Madam', description: 'A polite form of address for a woman' },
    { text: 'A man, a plan, a canal: Panama', description: 'A famous palindrome referring to the Panama Canal' },
    { text: 'Never odd or even', description: 'A phrase that reads the same forward and backward' }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div ref={headerRef} className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Palindrome</span> Checker
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover if your text reads the same backward as forward with our simple, elegant palindrome checking tool.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <PalindromeChecker />
          
          <div ref={examplesRef} className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Famous Palindromes</h2>
            
            {palindromeExamples.map((example, index) => (
              <div key={index} className="example-item card">
                <h3 className="text-lg font-semibold text-palindrome-blue">{example.text}</h3>
                <p className="text-gray-600 mt-1">{example.description}</p>
              </div>
            ))}
            
            <div className="pt-4">
              <Link to="/history">
                <Button className="palindrome-button">
                  Learn More About Palindromes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
