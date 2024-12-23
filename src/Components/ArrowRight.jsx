import React from 'react'
import { ArrowRight, ChevronRight, Leaf, Apple, Heart, Users, Star } from 'lucide-react';

const ArrowRight = ({ className = "w-6 h-6" }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M14 5l7 7m0 0l-7 7m7-7H3" 
    />
  </svg>
);

export default ArrowRight;