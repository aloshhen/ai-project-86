import React, { useState } from 'react'
import { cn } from '../utils'

export default function Menu() {
  const [activeTab, setActiveTab] = useState('cocktails')

  return (
    <section id="menu" className={cn('py-20 bg-dark text-light')}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Menu</h2>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('cocktails')}
            className={cn(
              'px-6 py-3 rounded-lg',
              activeTab === 'cocktails' ? 'bg-primary' : 'bg-secondary'
            )}
          >
            Cocktails
          </button>
          <button
            onClick={() => setActiveTab('food')}
            className={cn(
              'px-6 py-3 rounded-lg',
              activeTab === 'food' ? 'bg-primary' : 'bg-secondary'
            )}
          >
            Food
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Menu items would go here */}
        </div>
      </div>
    </section>
  )
}