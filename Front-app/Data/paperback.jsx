// paperback.js - Static data for Paperback Formatting

import React from "react";
import { FileText, Palette, Layout, Settings } from "lucide-react";

export const features = [
  {
    icon: <Layout className="w-8 h-8 text-orange-500" />,
    title: "Professional Layout Design",
    description:
      "Clean, readable layouts with proper margins, spacing, and typography that meets industry standards.",
  },
  {
    icon: <Palette className="w-8 h-8 text-orange-500" />,
    title: "Custom Interior Design",
    description:
      "Tailored chapter headers, page numbers, and decorative elements that match your book's genre and style.",
  },
  {
    icon: <FileText className="w-8 h-8 text-orange-500" />,
    title: "Print-Ready Files",
    description:
      "High-resolution PDF files optimized for print-on-demand platforms like Amazon KDP, IngramSpark, and more.",
  },
  {
    icon: <Settings className="w-8 h-8 text-orange-500" />,
    title: "Multiple Format Options",
    description:
      "Support for various trim sizes from 5x8 to 8.5x11 inches, with both standard and premium formatting options.",
  },
];

export const sampleBooks = [
  {
    title: "Fiction Novel Sample",
    genre: "Literary Fiction",
    pages: "250 pages",
    trimSize: "5.25 x 8 inches",
    downloadUrl: "#",
  },
  {
    title: "Non-Fiction Guide Sample",
    genre: "Business/Self-Help",
    pages: "180 pages",
    trimSize: "6 x 9 inches",
    downloadUrl: "#",
  },
  {
    title: "Poetry Collection Sample",
    genre: "Poetry",
    pages: "120 pages",
    trimSize: "5.5 x 8.5 inches",
    downloadUrl: "#",
  },
];

export const faqs = [
  {
    question: "What file formats do you accept for manuscripts?",
    answer:
      "We accept Microsoft Word (.docx), Google Docs, and plain text files. For best results, please ensure your manuscript is clean with minimal formatting.",
  },
  {
    question: "How long does the formatting process take?",
    answer:
      "Standard formatting takes 5-7 business days. Rush orders can be completed in 2-3 business days for an additional fee.",
  },
  {
    question: "Do you provide revisions?",
    answer:
      "Yes! We include up to 3 rounds of revisions in our standard package to ensure you're completely satisfied with the final result.",
  },
  {
    question: "Can you format books with images and illustrations?",
    answer:
      "Absolutely! We specialize in formatting books with images, charts, tables, and illustrations while maintaining print quality standards.",
  },
  {
    question: "What trim sizes do you support?",
    answer:
      "We support all standard paperback sizes including 5x8, 5.25x8, 5.5x8.5, 6x9, 7x10, and 8.5x11 inches.",
  },
];
