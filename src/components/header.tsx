import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-8 w-8"
            >
              <path d="M2 12h4l2-2v8l-2-2H2z" fill="violet" />
              <path d="M14 12h4l2-2v8l-2-2h-4z" fill="blue" />
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="none"
                fill="currentColor"
                opacity="0.1"
              />
            </svg>
          </div>
          <span className="text-xl font-bold">Eigisy</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium hover:text-gray-600">
                  Our Service
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="bg-white shadow-md rounded-md p-2">
                    <li>
                      <Link
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                        href="/seo"
                      >
                        SEO
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                        href="/influencer"
                      >
                        Influencer Marketing
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link
            className="text-sm font-medium hover:text-gray-600"
            href="/about-us"
          >
            About Us
          </Link>
          <Link className="text-sm font-medium hover:text-gray-600" href="#">
            Blog
          </Link>
          <Link
            className="text-sm font-medium hover:text-gray-600"
            href="/contact-us"
          >
            Contact
          </Link>
          <Link
            className="text-sm font-medium hover:text-gray-600"
            href="/#faq"
          >
            FAQ
          </Link>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col items-start gap-4 p-4">
                <Link
                  className="text-sm font-medium hover:text-gray-600"
                  href="/about-us"
                >
                  About Us
                </Link>
                <Link className="text-sm font-medium hover:text-gray-600" href="#">
                  Blog
                </Link>
                <Link
                  className="text-sm font-medium hover:text-gray-600"
                  href="/contact-us"
                >
                  Contact
                </Link>
                <Link
                  className="text-sm font-medium hover:text-gray-600"
                  href="/#faq"
                >
                  FAQ
                </Link>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-sm font-medium hover:text-gray-600">
                        Our Service
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="bg-white shadow-md rounded-md p-2">
                          <li>
                            <Link
                              className="block px-4 py-2 text-sm hover:bg-gray-100"
                              href="/seo"
                            >
                              SEO
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="block px-4 py-2 text-sm hover:bg-gray-100"
                              href="/influencer"
                            >
                              Influencer Marketing
                            </Link>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
