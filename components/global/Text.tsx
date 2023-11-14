// Utilities
import clsx from 'clsx';

// Types
import type { ReactNode } from 'react';

type TextProps = {
  className?: string;
  children: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
}

const getVariantClasses = (size = 'md', color = 'secondary') => {
  const styles = 'tracking-wide font-medium';

  const textSize = clsx([
    size === 'lg' && 'text-xl',
    size === 'md' && 'text-lg',
    size === 'sm' && 'text-base',
    size === 'xs' && 'text-sm',
  ]);

  const textColor = clsx([
    color === 'primary' && 'text-white',
    color === 'secondary' && 'text-gray-500',
  ]);

  return clsx([styles, textSize, textColor]);
};

const Text = (props: TextProps) => {
  const {
    className,
    children,
    size = 'md',
    variant = 'secondary'
  } = props;

  return (
    <p className={`${className} ${getVariantClasses(size, variant)}`}>
      {children}
    </p>
  );
};

export { Text };