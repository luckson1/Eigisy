"use client";
import { motion } from "framer-motion";

import { useInView } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Twitter,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer
      ref={ref}
      className="bg-gradient-to-r from-primary to-blue-500 text-gray-300"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            className="space-y-6"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <div className="h-8 w-8">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-8 w-8"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">Eigisy</span>
            </div>
            <p className="text-sm">
              Empowering businesses with data-driven marketing solutions that
              deliver measurable results and sustainable growth.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-white">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Content Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Influencer Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Marketing Analytics
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Marketing Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Industry Reports
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Marketing Tools
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            className="space-y-6"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <p className="text-sm">
              Subscribe to our newsletter for the latest marketing insights.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>contact@Eigisy.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+44 20 7946 0958</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>London, United Kingdom</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">© 2024 Eigisy. All rights reserved.</div>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
