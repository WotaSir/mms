import { motion } from 'framer-motion';

const photos = [
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1800&q=88',
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=88',
];

export default function HeroPhotoCollage() {
  return (
    <div className="hero-photo-collage" aria-label="People collaborating in a professional setting">
      <motion.div className="hero-photo hero-photo-main" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .18 }}>
        <img src={photos[0]} alt="Business team collaborating around a table" />
        <span>People · ideas · momentum</span>
      </motion.div>
      <motion.div className="hero-photo hero-photo-small" initial={{ opacity: 0, x: 26 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7, delay: .35 }}>
        <img src={photos[1]} alt="Team discussing ideas together" />
        <span>01 / 02</span>
      </motion.div>
      <div className="hero-photo-accent" aria-hidden="true" />
    </div>
  );
}
