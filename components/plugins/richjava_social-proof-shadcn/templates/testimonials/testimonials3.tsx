import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TestimonialsContent } from './types'
import { FeaturedTestimonial } from './featured-testimonial'

export default function Testimonials3({ content }: { content?: TestimonialsContent }) {
  const heading = content?.data?.heading || "Featured Reviews"
  const blurb = content?.data?.blurb || "See why industry leaders choose us"
  const testimonials = content?.collections?.testimonial || [];
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length)
  }

  const previous = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials3" className="py-24 text-white bg-gray-900">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            {blurb}
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={previous}
            className="absolute left-0 p-2 transition-colors -translate-x-12 -translate-y-1/2 bg-gray-800 rounded-full top-1/2 hover:bg-gray-700"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 p-2 transition-colors translate-x-12 -translate-y-1/2 bg-gray-800 rounded-full top-1/2 hover:bg-gray-700"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-shrink-0 w-full">
                  <FeaturedTestimonial testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}