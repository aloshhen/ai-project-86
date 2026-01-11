import React from 'react'
import { cn } from '../utils'

export default function Hero() {
  return (
    <section className={cn('relative h-screen flex items-center justify-center', 'bg-dark text-light')}>
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover opacity-50">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold mb-4">Welcome to Modern Bar</h1>
        <p className="text-xl mb-8">Where every night is unforgettable</p>
        <div className="space-x-4">
          <button className="bg-primary px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors">Explore Menu</button>
          <button className="bg-secondary px-6 py-3 rounded-lg hover:bg-secondary-hover transition-colors">Book a Table</button>
        </div>
      </div>
    </section>
  )
}