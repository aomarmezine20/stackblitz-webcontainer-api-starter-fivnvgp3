import React from 'react';
import { motion } from 'framer-motion';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all focus:outline-none';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-dark-900 shadow-sm border border-primary-500',
    secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white shadow-sm border border-secondary-500',
    outline: 'bg-transparent border border-dark-700 hover:border-primary-500 text-gray-300 hover:text-primary-500',
    ghost: 'bg-transparent hover:bg-dark-800 text-gray-300 hover:text-white',
    danger: 'bg-error-500 hover:bg-error-600 text-white shadow-sm border border-error-500',
  };
  
  // Disabled classes
  const disabledClasses = 'opacity-60 cursor-not-allowed';
  
  // Combine classes
  const buttonClasses = [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    (disabled || isLoading) ? disabledClasses : '',
    variant === 'primary' || variant === 'secondary' ? 'hover:shadow-md' : '',
    className,
  ].join(' ');
  
  // Loading spinner
  const loadingSpinner = (
    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
  
  return (
    <motion.button
      className={buttonClasses}
      disabled={disabled || isLoading}
      whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
      whileHover={{ 
        scale: disabled || isLoading ? 1 : 1.02,
        boxShadow: variant === 'primary' ? '0 0 10px rgba(0, 238, 255, 0.5)' : undefined
      }}
      {...props}
    >
      {isLoading && loadingSpinner}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </motion.button>
  );
};

export default Button;