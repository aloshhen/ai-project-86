import React from 'react'
import { cn } from '../utils'

export default function Reviews() {
  return (
    <section id="reviews" className={cn('py-20 bg-dark text-light')}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">What Our Guests Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Reviews would go here */}
        </div>
      </div>
    </section>
  )
}