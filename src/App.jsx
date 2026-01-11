import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import BookingForm from './components/BookingForm'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Menu />
      <Gallery />
      <BookingForm />
      <Reviews />
      <Footer />
    </>
  )
}