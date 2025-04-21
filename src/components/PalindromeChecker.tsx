
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import gsap from 'gsap';

const PalindromeChecker = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState<null | boolean>(null);
  const [explanation, setExplanation] = useState('');
  const resultRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const checkPalindrome = () => {
    if (!text.trim()) {
      toast({
        title: "Empty Input",
        description: "Please enter some text to check",
        variant: "destructive",
      });
      return;
    }

    // Remove spaces, punctuation, and make lowercase for accurate checking
    const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleanText.split('').reverse().join('');
    
    const isPalindrome = cleanText === reversed;
    
    setResult(isPalindrome);
    setExplanation(
      isPalindrome
        ? `"${text}" is a palindrome! It reads the same forward and backward.`
        : `"${text}" is not a palindrome. When reversed, it reads: "${text.split('').reverse().join('')}"`
    );
  };

  useEffect(() => {
    if (result !== null && resultRef.current) {
      gsap.fromTo(
        resultRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [result]);

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Palindrome Checker</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="palindrome-input" className="block text-sm font-medium text-gray-700 mb-1">
            Enter a word or phrase:
          </label>
          <Input
            id="palindrome-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Example: radar, level, madam"
            className="palindrome-input"
          />
        </div>

        <Button 
          onClick={checkPalindrome} 
          className="w-full palindrome-button"
        >
          Check Palindrome
        </Button>

        {result !== null && (
          <div 
            ref={resultRef}
            className={`mt-6 p-4 rounded-lg ${
              result ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
            }`}
          >
            <h3 className={`font-bold ${result ? 'text-green-700' : 'text-red-700'}`}>
              {result ? 'Yes! It\'s a Palindrome' : 'Not a Palindrome'}
            </h3>
            <p className={`mt-1 text-sm ${result ? 'text-green-600' : 'text-red-600'}`}>
              {explanation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PalindromeChecker;
