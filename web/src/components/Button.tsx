import type { Icon as PhosphorIcon } from '@phosphor-icons/react/dist/lib/types';
import type React from 'react';
import type { CustomIcon } from '@/components/icons';

import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react/dist/ssr';

import { isExternalUrl } from '@/util';

interface Props {
  text: string;
  icon?: PhosphorIcon | CustomIcon;
  iconSide?: 'left' | 'right' | 'none';
  size?: 'small' | 'medium' | 'large';
  style?: 'default' | 'primary' | 'subtle';
  href?: string;
  type?: 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<Element>;
}

export default function Button({
  text,
  icon,
  iconSide,
  size = 'medium',
  style = 'default',
  href,
  type,
  disabled = false,
  className,
  onClick,
}: Props) {
  let IconComponent;
  if (icon) {
    IconComponent = icon;
  } else if (href) {
    IconComponent = isExternalUrl(href) ? ArrowUpRight : ArrowRight;
  } else {
    iconSide = 'none';
  }

  if (!iconSide) iconSide = href ? 'right' : 'left';

  const Element: React.ElementType = href ? 'a' : 'button';

  function outerElementClass() {
    let className = '';

    if (size === 'small') className += 'px-4 py-2';
    if (size === 'medium') className += 'px-6 py-4';
    if (size === 'large') className += 'px-8 py-6';

    if (style === 'default') className += ' bg-inverted text-on-inverted';
    if (style === 'primary') className += ' bg-primary text-on-primary';
    if (style === 'subtle') className += ' bg-subtle text-default';

    if (disabled) className += ' opacity-25 pointer-events-none';

    return className;
  }

  function innerElementClass() {
    if (size === 'small') return 'gap-1';
    if (size === 'medium') return 'gap-2';
    if (size === 'large') return 'gap-3';
  }

  function hoverOverlayClass() {
    if (iconSide === 'left') return 'motion-safe:translate-x-full';
    return 'motion-safe:-translate-x-full';
  }

  function iconSize() {
    if (size === 'small') return 16;
    if (size === 'medium') return 24;
    if (size === 'large') return 32;
  }

  function leftIconClass() {
    let className = '';

    if (iconSide === 'left') {
      className +=
        'motion-safe:group-hover:translate-x-[-200%] motion-safe:group-hover:opacity-0';
    }
    if (iconSide === 'right') {
      className +=
        'absolute left-0 translate-x-[-200%] text-default opacity-0 motion-safe:group-hover:translate-x-0 motion-safe:group-hover:opacity-100';
    }

    return className;
  }

  function rightIconClass() {
    let className = '';

    if (iconSide === 'left') {
      className +=
        'absolute right-0 translate-x-[200%] text-default opacity-0 motion-safe:group-hover:translate-x-0 motion-safe:group-hover:opacity-100';
    }
    if (iconSide === 'right') {
      className +=
        'motion-safe:group-hover:translate-x-[200%] motion-safe:group-hover:opacity-0';
    }

    return className;
  }

  function textClass() {
    let className = '';

    if (iconSide === 'left') {
      if (size === 'small')
        className += 'motion-safe:group-hover:-translate-x-5';
      if (size === 'medium')
        className += 'motion-safe:group-hover:-translate-x-8';
      if (size === 'large')
        className += 'motion-safe:group-hover:-translate-x-11';
    }
    if (iconSide === 'right') {
      if (size === 'small')
        className += 'motion-safe:group-hover:translate-x-5';
      if (size === 'medium')
        className += 'motion-safe:group-hover:translate-x-8';
      if (size === 'large')
        className += 'motion-safe:group-hover:translate-x-11';
    }

    if (size === 'small') className += ' text-base';
    if (size === 'medium') className += ' text-2xl';
    if (size === 'large') className += ' text-4xl';

    return className;
  }

  return (
    <Element
      className={`${outerElementClass()} ${className} group relative isolate block w-fit cursor-pointer overflow-hidden rounded-full border border-transparent transition-all focus:outline-none focus:ring focus:ring-blueberry-500 focus:ring-offset-4 active:scale-75 active:opacity-50 motion-safe:duration-500 motion-safe:ease-smooth motion-reduce:hover:text-default`}
      href={href}
      target={href && isExternalUrl(href) ? '_blank' : undefined}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      <div
        className={`${hoverOverlayClass()} absolute inset-0 -z-10 rounded-full bg-default transition-all motion-safe:duration-500 motion-safe:ease-smooth motion-safe:group-hover:translate-x-0 motion-reduce:opacity-0 motion-reduce:group-hover:opacity-100`}
      />
      <div
        className={`${innerElementClass()} relative flex items-center justify-center`}
      >
        {IconComponent && iconSide !== 'none' && (
          <IconComponent
            size={iconSize()}
            className={`${leftIconClass()} motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-smooth`}
          />
        )}
        <span
          className={`${textClass()} motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-smooth motion-safe:group-hover:text-default`}
        >
          {text}
        </span>
        {IconComponent && iconSide !== 'none' && (
          <IconComponent
            size={iconSize()}
            className={`${rightIconClass()} motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-smooth`}
          />
        )}
      </div>
    </Element>
  );
}
