// components/Button.tsx
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...rest }) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'secondary':
        return 'm-1 bg-gray-500 hover:bg-gray-600 text-white';
      case 'success':
        return 'm-1 bg-green-500 hover:bg-green-600 text-white';
      case 'danger':
        return 'm-1 bg-red-500 hover:bg-red-600 text-white';
      default:
        return 'm-1  shadow-[inset_0_1px_1px_0px_rgba(255,255,255,0.25),inset_0_1px_12px_0px_rgba(255,255,255,0.25)] bg-gray-800 hover:bg-gray-950 hover:text-slate-300 text-white';
    }
  };

  return (
    <button
      className={`px-4 py-2 rounded focus:outline-none ${getVariantClass()}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;