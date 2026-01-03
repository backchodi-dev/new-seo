import { motion } from 'framer-motion';
import { Search, FileText, Settings, Target, Link, MapPin, ChartBar as BarChart, Calendar } from 'lucide-react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import Card from './Card';
import Button from './Button';

const Services = () => {
  const services = [
    {
      icon: BarChart,
      title: "Complete SEO Audit",
      description: "Comprehensive analysis of your website's SEO performance, technical issues, and opportunities for improvement.",
      features: ["Technical SEO analysis", "Competitor research", "Keyword gap analysis", "Actionable recommendations"],
      popular: false
    },
    {
      icon: FileText,
      title: "On-Page SEO",
      description: "Optimization of individual pages to rank higher and earn more relevant traffic from search engines.",
      features: ["Meta tags optimization", "Content optimization", "Internal linking", "Schema markup"],
      popular: true
    },
    {
      icon: Settings,
      title: "Technical SEO",
      description: "Improve your website's technical foundation to ensure search engines can crawl and index effectively.",
      features: ["Site speed optimization", "Mobile optimization", "XML sitemaps", "Crawlability fixes"],
      popular: false
    },
    {
      icon: Target,
      title: "Keyword Research & Strategy",
      description: "In-depth keyword research to identify high-value opportunities that align with your business goals.",
      features: ["Search intent analysis", "Competition analysis", "Keyword mapping", "Content strategy"],
      popular: false
    },
    {
      icon: FileText,
      title: "Content Optimization",
      description: "Optimize existing content and create new content that ranks well and converts visitors into customers.",
      features: ["Content audits", "SEO copywriting", "Content gap analysis", "User intent alignment"],
      popular: true
    },
    {
      icon: Link,
      title: "Link Building",
      description: "Strategic link building campaigns to increase your domain authority and improve search rankings.",
      features: ["Quality link acquisition", "Guest posting", "Digital PR", "Link audit & cleanup"],
      popular: false
    },
    {
      icon: MapPin,
      title: "Local SEO",
      description: "Optimize your business for local search to attract customers in your geographic area.",
      features: ["Google Business Profile", "Local citations", "Review management", "Local content strategy"],
      popular: false
    },
    {
      icon: Calendar,
      title: "Monthly SEO Management",
      description: "Ongoing SEO management and optimization to maintain and improve your search rankings over time.",
      features: ["Monthly reporting", "Continuous optimization", "Performance monitoring", "Strategy adjustments"],
      popular: true
    }
  ];

  return (
    <Section id="services">
      <SectionTitle 
        title="SEO Services" 
        subtitle="Comprehensive SEO solutions tailored to your business needs and goals"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full p-6 relative group hover:shadow-xl transition-all duration-300">
              {service.popular && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-primary-600 text-white px-3 py-1 text-xs font-medium rounded-full">
                    Popular
                  </span>
                </div>
              )}

              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors mb-4">
                  <service.icon size={24} className="text-primary-600" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  href="#contact"
                  className="w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all"
                >
                  Get Quote
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="bg-primary-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Boost Your SEO?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss your SEO goals and create a custom strategy that delivers real results for your business.
          </p>
          <Button size="lg" href="#contact">
            Start Your SEO Journey
          </Button>
        </div>
      </motion.div>
    </Section>
  );
};

export default Services;