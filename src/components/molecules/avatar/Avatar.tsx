import Square from './items/Square';
import Rounded from './items/Rounded';

type AvatarProps = {
  type: 'square' | 'rounded';
  src: string;
  alt: string;
};

export default function Avatar({ type, src, alt }: AvatarProps) {
  switch (type) {
    case 'square':
      return <Square src={src} alt={alt} />;
    case 'rounded':
      return <Rounded src={src} alt={alt} />;
    default:
      return null;
  }
}
