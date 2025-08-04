import React from 'react';

export interface ButtonProps {
  /**
   * Button contents
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'outline';
  /**
   * Is button disabled
   */
  disabled?: boolean;
  /**
   * Button size
   */
  size?: 'small' | 'medium' | 'large';
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  children,
  variant = 'primary',
  disabled = false,
  size = 'medium',
  onClick,
}: ButtonProps) => {
  // Base classes
  const baseClasses = 'font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Size classes
  const sizeClasses = {
    small: 'px-2.5 py-1.5 text-xs',
    medium: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-base',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-blue-300',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 disabled:bg-gray-300',
    outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500 disabled:text-gray-400',
  };
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`;
  
  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;