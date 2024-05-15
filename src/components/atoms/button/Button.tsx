import classNames from 'classnames';
import React from 'react';
import Styles from './styles/button.module.css';

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  context: string;
}

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', context, ...rest }, ref) => {
    const buttonClasses = classNames(
      Styles.wrapper,
      Styles[`button-${variant}`],
      Styles[`button-${size}`],
    );

    return (
      <button ref={ref} className={buttonClasses} {...rest}>
        {context}
      </button>
    );
  },
);

export default CustomButton;
