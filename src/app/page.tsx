/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import { CardContent, CardHeader } from "@/components/ui/card";
import {
  Flame,
  Search,
  Users,
  TrendingUp,
  BarChart,
  Megaphone,
} from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  company: string;
  image: string;
}
interface Testimonial {
  quote: string;
  author: string;
  company: string;
  image: string;
}
const testimonials: Testimonial[] = [
  {
    quote:
      "If you are a business owner, and you don't have Eigisy in your toolkit just yet, I highly recommend that you check it out.",
    author: "Eleanor Pena",
    company: "Koala Co.",
    image: "https://api.dicebear.com/6.x/avataaars/svg?seed=EleanorPena",
  },
  {
    quote:
      "I have been using Eigisy for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great.",
    author: "Ralph Edwards",
    company: "Halodek Inc",
    image: "https://api.dicebear.com/6.x/avataaars/svg?seed=RalphEdwards",
  },
  {
    quote:
      "Eigisy makes me more productive and gets the job done in a fraction of the time. I'm glad I found Eigisy.",
    author: "Ronald Richards",
    company: "Rubber.com",
    image: "https://api.dicebear.com/6.x/avataaars/svg?seed=RonaldRichards",
  },
  {
    quote:
      "Eigisy has helped me stay on the same page. Previously, we were all over the board. Using Eigisy has definitely saved us time and money.",
    author: "Jerome Bell",
    company: "Jeno",
    image: "https://api.dicebear.com/6.x/avataaars/svg?seed=JeromeBell",
  },
  {
    quote:
      "The efficiency and ease of use that Eigisy provides is unmatched. It has transformed the way we operate.",
    author: "Leslie Alexander",
    company: "Tech Solutions",
    image: "https://api.dicebear.com/6.x/avataaars/svg?seed=LeslieAlexander",
  },
  {
    quote:
      "Eigisy's intuitive design and powerful features have made it an indispensable tool for our team.",
    author: "Kristin Watson",
    company: "Creative Minds",
    image: "https://api.dicebear.com/6.x/avataaars/svg?seed=KristinWatson",
  },
  {
    quote:
      "Since integrating Eigisy into our workflow, we've seen a significant increase in productivity and collaboration.",
    author: "Cameron Williamson",
    company: "Innovatech",
    image: "https://api.dicebear.com/6.x/avataaars/svg?seed=CameronWilliamson",
  },
];

function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <motion.div
          className="flex flex-col justify-center space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-transparent via-primary/20 to-transparent px-3 py-1 text-sm"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Flame className="h-4 w-4 text-orange-500" />
            BEST MARKETING AGENCY FOR FMGC E-COMMERCE
          </motion.div>

          <motion.h1
            className="text-5xl font-bold leading-tight tracking-tight lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Grow revenue with powerful marketing
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Marketing is more powerful and effective and efficient for your
            business growth with Eigisy.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link
              className={buttonVariants({
                size: "lg",
                className: "w-full max-w-sm",
              })}
              href="#"
            >
              Learn Mores
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div
            className="absolute -right-4 top-4 z-10 rounded-lg border bg-white p-3 shadow-lg"
            style={{ width: "220px" }}
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-medium">Revenue</span>
              <div className="flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="text-lg font-bold">$16,400.12</div>
            <div className="mt-3 flex h-24 items-end gap-1">
              {[
                { height: 40, color: "bg-blue-300" },
                { height: 70, color: "bg-blue-400" },
                { height: 45, color: "bg-blue-300" },
                { height: 30, color: "bg-blue-200" },
                { height: 65, color: "bg-blue-400" },
                { height: 90, color: "bg-blue-600" },
                { height: 80, color: "bg-blue-500" },
                { height: 60, color: "bg-blue-400" },
                { height: 45, color: "bg-blue-300" },
                { height: 70, color: "bg-blue-400" },
                { height: 50, color: "bg-blue-300" },
              ].map((bar, i) => (
                <div
                  key={i}
                  className={`w-4 ${bar.color}`}
                  style={{ height: `${bar.height}%` }}
                />
              ))}
            </div>
          </div>

          <motion.div
            className="relative mt-12 rounded-2xl bg-gray-100 p-6 w-fit h-fit"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Image
              src="/male-marketer.png"
              alt="Marketing professional at desk"
              width={600}
              height={400}
              className="rounded-xl object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function MarketingSolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="bg-gradient-to-r from-primary/10 to-blue-500/10 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-16">
          Transform Your E-commerce Success With Our Marketing Solutions
        </h2>

        <div className="grid gap-8 md:grid-cols-3" ref={ref}>
          <motion.div
            className="rounded-xl border bg-card text-card-foreground shadow relative"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <CardHeader className="flex flex-row justify-between w-full items-center">
              <div className="text-4xl font-bold ">3.5X</div>
              <div>
                <Search className="h-12 w-12 text-blue-400" />
              </div>
            </CardHeader>

            <CardContent>
              <div className="text-xl font-semibold mb-4">SEO Growth</div>
              <p className="text-gray-600">
                Our SEO strategies have helped e-commerce clients achieve 250%
                increase in organic traffic and 3.5x boost in qualified leads
                within 6 months.
              </p>
            </CardContent>
          </motion.div>

          <motion.div
            className="rounded-xl border bg-card text-card-foreground shadow relative"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CardHeader className="flex flex-row justify-between w-full items-center">
              <div className="text-4xl font-bold ">3.5X</div>
              <div>
                <Users className="h-12 w-12 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-semibold mb-4">Social Reach</div>
              <p className="text-gray-600">
                Through strategic influencer partnerships, our clients see 20x
                increase in social engagement and 15x boost in direct social
                media sales.
              </p>
            </CardContent>
          </motion.div>

          <motion.div
            className="rounded-xl border bg-card text-card-foreground shadow relative"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <CardHeader className="flex flex-row justify-between w-full items-center">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div>
                <TrendingUp className="h-12 w-12 text-green-400" />
              </div>
            </CardHeader>

            <CardContent>
              <div className="text-xl font-semibold mb-4">ROI Increase</div>
              <p className="text-gray-600">
                Our integrated marketing approach delivers 85% higher ROI
                through targeted campaigns and conversion rate optimization.
              </p>
            </CardContent>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  if (isInView) {
    controls.start("visible");
  }

  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -50 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-16">
          Our Cutting-Edge Marketing Services
        </h2>

        <div className="flex flex-col gap-12 w-full">
          <motion.div
            className="grid gap-6 md:grid-cols-2"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={sectionVariants}
          >
            <div className="rounded-xl p-6 bg-gray-100 w-fit">
              <Image
                src="/seo.png"
                alt="SEO Mastery visualization"
                className="rounded-xl object-cover"
                width={600}
                height={400}
              />
            </div>
            <div className="w-full gap-6 flex flex-col">
              <div className="flex items-center gap-4">
                <BarChart className="h-12 w-12 text-gray-600 flex-shrink-0" />
                <h3 className="text-2xl font-bold">SEO Mastery</h3>
              </div>
              <p className="text-gray-600">
                Dominate search results and drive organic growth with our
                data-driven SEO strategies. We don&apos;t just chase algorithms;
                we create content that resonates with your audience and search
                engines alike. Our SEO experts will:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  Conduct in-depth keyword research tailored to your e-commerce
                  niche
                </li>
                <li>
                  Optimize your product pages for maximum visibility and
                  conversions
                </li>
                <li>
                  Build high-quality backlinks to boost your domain authority
                </li>
                <li>
                  Provide monthly reports with actionable insights for
                  continuous improvement
                </li>
              </ul>
              <Link
                href="#"
                className={buttonVariants({
                  size: "lg",
                  className: "w-full max-w-sm",
                })}
              >
                Boost Your SEO Now
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={sectionVariants}
          >
            <div className="w-full gap-6 flex flex-col">
              <div className="flex items-center gap-4">
                <Megaphone className="h-12 w-12 text-gray-600 flex-shrink-0" />
                <h3 className="text-2xl font-bold">
                  Influencer Marketing Magic
                </h3>
              </div>
              <p className="text-gray-600">
                Harness the power of authentic voices to skyrocket your brand
                awareness and sales. Our influencer marketing strategies go
                beyond mere product placement; we create partnerships that tell
                your brand&apos;s story and drive real results. With our
                approach, you&apos;ll:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  Connect with influencers who truly align with your brand
                  values
                </li>
                <li>
                  Develop creative campaigns that engage and convert followers
                </li>
                <li>
                  Track ROI with precision, ensuring every collaboration counts
                </li>
                <li>
                  Leverage user-generated content to build social proof and
                  trust
                </li>
              </ul>
              <Link
                href="#"
                className={buttonVariants({
                  size: "lg",
                  className: "w-full max-w-sm",
                })}
              >
                Launch Your Influencer Campaign
              </Link>
            </div>
            <div className="rounded-xl p-6 bg-gray-100 w-fit">
              <Image
                src="/influencer.png"
                alt="Influencer Marketing"
                className="rounded-xl object-cover"
                width={600}
                height={400}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-black text-white py-24 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Perfect the customer experience
        </h2>
        <p className="text-xl text-gray-400 text-center max-w-2xl mx-auto">
          Take a look at how our results are making a difference in the world of
          marketing
        </p>
      </div>

      <motion.div
        ref={containerRef}
        className="flex gap-6 px-4"
        style={{ width: "max-content" }}
        aria-label="Customer testimonials"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl p-6 w-[350px] flex flex-col"
          >
            <blockquote className="flex-1 text-lg mb-6">
              {testimonial.quote}
            </blockquote>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={`${testimonial.author}'s avatar`}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-400">
                  {testimonial.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

// ... existing code ...

function FAQSection() {
  const faqItems = [
    {
      question: "What is digital marketing?",
      answer:
        "Digital marketing involves promoting products or services through digital channels such as search engines, social media, email, and websites.",
    },
    {
      question: "How can digital marketing benefit my business?",
      answer:
        "Digital marketing can increase your online presence, reach a larger audience, and drive more sales through targeted campaigns.",
    },
    {
      question: "What services do you offer?",
      answer:
        "We offer SEO, social media marketing, content creation, email marketing, and more to help grow your business.",
    },
    {
      question:
        "How do you measure the success of a digital marketing campaign?",
      answer:
        "We use various metrics such as website traffic, conversion rates, click-through rates, and ROI to measure the success of our campaigns.",
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer:
        "Results can vary depending on the strategy and goals, but typically, you can start seeing significant improvements within 3 to 6 months.",
    },
    {
      question: "What is SEO and why is it important?",
      answer:
        "SEO, or Search Engine Optimization, is the process of optimizing your website to rank higher in search engine results, which increases visibility and attracts more visitors.",
    },
    {
      question: "Can you help with social media marketing?",
      answer:
        "Yes, we can create and manage social media campaigns to engage your audience and promote your brand across various platforms.",
    },
    {
      question: "Do you provide content creation services?",
      answer:
        "Absolutely, we offer content creation services including blog posts, videos, infographics, and more to enhance your digital marketing efforts.",
    },
    {
      question: "What is PPC advertising?",
      answer:
        "PPC, or Pay-Per-Click advertising, is a model where advertisers pay a fee each time their ad is clicked. It's a way to buy visits to your site rather than earning them organically.",
    },
    {
      question: "How do you ensure my marketing strategy is up-to-date?",
      answer:
        "We continuously monitor industry trends and update our strategies to ensure your marketing efforts are aligned with the latest best practices.",
    },
  ];

  return (
    <section id="#faqs" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-16">
          Frequently Asked Questions
        </h2>
        <Accordion type="multiple">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-xl font-semibold mb-2">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CallToActionSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Grow Better With Eigisy Today
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We prioritize quality over quantity, try our service for free and
          experience extraordinary benefits for your business.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Button size="lg">Learn More</Button>
        </motion.div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <MarketingSolutionsSection />
      <ServicesSection />
      <TestimonialsSection />
      <CallToActionSection />
      <FAQSection />
    </main>
  );
}
