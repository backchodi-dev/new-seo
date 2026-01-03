import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Award } from 'lucide-react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import Card from './Card';

const CaseStudies = () => {
  const projects = [
    {
      title: "Twenty47 Logistics",
      website: "https://twenty47logistics.com/",
      industry: "Logistics & Courier Services",
      description: "Improved organic visibility for a service-based logistics website through keyword optimization, technical SEO fixes, and content improvements targeting high-intent service keywords.",
      highlights: ["Service-based optimization", "Technical SEO", "Content strategy"],
      color: "from-blue-500 to-primary-600"
    },
    {
      title: "Imperial Worktops",
      website: "https://imperialworktops.co.uk/",
      industry: "Service-Based Business (Worktops & Interiors)",
      description: "Optimized site structure, crawlability, and on-page SEO with technical improvements to support long-term ranking growth.",
      highlights: ["Site structure", "Crawlability", "On-page SEO"],
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "ES Connect",
      website: "https://esconnect.co.uk/",
      industry: "Informational / Business Website",
      description: "Improved topical authority and organic reach through keyword research, content optimization, and internal linking.",
      highlights: ["Topical authority", "Content optimization", "Internal linking"],
      color: "from-purple-500 to-indigo-600"
    }
  ];

  return (
    <Section id="case-studies" background="gray">
      <SectionTitle 
        title="Case Studies" 
        subtitle="Real results for real businesses. See how I've helped clients improve their organic visibility and rankings."
      />

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="h-full overflow-hidden group hover:shadow-2xl transition-all duration-500">
              {/* Header with gradient */}
              <div className={`h-32 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Award size={16} className="text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="text-white/80 text-sm font-medium">
                    {project.industry}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-xl text-gray-900 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-8 h-8 bg-gray-100 hover:bg-primary-100 rounded-full flex items-center justify-center transition-colors group/link"
                  >
                    <ExternalLink size={16} className="text-gray-600 group-hover/link:text-primary-600" />
                  </a>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-4">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <TrendingUp size={14} className="text-primary-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm group/cta"
                >
                  View Project
                  <ExternalLink size={14} className="group-hover/cta:translate-x-1 transition-transform" />
                </a>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default CaseStudies;