import { useEffect, useRef } from "react";

export default function useFadeIn(stagger = 150) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const items = entry.target.querySelectorAll(".fade-item");
          if (entry.isIntersecting) {
            items.forEach((el, i) => {
              el.style.transitionDelay = `${i * stagger}ms`;
              el.classList.add("opacity-100", "translate-y-0");
            });
          } else {
            items.forEach((el) => {
              el.classList.remove("opacity-100", "translate-y-0");
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [stagger]);

  return ref;
}
