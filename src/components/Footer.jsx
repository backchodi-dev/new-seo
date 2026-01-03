import { motion } from 'framer-motion';
import { Mail, MessageCircle, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:ahadalvi304@gmail.com",
      label: "Email"
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/923023261155",
      label: "WhatsApp"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/abdulahadaslam/",
      label: "LinkedIn"
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4">Abdul Ahad</h3>
                <p className="text-gray-400 mb-6 max-w-md">
                  Results-driven SEO Expert helping businesses grow their online presence through strategic and ethical SEO practices. Based in Pakistan, working with clients globally.
                </p>
                
                {/* Social Links */}
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target={social.label === 'LinkedIn' ? '_blank' : '_self'}
                      rel={social.label === 'LinkedIn' ? 'noopener noreferrer' : ''}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-200"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.querySelector(link.href);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="font-semibold mb-4">Get In Touch</h4>
                <div className="space-y-3">
                  <p className="text-gray-400">
                    <span className="block font-medium text-white">Email:</span>
                    ahadalvi304@gmail.com
                  </p>
                  <p className="text-gray-400">
                    <span className="block font-medium text-white">WhatsApp:</span>
                    +92 302 3261155
                  </p>
                  <p className="text-gray-400">
                    <span className="block font-medium text-white">Location:</span>
                    Pakistan
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © {currentYear} Abdul Ahad. All rights reserved.
            </motion.p>
            
            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;