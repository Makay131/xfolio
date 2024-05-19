import Image from '../../../atoms/image/Image';
import Styles from './rounded.module.css';
import { AvatarTypes } from './types';

export default function Rounded({ src, alt, className }: AvatarTypes) {
  return (
    <div className={className}>
      <Image src={src} alt={alt} className={Styles.image} />
    </div>
  );
}
