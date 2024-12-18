import { Github, Twitter, Linkedin } from 'lucide-react'
import Image from 'next/image'
import { widthForImage, heightForImage } from '@/lib/builtjs-utils'

interface FooterContent {
  data?: {
    description?: string;
  };
  global?: {
    name?: string;
    logo?: {
      url: string;
      width: number;
      height: number;
    };
  };
}

export default function Footer1({ content }: { content?: FooterContent }) {
  const title = content?.global?.name || 'Social Proof'
  const description = content?.data?.description || 'Showcase your customer testimonials with our beautiful and customizable components.'
  const logo = content?.global?.logo

  return (
    <footer className="text-gray-300 bg-gray-900">
      <div className="container px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4 space-x-2">
              {logo && (
                <Image
                  src={logo.url}
                  alt={title}
                  width={widthForImage(logo)}
                  height={heightForImage(logo)}
                  className="w-auto h-8"
                />
              )}
              <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
            <p className="text-gray-400">
              {description}
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="transition-colors hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#testimonials" className="transition-colors hover:text-white">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="transition-colors hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="transition-colors hover:text-white">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="transition-colors hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-12 text-center border-t border-gray-800">
          <p>© {new Date().getFullYear()} {title}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}