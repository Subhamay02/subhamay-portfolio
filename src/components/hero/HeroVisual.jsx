import { lazy, Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CanvasFallback from './CanvasFallback';

const RotatingObject = lazy(() => import('../three/RotatingObject'));

const HeroVisual = () => {
  const [shouldLoadCanvas, setShouldLoadCanvas] = useState(false);

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(() => setShouldLoadCanvas(true), { timeout: 1500 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(() => setShouldLoadCanvas(true), 800);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <motion.div
      className="flex-1 w-full relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
      {shouldLoadCanvas ? (
        <Suspense fallback={<CanvasFallback />}>
          <RotatingObject />
        </Suspense>
      ) : (
        <CanvasFallback />
      )}
    </motion.div>
  );
};

export default HeroVisual;
