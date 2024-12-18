import { Star } from 'lucide-react'
import Image from 'next/image'
import { widthForImage, heightForImage } from '@/lib/builtjs-utils'
import { Testimonial } from './types'

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating || 5)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
          />
        ))}
      </div>
      <p className="text-gray-600 mb-6">{testimonial.content}</p>
      <div className="flex items-center">
        <Image
          className="h-12 w-12 rounded-full object-cover"
          src={testimonial.image.url}
          alt={testimonial.author}
          width={widthForImage(testimonial.image)}
          height={heightForImage(testimonial.image)}
        />
        <div className="ml-4">
          <h4 className="text-lg font-semibold">{testimonial.author}</h4>
          <p className="text-gray-600">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  )
}