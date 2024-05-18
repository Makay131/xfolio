import classNames from 'classnames';
import Styles from './styles/text.module.css';

type TextOwnProps<E extends React.ElementType> = {
  size?: 'sm' | 'md' | 'lg';
  context: string;
  type: 'title' | 'paragraph' | 'listItem' | 'label' | 'heading';
  className?: string;
  highlight?: number[];
  as?: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

export default function Text<E extends React.ElementType = 'div'>({
  size = 'md',
  type,
  className = '',
  context,
  highlight,
  as,
}: TextProps<E>) {
  const textClasses = classNames(Styles[`${type}-${size}`], Styles[`${type}-${size}`], className);
  const Component = as || 'div';

  const getHighlightedText = (text: string, highlight?: number[]) => {
    if (!highlight || highlight.length < 2) {
      return text;
    }
    const words = text.split(' ');
    const [start, end] = highlight;

    return (
      <>
        {words.slice(0, start).join(' ')}{' '}
        <span className={Styles.highlight}>{words.slice(start, end).join(' ')}</span>{' '}
        {words.slice(end).join(' ')}
      </>
    );
  };

  return (
    <Component className={`${textClasses}`}>{getHighlightedText(context, highlight)}</Component>
  );
}
