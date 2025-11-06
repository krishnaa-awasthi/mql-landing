"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  const footerSections = {
    Company: [
      { name: "About Us", href: "https://mqlexperts.com" },
      { name: "Contact", href: "https://mqlexperts.com" },
    ],
    Solutions: [
      { name: "Smart Corporate Database", href: "https://mqlexperts.com" },
      { name: "Customer Outreach for Events & Leads", href: "https://mqlexperts.com" },
      { name: "Appointment Setting", href: "https://mqlexperts.com" },
      { name: "Surveys & Feedback Campaigns", href: "https://mqlexperts.com" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "https://mqlexperts.com" },
      { name: "Terms of Service", href: "https://mqlexperts.com" },
      { name: "Cookie Policy", href: "https://mqlexperts.com" },
      { name: "Security", href: "https://mqlexperts.com" },
    ],
  };

  const socialLinks = [
    { Icon: Linkedin, href: "https://mqlexperts.com", label: "LinkedIn" },
    { Icon: Twitter, href: "https://mqlexperts.com", label: "Twitter" },
    { Icon: Facebook, href: "https://mqlexperts.com", label: "Facebook" },
    { Icon: Mail, href: "https://mqlexperts.com", label: "Email" },
  ];


  return (
    <footer
      id="contact"
      className="bg-[#0b0d12] text-gray-300 py-16 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Top Section: Logo + Links --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.png"
                alt="MQL Experts Logo"
                width={56}
                height={56}
                className="object-contain"
              />
              <span className="text-2xl font-semibold text-white">MQL Experts</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              Empowering B2B teams with intelligent data that drives real results.
            </p>

            <div className="flex space-x-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Navigation Columns */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white text-lg mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* --- Contact + Map Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-1" />
                <span>
                  TS-1418, Galaxy Blue Sapphire Plaza, <br />
                  95-5, Greater Noida W Rd, Haibatpur, <br />
                  Sector 4, Greater Noida, Uttar Pradesh – 201309, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <a
                  href="tel:+919044899929"
                  className="hover:text-blue-400 transition-colors"
                >
                  +91 90448 99929
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <a
                  href="mailto:contact@mqlexperts.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  contact@mqlexperts.com
                </a>
              </li>
            </ul>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.750918444208!2d77.43286367495584!3d28.607248285229385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce557777b7b45%3A0x69870f8fa7e1f92e!2sGalaxy%20Blue%20Sapphire%20Plaza!5e0!3m2!1sen!2sin!4v1761545563070!5m2!1sen!2sin"
              width="100%"
              height="230"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>

        {/* --- Footer Bottom --- */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2025 MQL Experts. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-gray-300 transition">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-gray-300 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
