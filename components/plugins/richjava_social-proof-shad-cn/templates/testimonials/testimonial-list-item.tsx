import { Star, Quote } from 'lucide-react'
import Image from 'next/image'
import { widthForImage, heightForImage } from '@/lib/builtjs-utils'
import { Testimonial } from './types'

interface TestimonialListItemProps {
  testimonial: Testimonial;
}

export function TestimonialListItem({ testimonial }: TestimonialListItemProps) {
  return (
    <div className="bg-gray-50 p-8 rounded-2xl relative">
      <Quote className="absolute top-4 right-4 h-8 w-8 text-gray-200" />
      <div className="flex items-center mb-6">
        <Image
          className="h-16 w-16 rounded-full object-cover"
          src={testimonial.image.url}
          alt={testimonial.author}
          width={widthForImage(testimonial.image)}
          height={heightForImage(testimonial.image)}
        />
        <div className="ml-4">
          <h4 className="text-xl font-semibold">{testimonial.author}</h4>
          <p className="text-gray-600">
            {testimonial.role} at {testimonial.company}
          </p>
          <div className="flex items-center mt-1">
            {[...Array(testimonial.rating || 5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-yellow-400 fill-current"
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-lg leading-relaxed">{testimonial.content}</p>
    </div>
  )
}