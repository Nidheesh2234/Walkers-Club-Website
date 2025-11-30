# Animation Enhancement Tasks - Walkers Club Website

## src/pages/Home.tsx

- [ ] Wrap features grid and events grid in motion div with staggerChildren, delayChildren for sequential entrance animation.
- [ ] Enhance cards with subtle scale-in effect combined with existing opacity and translate animations.
- [ ] Animate headings, descriptions, paragraph texts in sections with fade or slide-in effects with delays.
- [ ] Refine transition easing for smooth flow (use easeInOut or custom cubic-bezier).
- [ ] Add subtle delay offsets between section animations on scroll into view.
- [ ] Enhance CTA button with pulse/glow effect alongside scale hover/tap.
- [ ] Verify animation consistency and smoothness across sections and cards.

## src/components/Layout.tsx

- [ ] Add subtle entrance animation (fade + slide from top) to header navigation bar on page load.
- [ ] Add fade + slight upward slide animation to footer on entering viewport (using whileInView).
- [ ] Refine mobile menu open/close animation easing and smoothness.
- [ ] Optionally animate dropdown menu content with fade and slide on open/close.
- [ ] Animate Certificate Modal fade-in with framer-motion/dialog transitions.
- [ ] Test animation integration for visual polish and responsiveness.

## New Component: ScrollToTop

- [ ] Create ScrollToTop component to scroll to top on every route change using react-router-dom useLocation.
- [ ] Integrate ScrollToTop component in the main app or layout component to ensure scrollbar resets on page navigation.

## Follow-up Steps

- [ ] Test the updated animations and ScrollToTop functionality in the local development environment.
- [ ] Tune delays, durations, and easings for consistent, fluid UI experience.
