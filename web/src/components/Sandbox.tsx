import type { MotionProps } from 'framer-motion';

import React, { useEffect, useRef, useState } from 'react';

import { randomInt } from '@/utils';

interface Props extends React.HTMLProps<HTMLDivElement> {
  randomize?: boolean;
  children: React.ReactNode;
}

/**
 * A sandbox of elements that the user can drag around the screen. Children must be motion components.
 * @param randomize Whether to randomize the initial positions of the elements.
 * @param children The elements to display in the sandbox. The first child is assumed to be a larger element such as a heading.
 */
export default function Sandbox({
  randomize = true,
  className,
  children,
  ...props
}: Props) {
  const [elementPositions, setElementPositions] = useState<Position[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const constraintsRef = useRef(null);

  type Position = { x: number; y: number };

  function getRandomSafePosition(
    minX: number,
    maxX: number,
    minY: number,
    maxY: number,
    usedPositions: Position[],
  ): Position {
    // Minimum distance between emojis, in percent of the header size.
    // Large values cause infinite loops. With 5 emojis, values <= 30 are fine.
    const DISTANCE_THRESHOLD = 20;

    let position: Position;
    do {
      position = {
        x: randomInt(minX, maxX),
        y: randomInt(minY, maxY),
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
    if (randomize) {
      const usedPositions: Position[] = [];
      const childrenArray = React.Children.toArray(children);

      setElementPositions(
        childrenArray.map((_child, index) => {
          // The first child is assumed to be a heading and therefore needs more space.
          if (index === 0) {
            return getRandomSafePosition(0, 50, 0, 70, usedPositions);
          }
          return getRandomSafePosition(0, 90, 0, 90, usedPositions);
        }),
      );
    }

    setIsVisible(true);
  }, []);

  function motionProps(index: number): MotionProps {
    return {
      drag: true,
      dragConstraints: constraintsRef,
      dragElastic: 0.05,
      whileDrag: { rotate: 15 },
      whileHover: { scale: 1.1 },
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: isVisible ? 1 : 0, scale: 1 },
      transition: { delay: index * 0.1 },
    };
  }

  return (
    <div
      ref={constraintsRef}
      className={`${className} pointer-events-none`}
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...motionProps(index),
            ...child.props,
            key: index,
            className: `${child.props.className} absolute cursor-move pointer-events-auto`,
            style: {
              left: `${elementPositions[index]?.x}%`,
              top: `${elementPositions[index]?.y}%`,
              ...child.props.style,
            },
          });
        }
        return child;
      })}
    </div>
  );
}
