import DotGrid from '@/components/DotGrid';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { randomInt } from '@/util';

interface Props {
  title: string;
  emoji?: string[];
}

export default function PageHeader({ title, emoji = [] }: Props) {
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
      <h1
        className="absolute text-5xl transition-opacity md:text-7xl lg:text-left lg:text-9xl"
        style={{
          top: `${headingPosition?.x}%`,
          left: `${headingPosition?.y}%`,
          opacity: isVisible ? 1 : 0,
        }}
      >
        {title}
      </h1>
      <div className="absolute inset-8 top-20" ref={constraintsRef}>
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
          >
            {emoji}
          </motion.span>
        ))}
      </div>
      <DotGrid dim="default" />
      <div className='absolute left-[10%] top-[10%] -z-10 aspect-square w-[100%] -translate-x-1/2 -translate-y-1/2 bg-[url("/assets/images/glow-orange.png")] bg-cover bg-center' />
      <div className='absolute bottom-[10%] right-[10%] -z-10 aspect-square w-[100%] translate-x-1/2 translate-y-1/2 bg-[url("/assets/images/glow-blueberry.png")] bg-cover bg-center' />
    </header>
  );
}
