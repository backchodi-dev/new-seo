import { motion } from 'framer-motion';
import { Mail, MessageCircle, Linkedin, MapPin, Clock, ArrowRight } from 'lucide-react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import Button from './Button';
import Card from './Card';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "ahadalvi304@gmail.com",
      href: "mailto:ahadalvi304@gmail.com",
      description: "Best for detailed project discussions"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+92 302 3261155",
      href: "https://wa.me/923023261155",
      description: "Quick questions and consultations"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Abdul Ahad Aslam",
      href: "https://www.linkedin.com/in/abdulahadaslam/",
      description: "Professional networking and updates"
    }
  ];

  const availability = [
    "Monday - Friday: 9:00 AM - 6:00 PM (PKT)",
    "Saturday: 10:00 AM - 4:00 PM (PKT)",
    "Sunday: Available for urgent projects"
  ];

  return (
    <Section id="contact">
      <SectionTitle 
        title="Let's Work Together" 
        subtitle="Ready to grow your website's organic traffic, rankings, and ROI with proven SEO strategies?"
      />

      <div className="grid lg:grid-cols-3 gap-12">
        
        {/* Contact Methods */}
        <div className="lg:col-span-2">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-xl hover:border-primary-200 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors flex-shrink-0">
                      <method.icon size={24} className="text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{method.label}</h3>
                      <a
                        href={method.href}
                        target={method.label === 'LinkedIn' ? '_blank' : '_self'}
                        rel={method.label === 'LinkedIn' ? 'noopener noreferrer' : ''}
                        className="text-primary-600 hover:text-primary-700 font-medium block mb-2 group-hover:underline"
                      >
                        {method.value}
                      </a>
                      <p className="text-sm text-gray-600">{method.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-primary-100 mb-6 text-lg">
              Let's discuss your SEO goals and create a strategy that delivers real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary"
                size="lg"
                href="mailto:ahadalvi304@gmail.com"
                className="bg-white text-primary-600 hover:bg-gray-50"
              >
                Send Email
                <Mail size={20} />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                href="https://wa.me/923023261155"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                WhatsApp Me
                <MessageCircle size={20} />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <MapPin size={20} className="text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Location</h3>
              </div>
              <p className="text-gray-600 mb-2">Pakistan</p>
              <p className="text-sm text-gray-500">Working with clients globally</p>
            </Card>
          </motion.div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Clock size={20} className="text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Availability</h3>
              </div>
              <div className="space-y-2">
                {availability.map((time, index) => (
                  <p key={index} className="text-sm text-gray-600">{time}</p>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 bg-primary-50 border-primary-200">
              <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-sm text-gray-600 mb-3">
                I typically respond to inquiries within 2-4 hours during business days.
              </p>
              <div className="flex items-center gap-2 text-primary-600">
                <ArrowRight size={16} />
                <span className="text-sm font-medium">Let's talk about your project!</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;