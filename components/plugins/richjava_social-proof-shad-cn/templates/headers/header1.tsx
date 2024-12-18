import { Menu } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { widthForImage, heightForImage } from '@/lib/builtjs-utils'

interface HeaderContent {
  data?: {
    title?: string;
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

export default function Header1({ content }: { content?: HeaderContent }) {
  const title = content?.data?.title || content?.global?.name || 'Social Proof'
  const logo = content?.global?.logo

  return (
    <header className="border-b">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {logo && (
                <Image
                  src={logo.url}
                  alt={title}
                  width={widthForImage(logo)}
                  height={heightForImage(logo)}
                  className="w-auto h-8"
                />
              )}
              <span className="text-xl font-bold">{title}</span>
            </Link>
          </div>
          <nav className="items-center hidden space-x-8 md:flex">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
          </nav>
          <div className="md:hidden">
            <button className="p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}