"use client";

import { useEffect, useRef } from "react";

/**
 * useReveal
 * ----------------------------------------------------------------------
 * Attaches an IntersectionObserver to the returned ref. When the element
 * scrolls into view, the `.is-visible` class is added (see `.reveal` /
 * `.reveal-scale` in globals.css for the actual fade/scale transition).
 *
 * Using a class toggle (rather than re-rendering React state for animation)
 * keeps this cheap even with many sections on the page, and works fine with
 * Next.js 16 + Turbopack's strict server/client component boundaries since
 * this hook only ever runs in a "use client" component.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect users who prefer reduced motion — just show the content.
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Reveal animations should only play once.
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
