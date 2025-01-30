import { TestimonialsContent } from './types'
import { TestimonialCard } from './testimonial-card'

export default function Testimonials1({ content }: { content?: TestimonialsContent }) {
  const heading = content?.data?.heading || "What Our Clients Say"
  const blurb = content?.data?.blurb || "Don't just take our word for it - hear from our satisfied customers"
  const testimonials = content?.collections?.testimonial || [];
  return (
    <section id="testimonials1" className="py-24 bg-gray-50">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {blurb}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}