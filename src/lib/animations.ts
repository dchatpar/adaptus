import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

/**
 * Fade in animation on scroll
 */
export function fadeInOnScroll(element: HTMLElement | string, options?: gsap.TweenVars) {
  return gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    ...options,
  });
}

/**
 * Stagger fade in animation
 */
export function staggerFadeIn(elements: HTMLElement[] | string, options?: gsap.TweenVars) {
  return gsap.from(elements, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: elements,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    ...options,
  });
}

/**
 * Text reveal animation using SplitType
 */
export function revealText(
  element: HTMLElement | string,
  options?: {
    type?: 'lines' | 'words' | 'chars';
    stagger?: number;
    duration?: number;
  }
) {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return null;

  const split = new SplitType(el as HTMLElement, {
    types: options?.type ?? 'lines',
  });

  return gsap.from(split.lines ?? split.words ?? split.chars, {
    opacity: 0,
    y: 20,
    duration: options?.duration ?? 0.8,
    stagger: options?.stagger ?? 0.05,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
}

/**
 * Parallax effect
 */
export function parallax(element: HTMLElement | string, speed = 0.5) {
  return gsap.to(element, {
    y: () => window.innerHeight * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
}

/**
 * Scale on scroll
 */
export function scaleOnScroll(
  element: HTMLElement | string,
  options?: {
    from?: number;
    to?: number;
  }
) {
  return gsap.fromTo(
    element,
    { scale: options?.from ?? 0.8 },
    {
      scale: options?.to ?? 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      },
    }
  );
}

/**
 * Horizontal scroll section
 */
export function horizontalScroll(
  container: HTMLElement | string,
  options?: {
    speed?: number;
  }
) {
  const el = typeof container === 'string' ? document.querySelector(container) : container;
  if (!el) return null;

  const sections = el.querySelectorAll(':scope > *');
  const totalWidth = Array.from(sections).reduce((acc, section) => {
    return acc + (section as HTMLElement).offsetWidth;
  }, 0);

  return gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: el,
      pin: true,
      scrub: options?.speed ?? 1,
      end: () => `+=${totalWidth}`,
    },
  });
}
