import { useEffect, useRef } from 'react'

interface Stat {
  value: string;
  label: string;
  description?: string;
}

interface StatsContent {
  data?: {
    heading?: string;
    blurb?: string;
  };
  collections?: {
    stat?: Stat[];
  };
}

export default function Stats1({ content }: { content?: StatsContent }) {
  const heading = content?.data?.heading || "By the Numbers"
  const blurb = content?.data?.blurb || "Our impact in statistics"
  const stats = content?.collections?.stat || [
    { value: "98%", label: "Customer Satisfaction" },
    { value: "24/7", label: "Support Available" },
    { value: "500+", label: "Happy Clients" },
    { value: "4.9/5", label: "Average Rating" }
  ]
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats1" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {blurb}
          </p>
        </div>
        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 opacity-0 translate-y-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
              {stat.description && (
                <div className="mt-2 text-sm text-gray-500">{stat.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}