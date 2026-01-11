import React from 'react'
import { cn } from '../utils'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function Gallery() {
  return (
    <section id="gallery" className={cn('py-20 bg-dark text-light')}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Gallery</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <SwiperSlide key={item}>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={`/images/gallery/${item}.jpg`}
                  alt="Gallery item"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}