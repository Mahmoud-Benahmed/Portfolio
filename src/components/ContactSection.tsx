import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Send, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import emailjs from 'emailjs-com';
const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const contactSchema = z.object({
    name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
    email: z.string().trim().email('Please enter a valid email address').max(255, 'Email must be less than 255 characters'),
    message: z.string().trim().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters')
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    contactSchema.parse(formData);

    // Send email via EmailJS
    await emailjs.send(
      'service_e0l4ddl',    // from EmailJS
      'template_e8ejnib',   // from EmailJS
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      'ntrkd79UdofQEeO5s'     // from EmailJS
    );
    setFormData({ name: '', email: '', message: '' });

    toast({
      title: "Message Sent!",
      description: "Your message was sent successfully.I will get back to you soon.",
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      toast({
        title: "Validation Error",
        description: error.issues[0].message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Error",
        description: "Something went wrong while sending the email.Please try again.",
        variant: "destructive",
      });
    }
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-accent font-medium mb-4 tracking-wide uppercase">Contact</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary">
            GET IN TOUCH
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Left Side - Contact Info */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">Let's Connect!</h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                I'm here to help! Whether you have questions, need support, or want to collaborate, 
                feel free to reach out. Let's connect and make something great together!
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-card-border hover:border-accent/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary/10 border border-accent/20 flex items-center justify-center">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-text-muted text-sm font-medium">Phone</p>
                  <p className="text-text-primary font-semibold">+21621753951</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-card-border hover:border-accent/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary/10 border border-accent/20 flex items-center justify-center">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-text-muted text-sm font-medium">Email</p>
                  <p className="text-text-primary font-semibold">mahmoudabderrahmen55@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-card-border hover:border-accent/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary/10 border border-accent/20 flex items-center justify-center">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-text-muted text-sm font-medium">Location</p>
                  <p className="text-text-primary font-semibold">Sousse,Tunisia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-secondary p-8 rounded-2xl relative overflow-hidden">
              {/* Form Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">ANY PROJECTS?</h3>
                <p className="text-white/80">Let's discuss your ideas!</p>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2 uppercase tracking-wide text-sm">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 focus:ring-white/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2 uppercase tracking-wide text-sm">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 focus:ring-white/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2 uppercase tracking-wide text-sm">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 focus:ring-white/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-gray-900 hover:bg-white/90 font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit
                      <Send size={18} />
                    </>
                  )}
                </Button>
              </form>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full -z-10" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;