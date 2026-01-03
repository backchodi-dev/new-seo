import { motion } from 'framer-motion';
import { Search, Settings, FileText, Link, MapPin, ChartBar as BarChart, Users, Target } from 'lucide-react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import Card from './Card';

const Skills = () => {
  const skills = [
    {
      icon: Search,
      title: "Keyword Research & Search Intent Analysis",
      description: "Comprehensive keyword research to identify high-value opportunities and understand user search intent."
    },
    {
      icon: FileText,
      title: "On-Page SEO Optimization",
      description: "Complete optimization of meta tags, content structure, internal linking, and user experience signals."
    },
    {
      icon: Settings,
      title: "Technical SEO",
      description: "Crawlability optimization, indexing improvements, site health audits, and technical performance fixes."
    },
    {
      icon: Target,
      title: "Content Optimization & SEO Copy",
      description: "Content optimization for search engines while maintaining readability and user engagement."
    },
    {
      icon: Link,
      title: "Off-Page SEO & Link Building",
      description: "Strategic link building campaigns and off-page optimization to build domain authority and trust."
    },
    {
      icon: MapPin,
      title: "Local SEO",
      description: "Google Business Profile optimization, local citations, and geo-targeted SEO strategies."
    },
    {
      icon: BarChart,
      title: "SEO Audits & Competitor Analysis",
      description: "Comprehensive website audits and competitive analysis to identify opportunities and gaps."
    },
    {
      icon: Users,
      title: "Performance Tracking & Reporting",
      description: "Data-driven reporting with actionable insights and transparent communication of results."
    }
  ];

  return (
    <Section id="skills">
      <SectionTitle 
        title="My SEO Skills & Expertise" 
        subtitle="Comprehensive SEO services to grow your online presence and drive organic traffic"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                  <skill.icon size={24} className="text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                  {skill.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {skill.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;