"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    preferredContact: "email",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      preferredContact: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log(formData);
    toast.info("We'll get back to you as soon as possible.");
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      preferredContact: "email",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      {/* Hero Section */}
      <motion.section
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Let&apos;s Start Something Amazing Together
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have a question, a brilliant idea, or ready to skyrocket your digital
          presence? We&apos;re all ears and ready to make digital magic happen.
        </p>
      </motion.section>

      {/* Contact Information */}
      <motion.section
        className="grid gap-8 md:grid-cols-3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {[
          {
            icon: MapPin,
            title: "Visit Us",
            content: "123 Tech Lane, Digital District, London, UK",
          },
          { icon: Phone, title: "Call Us", content: "+44 20 7946 0958" },
          { icon: Mail, title: "Email Us", content: "contact@Eigisy.com" },
        ].map((item, index) => (
          <Card key={index}>
            <CardContent className="flex flex-col items-center text-center p-6">
              <item.icon className="h-10 w-10 text-primary mb-4" />
              <CardTitle className="mb-2">{item.title}</CardTitle>
              <CardDescription>{item.content}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </motion.section>

      {/* Contact Form */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Card className="mx-auto w-full max-w-xl">
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we&apos;ll get back to you faster than
              you can say &quot;SEO&quot;!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us more about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Preferred method of contact</Label>
                <RadioGroup
                  defaultValue="email"
                  value={formData.preferredContact}
                  onValueChange={handleRadioChange}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="email-contact" />
                    <Label htmlFor="email-contact">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="phone-contact" />
                    <Label htmlFor="phone-contact">Phone</Label>
                  </div>
                </RadioGroup>
              </div>
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.section>

      {/* Map Section */}
      <motion.section
        className="space-y-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-center">Find Us Here</h2>
        <div className="aspect-video rounded-lg overflow-hidden">
          {/* Replace the src with your actual Google Maps embed URL */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2759991074!2d-0.12618382334809043!3d51.50736020953638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c7c7eb9be3%3A0x3918653583725b56!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1689097995391!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Eigisy office location"
          ></iframe>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold">
          Ready to Elevate Your Digital Game?
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Don&apos;t wait for success to knock on your door. Reach out now and
          let&apos;s create digital waves together!
        </p>
        <Button size="lg" className="text-lg">
          Schedule a Free Consultation
        </Button>
      </motion.section>
    </div>
  );
}
