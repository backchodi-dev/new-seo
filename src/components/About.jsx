import { motion } from 'framer-motion';
import { CircleCheck as CheckCircle, Target, TrendingUp, Users } from 'lucide-react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import profileImage from '../assets/profile.jpeg';

const About = () => {
  const highlights = [
    { icon: Target, text: "Data-driven, strategic approach" },
    { icon: CheckCircle, text: "White-hat, ethical SEO practices" },
    { icon: TrendingUp, text: "Focus on long-term growth" },
    { icon: Users, text: "Experience across multiple niches" }
  ];

  return (
    <Section id="about" background="gray">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle 
            title="About Me" 
            subtitle=""
            centered={false}
            className="mb-8"
          />

          <div className="space-y-6 text-gray-600">
            <p className="text-lg">
              I am a results-driven SEO Expert with over 2 years of hands-on experience helping businesses grow their online presence through strategic and ethical SEO practices.
            </p>
            
            <p className="text-lg">
              I specialize in optimizing service-based and informational websites by aligning content with search intent, fixing technical issues, and implementing sustainable SEO strategies.
            </p>
            
            <p className="text-lg">
              My approach is data-driven, transparent, and focused on long-term growth rather than short-term wins. I have experience working on multiple niches and delivering measurable improvements through comprehensive SEO strategies.
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-10 space-y-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <highlight.icon size={16} className="text-primary-600" />
                </div>
                <span className="text-gray-700 font-medium">{highlight.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-900">Based in Pakistan</h4>
                <p className="text-gray-600">Available for global projects</p>
              </div>
              <div className="text-2xl">🇵🇰</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <img
                src={profileImage}
                alt="Abdul Ahad - SEO Expert"
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-blue-500 rounded-2xl transform rotate-6 scale-105 opacity-10"></div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;