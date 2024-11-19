"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Lightbulb, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-32">
      {/* Hero Section */}
      <motion.section
        className="grid md:grid-cols-2 gap-8 items-center min-h-screen"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Igniting Digital Innovation
          </h1>
          <p className="text-xl text-muted-foreground">
            Eigisy: Where passion meets expertise in the ever-evolving world of
            digital marketing.
          </p>
        </div>
        <div className="w-fit">
          <Image
            src="/influencer.png"
            alt="Eigisy team brainstorming"
            width={600}
            height={600}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        className="space-y-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-center">Our Story</h2>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="mb-4">
              In a digital world brimming with noise, we saw a challenge—and an
              opportunity. As seasoned marketers and passionate storytellers, we
              noticed something missing: an integrated, human-centered approach
              to digital marketing that does not just focus on metrics but on
              real connections and lasting impact.
            </p>
            <p className="mb-4">
              That is why we created Eigisy—a digital marketing agency built on
              the belief that every brand has a story worth telling and an
              audience ready to listen. Our mission is simple: to empower
              businesses of all sizes with innovative, data-driven strategies
              that spark growth and drive results.
            </p>
            <p className="mb-4">
              We started with a small team and a big dream: to blend creativity
              with analytics, strategy with execution, and cutting-edge
              technology with timeless storytelling. From mastering SEO to
              leveraging influencer collaborations and creating compelling
              content, we have built a full-service agency that thrives on helping
              brands stand out, scale up, and make their mark in the digital
              landscape.
            </p>
            <p>
              What sets us apart is not just our expertise—it is our commitment.
              We see your success as our success, and every campaign we create
              is a reflection of our dedication to your vision.
            </p>
            <p>
              Welcome to Eigisy—where your story becomes the spark for something
              extraordinary.
            </p>
            <p>Let us grow together.</p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Our Vision Section */}
      <motion.section
        className="space-y-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-center">Our Vision</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Innovate",
              icon: Lightbulb,
              description:
                "Push the boundaries of what's possible in digital marketing.",
            },
            {
              title: "Empower",
              icon: Users,
              description:
                "Enable businesses to thrive in the digital landscape.",
            },
            {
              title: "Transform",
              icon: Rocket,
              description:
                "Drive meaningful change and growth for our clients.",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <value.icon className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p>{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Our Approach Section */}
      <motion.section
        className="space-y-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-center">Our Approach</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  Data-Driven Strategies
                </h3>
                <p>
                  We believe in the power of data. Every decision we make, every
                  strategy we implement is backed by robust analytics and
                  insights. This approach allows us to pivot quickly, optimize
                  continuously, and deliver measurable results for our clients.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  Agile & Adaptive
                </h3>
                <p>
                  As a young company, we&apos;re nimble and quick to adapt. We
                  stay ahead of industry trends, algorithm changes, and emerging
                  platforms. This agility allows us to offer our clients
                  cutting-edge solutions that larger, more established agencies
                  might miss.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="space-y-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-center">
          Why Choose Eigisy?
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Fresh perspective with cutting-edge strategies",
            "Personalized attention and agile approach",
            "Data-driven decision making",
            "Expertise in emerging technologies like AI and AR",
            "Transparent communication and reporting",
            "Passion for driving real, measurable results",
          ].map((point, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
              <span>{point}</span>
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
          Ready to Revolutionize Your Digital Presence?
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Join us on this exciting journey. Let&apos;s harness the power of
          innovative digital marketing to skyrocket your business growth.
        </p>
        <Button size="lg" className="text-lg">
          Start Your Digital Transformation
        </Button>
      </motion.section>
    </div>
  );
}
