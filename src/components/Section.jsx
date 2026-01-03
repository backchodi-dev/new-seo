import { motion } from 'framer-motion';

const Section = ({ 
  children, 
  id, 
  className = '', 
  background = 'white',
  ...props 
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50'
  };
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id={id}
      className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;