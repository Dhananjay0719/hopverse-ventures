export const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: 'easeOut' } },
}

export const fadeUpSlow = {
  hidden:  { opacity: 0, y: 56 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } },
}

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.0, ease: 'easeOut' } },
}

export const fadeScale = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: 'easeOut' } },
}

export const staggerContainer = (stagger = 0.12) => ({
  hidden:  {},
  visible: { transition: { staggerChildren: stagger } },
})

export const vpOnce = { once: true, amount: 0.1 }
export const vpHalf = { once: true, amount: 0.4 }
