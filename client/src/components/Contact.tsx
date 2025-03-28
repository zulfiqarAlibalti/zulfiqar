import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { socialLinks, contact } from "@/constants";
import Icon from "@/components/ui/icon";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Get In Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">I'd love to hear from you</p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Card: Email */}
            <ContactInfoCard 
              icon="Envelope" 
              title="Email" 
              value={contact.email} 
              link={`mailto:${contact.email}`} 
              index={0}
            />
            
            {/* Contact Card: Phone */}
            <ContactInfoCard 
              icon="Phone" 
              title="Phone" 
              value={contact.phone} 
              link={`tel:${contact.phone.replace(/\D/g, '')}`} 
              index={1}
            />
            
            {/* Contact Card: Location */}
            <ContactInfoCard 
              icon="MapMarkerAlt" 
              title="Location" 
              value={contact.address} 
              link={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`} 
              index={2}
              isMap
            />
          </div>
          
          {/* Contact Form */}
          <motion.div 
            className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Name</Label>
                  <Input 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                    className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 dark:text-white"
                  />
                </div>
              </div>
              <div className="mb-6 space-y-2">
                <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300">Subject</Label>
                <Input 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Message subject"
                  required
                  className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 dark:text-white"
                />
              </div>
              <div className="mb-6 space-y-2">
                <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Message</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your message"
                  required
                  className="bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 placeholder:text-gray-400 dark:placeholder:text-gray-500 dark:text-white"
                />
              </div>
              <div className="text-center">
                <Button 
                  type="submit"
                  size="lg"
                  className="font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Connect With Me</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(socialLinks).map(([key, link], index) => (
                <a 
                  key={key}
                  href={link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                  aria-label={key}
                >
                  <Icon name={key.charAt(0).toUpperCase() + key.slice(1)} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoCardProps {
  icon: string;
  title: string;
  value: string;
  link: string;
  index: number;
  isMap?: boolean;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ icon, title, value, link, index, isMap }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="h-16 w-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
        <Icon name={icon} className="text-2xl" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      {isMap ? (
        <p className="text-gray-600 dark:text-gray-400 text-center">
          {value}
        </p>
      ) : (
        <a 
          href={link} 
          className="text-primary hover:text-primary/80 dark:text-primary-light dark:hover:text-primary-light/80 transition-colors"
        >
          {value}
        </a>
      )}
    </motion.div>
  );
};

export default Contact;
