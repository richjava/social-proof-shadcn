import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { widthForImage, heightForImage } from '@/lib/builtjs-utils';

interface HeaderProps {
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
  collections?: {
    primaryMenuItem?: Array<{
      label: string;
      url: string;
    }>;
  };
}

export default function Header1({ content }: { content?: HeaderProps }) {
  const router = useRouter();
  const title = content?.global?.name || 'Social Proof';
  const logo = content?.global?.logo;
  const menuItems = content?.collections?.primaryMenuItem || [

  ];

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
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className={`text-gray-600 hover:text-gray-900 ${router.pathname === item.url ? 'font-bold text-gray-900' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <button className="p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
