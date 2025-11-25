import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  author: string;
  role: string;
  content: string;
  image: string;
}