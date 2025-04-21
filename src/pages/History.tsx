import Layout from '@/components/Layout';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const History = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headerElement = headerRef.current;
    const sectionsElement = sectionsRef.current;

    if (headerElement && sectionsElement) {
      gsap.fromTo(
        headerElement,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.5 }
      );

      const sections = sectionsElement.querySelectorAll('.history-section');
      
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <div ref={headerRef} className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          The <span className="text-gradient">History</span> of Palindromes
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore the fascinating history and cultural significance of palindromes across different civilizations and time periods.
        </p>
      </div>

      <div ref={sectionsRef} className="max-w-4xl mx-auto space-y-16">
        <section className="history-section">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ancient Origins</h2>
          <div className="card">
            <p className="text-gray-700 mb-4">
              Palindromes have fascinated humans for thousands of years. The earliest known palindromes date back to Ancient Greece around 79 AD, where they were considered mystical and sometimes used in religious contexts.
            </p>
            <p className="text-gray-700 mb-4">
              The word "palindrome" itself comes from the Greek words "palin" (again) and "dromos" (way, direction), essentially meaning "running back again."
            </p>
            <p className="text-gray-700">
              One of the earliest known palindromes was discovered on a stone tablet in Herculaneum, containing what is known as the "Sator Square" - a word square containing the palindrome "SATOR AREPO TENET OPERA ROTAS" which can be read in multiple directions.
            </p>
          </div>
        </section>
        <section className="history-section">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Palindromes in Literature</h2>
          <div className="card">
            <p className="text-gray-700 mb-4">
              Palindromes have been used throughout literary history as creative devices, showcasing linguistic ingenuity. Writers and poets have crafted palindromic verses and sentences to demonstrate their wordplay skills.
            </p>
            <p className="text-gray-700 mb-4">
              In 1802, American humorist and poet Ambrose Bierce wrote "Dammit, I'm mad!" - a simple yet effective palindrome that expresses frustration.
            </p>
            <p className="text-gray-700">
              James Joyce, in his novel "Ulysses," used palindromes and other word games. Perhaps most ambitious was English writer David Stephens, who in 1980 published a palindromic novel titled "Satire: Veritas" containing over 58,000 palindromic words.
            </p>
          </div>
        </section>
        <section className="history-section">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Cultural Significance</h2>
          <div className="card">
            <p className="text-gray-700 mb-4">
              Many cultures have embraced palindromes for their perceived mystical or magical properties. In some traditions, palindromes were believed to hold special powers or divine significance due to their perfect symmetry.
            </p>
            <p className="text-gray-700 mb-4">
              In Finnish culture, the word "saippuakivikauppias" (soapstone vendor) is claimed to be the longest palindromic word in everyday use in any language.
            </p>
            <p className="text-gray-700">
              In Hindu traditions, certain mantras are palindromic, which is believed to amplify their spiritual power. The idea is that the symmetry of these phrases creates a balance that resonates with the universe's harmony.
            </p>
          </div>
        </section>
        <section className="history-section">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Palindromes in Modern Times</h2>
          <div className="card">
            <p className="text-gray-700 mb-4">
              Today, palindromes continue to fascinate people around the world. They appear in puzzles, word games, and are celebrated on "Palindrome Days" when the calendar date reads the same forward and backward (like 02/02/2020).
            </p>
            <p className="text-gray-700 mb-4">
              Computer scientists use palindromes as test cases for algorithms that process strings, and they serve as interesting challenges in programming exercises.
            </p>
            <p className="text-gray-700">
              In the digital age, palindromes have found new life online, with enthusiasts competing to create the longest or most meaningful palindromic sentences, sharing them on forums and social media.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default History;
