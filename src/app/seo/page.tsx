"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle,
  BarChart as BC,
  Search,
  Globe,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { motion } from "framer-motion";

export default function SEOServicesPage() {
  // Define your chart data
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 205, mobile: 100 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 273, mobile: 140 },
    { month: "May", desktop: 309, mobile: 160 },
    { month: "June", desktop: 314, mobile: 180 },
    { month: "July", desktop: 350, mobile: 200 },
    { month: "August", desktop: 370, mobile: 220 },
    { month: "September", desktop: 390, mobile: 240 },
    { month: "October", desktop: 410, mobile: 260 },
    { month: "November", desktop: 430, mobile: 280 },
    { month: "December", desktop: 450, mobile: 300 },
  ];

  // Define your chart config
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 ">
      {/* Hero Section */}
      <motion.section
        className="text-center space-y-6 grid md:grid-cols-2 gap-10 my-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col space-y-6 justify-center ">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Boost Your Online Visibility with Eigisy SEO
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlock your business potential with our expert SEO services. We help
            UK businesses climb to the top of search rankings and drive organic
            growth.
          </p>
          <Button size="lg" className="text-lg w-full max-w-sm">
            Get Your Free SEO Audit
          </Button>
        </div>
        <div className="flex justify-center container">
          <ChartContainer
            config={chartConfig}
            className="min-h-[200] md:min-h-[600px] w-full"
          >
            <BarChart data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
      </motion.section>

      {/* Key Services Section */}
      <motion.section
        className="space-y-10 my-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-center">
          Our Comprehensive SEO Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "On-Page SEO",
              icon: Search,
              description:
                "Optimize your website's content and structure for maximum search engine visibility.",
            },
            {
              title: "Technical SEO",
              icon: BC,
              description:
                "Improve your site's backend structure to enhance crawlability and indexing.",
            },
            {
              title: "Off-Page SEO",
              icon: Globe,
              description:
                "Build high-quality backlinks and improve your site's authority in your industry.",
            },
            {
              title: "Local SEO",
              icon: Users,
              description:
                "Boost your visibility in local search results and attract nearby customers.",
            },
            {
              title: "Content Strategy",
              icon: TrendingUp,
              description:
                "Develop engaging, SEO-friendly content that resonates with your target audience.",
            },
            {
              title: "SEO Audits",
              icon: CheckCircle,
              description:
                "Comprehensive analysis of your website to identify and fix SEO issues.",
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

      {/* Benefits Section */}
      <motion.section
        className="bg-muted py-20 px-6 rounded-lg my-10 gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Choose Eigisy for Your SEO Needs?
        </h2>
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            "UK-based experts with local market knowledge",
            "Tailored strategies for your specific industry",
            "Transparent reporting and measurable results",
            "White-hat techniques for sustainable growth",
            "Continuous optimization and adaptation",
            "Holistic approach integrating SEO with overall marketing",
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

      {/* CTA Section */}
      <motion.section
        className="text-center space-y-6 my-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold">
          Ready to Skyrocket Your Search Rankings?
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Don&apos;t let your competitors outrank you. Partner with Eigisy and
          start your journey to SEO success today!
        </p>
        <Button size="lg" className="text-lg">
          Schedule a Consultation
        </Button>
      </motion.section>

      {/* Testimonials Section */}
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              quote:
                "Eigisy transformed our online presence. Our organic traffic has increased by 150% in just six months!",
              author: "Sarah Thompson, CEO of UK TechSolutions",
            },
            {
              quote:
                "The team at Eigisy truly understands the UK market. Their local SEO strategies have put us on the map in London.",
              author: "James Wilson, Owner of London's Finest Bakery",
            },
            {
              quote:
                "I'm impressed by Eigisy's data-driven approach. They don't just promise results; they deliver and prove it with comprehensive reports.",
              author: "Emma Clarke, Marketing Director at BritishWear",
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
    </div>
  );
}
