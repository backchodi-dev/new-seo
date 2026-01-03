import { motion } from 'framer-motion';
import Section from './Section';
import SectionTitle from './SectionTitle';

const Tools = () => {
  const tools = [
    {
      name: "Ahrefs",
      category: "SEO Analysis",
      logo: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=100&h=100&fit=crop&crop=center",
      description: "Comprehensive SEO toolset for keyword research, backlink analysis, and competitor research."
    },
    {
      name: "SEMrush",
      category: "SEO & PPC",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop&crop=center",
      description: "All-in-one digital marketing suite for SEO, PPC, content, and competitive research."
    },
    {
      name: "Google Search Console",
      category: "Search Analytics",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop&crop=center",
      description: "Free tool to monitor, maintain, and troubleshoot your site's presence in Google Search."
    },
    {
      name: "Google Analytics",
      category: "Web Analytics",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center",
      description: "Web analytics service to track and report website traffic and user behavior."
    },
    {
      name: "Screaming Frog",
      category: "Technical SEO",
      logo: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=100&h=100&fit=crop&crop=center",
      description: "Website crawler that helps you improve onsite SEO by extracting data & auditing for common issues."
    },
    {
      name: "Yoast SEO",
      category: "WordPress SEO",
      logo: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=100&h=100&fit=crop&crop=center",
      description: "WordPress plugin that helps optimize your content for search engines and social media."
    },
    {
      name: "Rank Math",
      category: "WordPress SEO",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center",
      description: "WordPress SEO plugin packed with features to help improve your search rankings."
    }
  ];

  return (
    <Section id="tools" background="gray">
      <SectionTitle 
        title="Tools & Platforms I Use" 
        subtitle="Professional SEO tools and platforms I leverage to deliver exceptional results"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex flex-col items-center text-center">
              {/* Logo/Icon */}
              <div className="w-16 h-16 bg-gray-100 rounded-xl mb-4 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tool Name */}
              <h3 className="font-bold text-lg text-gray-900 mb-1">
                {tool.name}
              </h3>

              {/* Category */}
              <span className="text-sm text-primary-600 font-medium bg-primary-50 px-2 py-1 rounded-full mb-3">
                {tool.category}
              </span>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {tool.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center bg-white rounded-xl p-8 shadow-sm border border-gray-200"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Professional SEO Toolkit
        </h3>
        <p className="text-gray-600 max-w-3xl mx-auto">
          I use industry-leading tools and platforms to ensure accurate analysis, effective optimization, and transparent reporting. Each tool serves a specific purpose in delivering comprehensive SEO solutions that drive real results for your business.
        </p>
      </motion.div>
    </Section>
  );
};

export default Tools;