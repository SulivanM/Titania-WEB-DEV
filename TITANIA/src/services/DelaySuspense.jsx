import{ useState, useEffect } from 'react';

const DelaySuspense = ({ children, delay = 3000, fallback }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (isLoading) {
    return fallback;
  }

  return children;
};

export default DelaySuspense;