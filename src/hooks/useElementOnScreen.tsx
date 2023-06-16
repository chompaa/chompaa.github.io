import { MutableRef, useEffect, useRef, useState } from "preact/hooks";

const useElementOnScreen = (
  options: IntersectionObserverInit | undefined
): [MutableRef<HTMLElement | null>, boolean] => {
  const containerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]: Array<IntersectionObserverEntry>) => {
        setIsVisible(entry.isIntersecting);
      },
      options
    );

    const container = containerRef.current;

    if (!container) {
      return;
    }

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

export default useElementOnScreen;
