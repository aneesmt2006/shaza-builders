
import { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { SectionHeading } from '@/components/SectionHeading';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from '@emailjs/browser'


const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(6, {
    message: "Phone number must be at least 6 digits.",
  }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const ref = useRef(null)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate API call

    // setTimeout(() => {
    //   console.log(values);
    //   toast({
    //     title: "Message Sent",
    //     description: "We'll get back to you as soon as possible!",
    //   });
    //   form.reset();
    //   setIsSubmitting(false);
    // }, 1500);

    const serviceID = import.meta.env.SERVICE_ID;
const templateID = import.meta.env.TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm('service_gg4g1pf','template_gm0nywo',ref.current,'zN8muHBso5RWqnjaO')
    .then(()=>{
      toast({
        title:"Message Sent",
        description:" We'll get back to you as soon as possible!"
      })
      form.reset()
      setIsSubmitting(false)
    },
  (error) => {
            console.error("EmailJS Error:", error);
            toast({
              title: "Error",
              description: "Failed to send message. Please try again.",
              variant: "destructive",
            });
            setIsSubmitting(false);
          }).catch((err)=>{
            console.log(err)
            toast({
              title:"Error happened",
              description:"Form submission failed. Please try again",
              variant:'destructive'
            })
          })
  }

  return (
    <>
      {/* Banner */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1632&auto=format&fit=crop" 
            alt="Building Exterior"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-shaza-black/90" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Contact <span className="gold-gradient">Us</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Reach out to discuss your construction needs or to learn more about our services
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <SectionHeading 
                title="Get in Touch" 
                subtitle="We're here to answer any questions about your construction projects"
                center={false}
              />
              
              <div className="space-y-8 mt-8">
                <div className="flex items-start gap-4">
                  <div className="bg-shaza-darkgray p-4 rounded-lg">
                    <Phone size={24} className="text-shaza-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2">Phone</h3>
                    <a href="tel:+919482813414"><p className="text-muted-foreground mb-1">Zakariya
: +91 948 281 3414</p></a>
                    <a href="+919448215119"> <p className="text-muted-foreground">Shafeeq P.H : +91 944 821 5119</p></a>
                   
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-shaza-darkgray p-4 rounded-lg">
                    <Mail size={24} className="text-shaza-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2">Email</h3>
                    <p className="text-muted-foreground mb-1">General Inquiries : shazabuilderscoorg@gmail.com</p>
                    
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-shaza-darkgray p-4 rounded-lg">
                    <MapPin size={24} className="text-shaza-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2">Location</h3>
                    <p className="text-muted-foreground">
                      SHAZA Builders & Engineers<br />
                      Kushalnagar<br />
                      Coorg, Karnataka<br />
                      India - 571234
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-shaza-darkgray p-4 rounded-lg">
                    <Clock size={24} className="text-shaza-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2">Working Hours</h3>
                    <p className="text-muted-foreground mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              {/* <div className="mt-12">
                <h3 className="text-xl font-serif mb-4">Find Us On Map</h3>
                <div className="h-[300px] rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3895.908196484124!2d75.95521167506777!3d12.455834387814134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDI3JzIxLjAiTiA3NcKwNTcnMjguMCJF!5e0!3m2!1sen!2sin!4v1748100883398!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    loading="lazy"
                    className="grayscale contrast-125"
                    title="SHAZA Builders & Engineers Location"
                  ></iframe>
                </div>
              </div> */}
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-shaza-darkgray rounded-lg p-8">
                <h2 className="text-2xl font-serif mb-6">Send Us A Message</h2>
                
                <Form {...form} >
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" ref={ref}>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your name" 
                              {...field} 
                              className="bg-shaza-black border-shaza-gold/30 focus:border-shaza-gold"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your email" 
                                {...field} 
                                type="email"
                                className="bg-shaza-black border-shaza-gold/30 focus:border-shaza-gold"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="+91 123 456 7890 Phone" 
                                {...field} 
                                type="tel"
                                className="bg-shaza-black border-shaza-gold/30 focus:border-shaza-gold"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Project Inquiry" 
                              {...field} 
                              className="bg-shaza-black border-shaza-gold/30 focus:border-shaza-gold"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your project..." 
                              {...field} 
                              className="bg-shaza-black border-shaza-gold/30 focus:border-shaza-gold min-h-[150px]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="w-full bg-shaza-gold hover:bg-shaza-lightgold text-shaza-black"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
