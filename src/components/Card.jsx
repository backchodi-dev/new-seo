import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
  const baseClasses = 'bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden';
  const hoverClasses = hover ? 'hover:shadow-lg hover:border-primary-200 hover:-translate-y-1' : '';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${baseClasses} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;