import { CodeBlock, Eye, Graph, PenNib } from '@phosphor-icons/react/dist/ssr';
import DotGrid from '@/components/DotGrid';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function DesignerDeveloperSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const clipPathOutput = useTransform(
    scrollYProgress,
    [0, 1],
    [
      'polygon(0 0, 100% 0%, 100% -20%, 0 0%)',
      'polygon(0 0, 100% 0%, 100% 100%, 0 120%)',
    ],
  );

  return (
    <section
      ref={ref}
      className="relative h-[200vh] text-4xl lg:text-6xl lg:uppercase 2xl:text-9xl"
    >
      {/* Designer */}
      <div className="sticky top-0 isolate flex h-screen flex-col items-center justify-center overflow-hidden rounded-4xl bg-subtle bg-[url('/assets/images/wireframe-sketch.jpg')] bg-cover bg-center p-16 lg:rounded-6xl">
        {/* Text */}
        <div className="flex flex-wrap justify-center lg:absolute lg:inset-16 lg:top-32 lg:w-auto">
          <span className="inline-flex items-center text-primary lg:absolute lg:left-0 lg:top-0">
            Designer&nbsp;
            <PenNib size={32} className="lg:hidden" />
            <PenNib size={64} className="hidden lg:inline 2xl:hidden" />
            <PenNib size={128} className="hidden 2xl:inline" />
          </span>
          <span className="lg:absolute lg:left-0 lg:top-1/3">with&nbsp;</span>
          <span className="inline-flex font-serif italic lg:absolute lg:bottom-0 lg:right-0 lg:flex-col lg:items-end lg:font-sans lg:not-italic">
            developer's&nbsp;
            <span className="inline-flex items-center">
              mind&nbsp;
              <Graph size={32} className="lg:hidden" />
              <Graph size={64} className="hidden lg:inline 2xl:hidden" />
              <Graph size={128} className="hidden 2xl:inline" />
            </span>
          </span>
        </div>

        {/* Illustrations */}
        <div className="group absolute right-0 top-0 size-[25vw] min-w-64 opacity-50 transition-opacity duration-500 hover:opacity-100">
          <img
            src="/assets/images/colour-card-blueberry.png"
            alt="Blueberry colour card"
            className="absolute right-[15%] top-[-10%] block origin-bottom rotate-[5deg] transition-transform duration-500 ease-smooth group-hover:rotate-[-5deg]"
            aria-hidden
          />
          <img
            src="/assets/images/colour-card-salmon.png"
            alt="Salmon colour card"
            className="absolute right-[-5%] top-[10%] block origin-bottom rotate-[15deg] transition-transform duration-500 ease-smooth group-hover:rotate-[20deg]"
            aria-hidden
          />
        </div>
        <img
          src="/assets/images/figma-tools.png"
          alt="Figma tool icons arranged in a circle"
          className="absolute -bottom-64 -left-32 opacity-50"
          aria-hidden
        />
        <DotGrid dim="strong" />
      </div>

      {/* Developer */}
      <motion.div
        className="sticky top-0 isolate mt-[-100vh] flex h-screen flex-col items-center justify-center overflow-hidden rounded-4xl bg-black bg-[url('/assets/images/code-dim.jpg')] bg-cover bg-center p-16 text-white lg:rounded-6xl"
        style={{ clipPath: clipPathOutput }}
      >
        {/* Text */}
        <div className="flex flex-wrap justify-center lg:absolute lg:inset-16 lg:top-32 lg:w-auto">
          <span className="inline-flex items-center text-blueberry-300 lg:absolute lg:right-0 lg:top-0">
            Developer&nbsp;
            <CodeBlock size={32} className="lg:hidden" />
            <CodeBlock size={64} className="hidden lg:inline 2xl:hidden" />
            <CodeBlock size={128} className="hidden 2xl:inline" />
          </span>
          <span className="lg:absolute lg:right-0 lg:top-1/3">with&nbsp;</span>
          <span className="inline-flex font-serif italic lg:absolute lg:bottom-0 lg:left-0 lg:flex-col lg:font-sans lg:not-italic">
            designer's&nbsp;
            <span className="inline-flex items-center">
              eye&nbsp;
              <Eye size={32} className="lg:hidden" />
              <Eye size={64} className="hidden lg:inline 2xl:hidden" />
              <Eye size={128} className="hidden 2xl:inline" />
            </span>
          </span>
        </div>

        {/* Illustrations */}
        <img
          src="/assets/images/tech-logos.png"
          alt="Grid of web technology logos"
          className="absolute left-[-25%] top-[-15%] rotate-[-30deg] opacity-50"
          aria-hidden
        />
        <img
          src="/assets/images/code-easter-egg.png"
          alt="Code block with easter egg"
          className="absolute -bottom-32 -right-32 w-[800px] rotate-[-15deg] opacity-50 transition-opacity hover:opacity-100"
          aria-hidden
        />
        <DotGrid />
      </motion.div>
    </section>
  );
}
