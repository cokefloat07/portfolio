import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options = {}) => {
  const ref = useRef(null);
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setEntry(entry),
      {
        threshold: 0.1,
        rootMargin: '0px',
        ...options
      }
    );

    const current = ref.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [options]);

  return [ref, entry];
};

export default useIntersectionObserver;