"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  Users,
  TrendingUp,
  Target,
  BarChart2,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function InfluencerMarketingPage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      {/* Hero Section */}
      <motion.section
        className="grid md:grid-cols-2 gap-4 items-center min-h-screen"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Amplify Your Brand with Influencer Marketing
          </h1>
          <p className="text-xl text-muted-foreground">
            Connect with your target audience through authentic partnerships.
            Eigisy&apos;s influencer marketing strategies drive engagement,
            trust, and conversions.
          </p>
          <Button size="lg" className="text-lg">
            Start Your Influencer Campaign
          </Button>
        </div>
        <div className="w-fit">
          <Image
            src="/tiktok.png"
            alt="Influencer engaging with audience"
            objectFit="cover"
            className="rounded-lg"
            width={600}
            height={600}
          />
        </div>
      </motion.section>

      {/* Key Services Section */}
      <motion.section
        className="space-y-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-center">
          Our Influencer Marketing Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Influencer Discovery",
              icon: Users,
              description:
                "Identify the perfect influencers who align with your brand values and target audience.",
            },
            {
              title: "Campaign Strategy",
              icon: Target,
              description:
                "Develop tailored influencer campaigns that meet your specific marketing objectives.",
            },
            {
              title: "Content Collaboration",
              icon: MessageCircle,
              description:
                "Work with influencers to create authentic, engaging content that resonates with their followers.",
            },
            {
              title: "Performance Tracking",
              icon: BarChart2,
              description:
                "Monitor and analyze campaign metrics to ensure maximum ROI and engagement.",
            },
            {
              title: "Relationship Management",
              icon: TrendingUp,
              description:
                "Build and nurture long-term partnerships with influencers for sustained brand growth.",
            },
            {
              title: "Compliance & Disclosure",
              icon: CheckCircle,
              description:
                "Ensure all influencer collaborations adhere to UK advertising standards and regulations.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <service.icon className="h-6 w-6" />
                    <span>{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="bg-muted py-12 px-6 rounded-lg gap-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Choose Eigisy for Influencer Marketing?
        </h2>
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Extensive network of UK and global influencers",
            "Data-driven influencer selection process",
            "Customised strategies for each brand",
            "Transparent reporting and ROI tracking",
            "Expertise in micro and macro influencer campaigns",
            "Compliance with UK advertising regulations",
          ].map((benefit, index) => (
            <motion.li
              key={index}
              className="flex items-start space-x-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
              <span>{benefit}</span>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section
        className="space-y-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-center">
          What Our Clients Say
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              quote:
                "Eigisy's influencer marketing strategies have transformed our brand presence. Their data-driven approach and deep understanding of the UK market have been invaluable.",
              author: "Emily Watson, Marketing Director at FashionUK",
            },
            {
              quote:
                "Working with Eigisy has been a game-changer for our influencer campaigns. They've helped us connect with the right influencers and achieve remarkable ROI.",
              author: "Mark Thompson, CEO of HealthyEats",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="pt-6">
                  <p className="italic mb-4">&quot;{testimonial.quote}&quot;</p>
                  <p className="font-semibold">{testimonial.author}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold">
          Ready to Elevate Your Brand with Influencer Marketing?
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Don&apos;t miss out on the power of influencer collaborations. Let
          Eigisy craft a bespoke influencer marketing strategy that drives real
          results for your brand.
        </p>
        <Button size="lg" className="text-lg">
          Schedule a Strategy Session
        </Button>
      </motion.section>
    </div>
  );
}
