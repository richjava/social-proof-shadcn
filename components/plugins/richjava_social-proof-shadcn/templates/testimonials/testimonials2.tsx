import { TestimonialsContent } from './types'
import { TestimonialListItem } from './testimonial-list-item'

export default function Testimonials2({ content }: { content?: TestimonialsContent }) {
  const heading = content?.data?.heading || "Customer Success Stories"
  const blurb = content?.data?.blurb || "Read what our customers have achieved with our solution"
  const testimonials = content?.collections?.testimonial || [];

  return (
    <section id="testimonials2" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {blurb}
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-8">
          {testimonials.map((testimonial) => (
            <TestimonialListItem key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}