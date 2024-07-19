import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import DotGrid from '@/components/DotGrid';
import Glow from '@/components/Glow';
import { randomInt } from '@/util';

interface HeaderSectionProps {
  title: string;
  emoji?: string[];
}

export default function HeaderSection({
  title,
  emoji = [],
}: HeaderSectionProps) {
  const constraintsRef = useRef(null);
  const [emojiPositions, setEmojiPositions] = useState<Position[]>([]);
  const [headingPosition, setHeadingPosition] = useState<Position>();
  const [isVisible, setIsVisible] = useState(false);

  type Position = { x: number; y: number };

  function getRandomSafePosition(
    min: number,
    max: number,
    usedPositions: Position[],
  ): Position {
    // Minimum distance between emojis, in percent of the header size.
    // Large values cause infinite loops. With 5 emojis, values <= 30 are fine.
    const DISTANCE_THRESHOLD = 20;

    let position: Position;
    do {
      position = {
        x: randomInt(min, max),
        y: randomInt(min, max),
      };
    } while (
      usedPositions.some(
        (used) => distance(used, position) < DISTANCE_THRESHOLD,
      )
    );

    usedPositions.push(position);
    return position;
  }

  function distance(a: Position, b: Position) {
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
  }

  useEffect(() => {
    const usedPositions: Position[] = [];
    setHeadingPosition(getRandomSafePosition(10, 50, usedPositions));
    setEmojiPositions(
      emoji.map(() => getRandomSafePosition(10, 90, usedPositions)),
    );
    setIsVisible(true);
  }, []);

  return (
    <header className="sticky top-0 h-[512px] overflow-hidden px-4 pt-[15vh] lg:h-[75vh] lg:px-16 lg:pt-32">
      <div
        className="absolute bottom-12 left-4 right-4 top-16 lg:bottom-20 lg:left-8 lg:right-8 lg:top-24"
        ref={constraintsRef}
      >
        <motion.h1
          className="absolute cursor-move text-5xl transition-opacity md:text-7xl lg:text-left lg:text-9xl"
          drag
          dragConstraints={constraintsRef}
          dragElastic={0.05}
          whileDrag={{ rotate: -5 }}
          whileHover={{ scale: 1.05 }}
          style={{
            top: `${headingPosition?.x}%`,
            left: `${headingPosition?.y}%`,
            opacity: isVisible ? 1 : 0,
          }}
        >
          {title}
        </motion.h1>
        {emoji.map((emoji, index) => (
          <motion.span
            key={index}
            className="absolute inline-block cursor-move text-4xl drop-shadow-lg transition-opacity md:text-6xl lg:text-8xl"
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.05}
            whileDrag={{ rotate: 15 }}
            whileHover={{ scale: 1.1 }}
            style={{
              top: `${emojiPositions[index]?.x}%`,
              left: `${emojiPositions[index]?.y}%`,
              opacity: isVisible ? 1 : 0,
            }}
            aria-hidden
          >
            {emoji}
          </motion.span>
        ))}
      </div>

      {/* Backgrounds */}
      <DotGrid dim="default" />
      <Glow
        color="orange"
        className="left-[10%] top-[10%] w-full -translate-x-1/2 -translate-y-1/2"
      />
      <Glow
        color="blueberry"
        className="bottom-[10%] right-[10%] w-full translate-x-1/2 translate-y-1/2"
      />
    </header>
  );
}
