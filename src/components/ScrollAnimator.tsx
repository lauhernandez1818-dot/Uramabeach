"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollAnimator({
  children,
}: {
  children: React.ReactNode;
}) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Scroll progress bar
    const onScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
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
        className="scroll-progress"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
      {children}
    </>
  );
}
