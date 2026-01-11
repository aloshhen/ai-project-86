import React from 'react'
import { cn } from '../utils'

export default function Footer() {
  return (
    <footer className={cn('py-10 bg-dark text-light')}>
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Modern Bar. All rights reserved.</p>
      </div>
    </footer>
  )
}