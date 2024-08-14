import { useState, useEffect, useCallback } from 'react';

function useTypewriter(words, speed = 100, delay = 1000) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const startTyping = useCallback(() => {
    setIsTyping(true);
    setCharIndex(0);
  }, []);

  useEffect(() => {
    let typingInterval;

    if (isTyping) {
      const currentWord = words[wordIndex];
      typingInterval = setInterval(() => {
        if (charIndex < currentWord.length) {
          setDisplayText((prevText) => prevText + currentWord[charIndex]);
          setCharIndex((prevIndex) => prevIndex + 1);
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          setTimeout(() => {
            setDisplayText('');
            setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            startTyping();
          }, delay);
        }
      }, speed);
    }

    return () => {
      clearInterval(typingInterval);
    };
  }, [words, speed, delay, isTyping, startTyping, wordIndex, charIndex]);

  return { displayText, isTyping };
}

export default useTypewriter;