/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Link } from 'react-router-dom';

// Definisikan tipe untuk props CustomButton
interface CustomButtonProps {
  title: string | any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  // Tambahkan prop tambahan yang diizinkan oleh React untuk button dan Link
  [key: string]: any;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onClick = () => {}, href = '', color = 'bg-blue-500', size = 'medium', type = 'button', className = '', ...props }) => {
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const buttonClasses = `text-white rounded transition duration-300 hover:opacity-80 ${color} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link to={href} className={buttonClasses} {...props}>
        {title}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClasses} {...props}>
      {title}
    </button>
  );
};

export default CustomButton;
