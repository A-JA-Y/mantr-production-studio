"'use client'"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Image from "next/image"

const images = [
  "'/placeholder.svg?height=400&width=600'",
  "'/placeholder.svg?height=400&width=600'",
  "'/placeholder.svg?height=400&width=600'",
  "'/placeholder.svg?height=400&width=600'",
  "'/placeholder.svg?height=400&width=600'",
  "'/placeholder.svg?height=400&width=600'",
]

export default function Gallery() {
  const galleryRef = useRef(null)

  useEffect(() => {
    const gallery = galleryRef.current
    gsap.from(gallery.children, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: gallery,
        start: "'top 80%'",
      },
    })
  }, [])

  return (
    <section id="gallery" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Our Gallery</h2>
        <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <Image src={src} alt={`Gallery image ${index + 1}`} width={600} height={400} className="w-full h-auto object-cover transition duration-300 transform hover:scale-110" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

