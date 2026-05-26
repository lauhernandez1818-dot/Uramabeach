"use client";

import { useEffect, useRef } from "react";

export default function ScrollAnimator({
  children,
}: {
  children: React.ReactNode;
}) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scroll progress bar: updates directly to avoid React state re-renders
    const onScroll = () => {
      if (!progressBarRef.current) return;
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      const progressFraction = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      
      progressBarRef.current.style.transform = `scaleX(${progressFraction})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Intersection observer — covers all reveal classes
    const REVEAL_CLASSES = [
      ".scroll-reveal",
      ".reveal-left",
      ".reveal-right",
      ".reveal-scale",
    ];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const observeElements = () => {
      const selector = REVEAL_CLASSES.join(", ");
      document.querySelectorAll(selector).forEach((el) => {
        if (!el.classList.contains("is-visible")) {
          observerRef.current?.observe(el);
        }
      });
    };

    observeElements();

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) observeElements();
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observerRef.current?.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        ref={progressBarRef}
        className="scroll-progress"
        aria-hidden="true"
      />
      {children}
    </>
  );
}
