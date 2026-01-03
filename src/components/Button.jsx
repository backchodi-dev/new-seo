import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  href,
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg focus:ring-primary-500',
    secondary: 'bg-white hover:bg-gray-50 text-primary-600 border border-gray-300 hover:border-primary-300 focus:ring-primary-500',
    outline: 'bg-transparent hover:bg-primary-50 text-primary-600 border border-primary-600 hover:border-primary-700 focus:ring-primary-500'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-2"
    >
      {children}
    </motion.span>
  );
  
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;