import { Star } from 'lucide-react'
import Image from 'next/image'
import { widthForImage, heightForImage } from '@/lib/builtjs-utils'
import { Testimonial } from './types'

interface FeaturedTestimonialProps {
  testimonial: Testimonial;
}

export function FeaturedTestimonial({ testimonial }: FeaturedTestimonialProps) {
  return (
    <div id="testimonialsFeatured" className="bg-gray-800 p-12 rounded-3xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Image
            className="h-20 w-20 rounded-full object-cover border-4 border-gray-700"
            src={testimonial.image.url}
            alt={testimonial.author}
            width={widthForImage(testimonial.image)}
            height={heightForImage(testimonial.image)}
          />
          <div className="ml-6">
            <h4 className="text-2xl font-semibold">{testimonial.author}</h4>
            <p className="text-gray-400">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          {[...Array(testimonial.rating || 5)].map((_, i) => (
            <Star
              key={i}
              className="w-6 h-6 text-yellow-400 fill-current"
            />
          ))}
        </div>
      </div>
      <p className="text-xl leading-relaxed text-gray-300">{testimonial.content}</p>
    </div>
  )
}