import React from 'react'
import { cn } from '../utils'

export default function Navigation() {
  return (
    <nav className={cn('fixed top-0 left-0 right-0 z-50 backdrop-blur', 'bg-dark/50 py-4')}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-light text-xl font-bold">Modern Bar</div>
        <ul className="flex space-x-6">
          <li><a href="#menu" className="text-light hover:text-primary transition-colors">Menu</a></li>
          <li><a href="#gallery" className="text-light hover:text-primary transition-colors">Gallery</a></li>
          <li><a href="#booking" className="text-light hover:text-primary transition-colors">Booking</a></li>
        </ul>
      </div>
    </nav>
  )
}