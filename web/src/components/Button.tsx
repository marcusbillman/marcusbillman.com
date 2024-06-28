import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import { isExternalUrl } from '@/util';
import type { Icon as PhosphorIcon } from '@phosphor-icons/react/dist/lib/types';
import type { CustomIcon } from '@/components/icons';
import type React from 'react';

interface Props {
  text: string;
  icon?: PhosphorIcon | CustomIcon;
  iconSide?: 'left' | 'right' | 'none';
  size?: 'small' | 'medium' | 'large';
  style?: 'default' | 'primary' | 'subtle';
  href?: string;
  type?: 'submit' | 'reset';
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

  let Element: React.ElementType = href ? 'a' : 'button';

  function outerElementClass() {
    let className = '';

    if (size === 'small') className += 'px-4 py-2';
    if (size === 'medium') className += 'px-6 py-4';
    if (size === 'large') className += 'px-8 py-6';

    if (style === 'default') className += ' bg-inverted text-on-inverted';
    if (style === 'primary') className += ' bg-primary text-on-primary';
    if (style === 'subtle') className += ' bg-subtle text-default';

    return className;
  }

  function innerElementClass() {
    if (size === 'small') return 'gap-1';
    if (size === 'medium') return 'gap-2';
    if (size === 'large') return 'gap-3';
  }

  function hoverOverlayClass() {
    if (iconSide === 'left') return 'translate-x-full';
    return '-translate-x-full';
  }

  function iconSize() {
    if (size === 'small') return 16;
    if (size === 'medium') return 24;
    if (size === 'large') return 32;
  }

  function leftIconClass() {
    let className = '';

    if (iconSide === 'left') {
      className += 'group-hover:translate-x-[-200%] group-hover:opacity-0';
    }
    if (iconSide === 'right') {
      className +=
        'absolute left-0 translate-x-[-200%] text-default opacity-0 group-hover:translate-x-0 group-hover:opacity-100';
    }

    return className;
  }

  function rightIconClass() {
    let className = '';

    if (iconSide === 'left') {
      className +=
        'absolute right-0 translate-x-[200%] text-default opacity-0 group-hover:translate-x-0 group-hover:opacity-100';
    }
    if (iconSide === 'right') {
      className += 'group-hover:translate-x-[200%] group-hover:opacity-0';
    }

    return className;
  }

  function textClass() {
    let className = '';

    if (iconSide === 'left') {
      if (size === 'small') className += 'group-hover:-translate-x-5';
      if (size === 'medium') className += 'group-hover:-translate-x-8';
      if (size === 'large') className += 'group-hover:-translate-x-11';
    }
    if (iconSide === 'right') {
      if (size === 'small') className += 'group-hover:translate-x-5';
      if (size === 'medium') className += 'group-hover:translate-x-8';
      if (size === 'large') className += 'group-hover:translate-x-11';
    }

    if (size === 'small') className += ' text-base';
    if (size === 'medium') className += ' text-2xl';
    if (size === 'large') className += ' text-4xl';

    return className;
  }

  return (
    <Element
      className={`${outerElementClass()} ${className} group relative isolate flex w-fit cursor-pointer overflow-hidden rounded-full border border-transparent transition-all duration-500 ease-smooth hover:border-default active:scale-75 active:opacity-50`}
      href={href}
      target={href && isExternalUrl(href) ? '_blank' : undefined}
      type={type}
      onClick={onClick}
    >
      <div
        className={`${hoverOverlayClass()} absolute inset-0 -z-10 rounded-full bg-default transition-transform duration-500 ease-smooth group-hover:translate-x-0`}
      />
      <div className={`${innerElementClass()} relative flex items-center`}>
        {IconComponent && iconSide !== 'none' && (
          <IconComponent
            size={iconSize()}
            className={`${leftIconClass()} transition-all duration-500 ease-smooth`}
          />
        )}
        <span
          className={`${textClass()} transition-all duration-500 ease-smooth group-hover:text-default`}
        >
          {text}
        </span>
        {IconComponent && iconSide !== 'none' && (
          <IconComponent
            size={iconSize()}
            className={`${rightIconClass()} transition-all duration-500 ease-smooth`}
          />
        )}
      </div>
    </Element>
  );
}
