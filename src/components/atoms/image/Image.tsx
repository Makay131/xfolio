import classNames from 'classnames';
import React from 'react';
import Styles from './styles/image.module.css';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

export default function Image({ src, alt, width, height, className, ...props }: ImageProps) {
  const imageClasses = classNames(Styles.responsive, className);
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${imageClasses}`}
      {...props}
    />
  );
}
