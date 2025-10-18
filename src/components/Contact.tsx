import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters").max(200, "Subject is too long"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create WhatsApp message with validated data
      const whatsappMessage = encodeURIComponent(
        `*New Contact Form Submission*\n\n` +
        `*Name:* ${validatedData.name}\n` +
        `*Email:* ${validatedData.email}\n` +
        `*Subject:* ${validatedData.subject}\n` +
        `*Message:*\n${validatedData.message}`
      );
      
      // Open WhatsApp
      window.open(`https://wa.me/21629884210?text=${whatsappMessage}`, '_blank');
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        
        toast({
          title: "Validation Error",
          description: "Please check the form fields and try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nadajbr725@gmail.com",
      href: "mailto:nadajbr725@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+216 29 884 210",
      href: "tel:+21629884210",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Monastir, Tunisia",
      href: "https://www.bing.com/maps/search?mepi=0%7E%7EEmbedded%7ELargeMapLink&ty=18&vdpid=7214452655249162241&v=2&sV=1&FORM=MIRE&q=Monastir%2C+Gouvernorat+Monastir%2C+Tunisie&ss=id.sid%3Ab281cb3d-bf68-e4ac-1396-284768f3912e&ppois=35.77075958251953_10.828051567077637_Monastir%2C+Gouvernorat+Monastir%2C+Tunisie_%7E&cp=35.770760%7E10.828052&lvl=16&style=r",

    },
  ];

  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-start gap-4 glass-effect p-4 rounded-lg glow-hover transition-all duration-300"
                >
                  <div className="p-3 rounded-full bg-gradient-primary shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="glass-effect p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Let's Connect</h4>
              <p className="text-muted-foreground text-sm">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, I'll try my best
                to get back to you!
              </p>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="glass-effect p-6 rounded-lg space-y-5">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`bg-background/50 transition-all ${errors.name ? 'border-destructive' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`bg-background/50 transition-all ${errors.email ? 'border-destructive' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                    Subject <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry"
                    className={`bg-background/50 transition-all ${errors.subject ? 'border-destructive' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.subject && (
                    <p className="text-xs text-destructive mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className={`bg-background/50 resize-none transition-all ${errors.message ? 'border-destructive' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive mt-1">{errors.message}</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">
                    {formData.message.length}/1000 characters
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 disabled:opacity-50"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send via WhatsApp
                    </>
                  )}
                </Button>

                <div className="glass-effect p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground">
                      Your message will be sent directly via WhatsApp. Make sure you have WhatsApp installed.
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
