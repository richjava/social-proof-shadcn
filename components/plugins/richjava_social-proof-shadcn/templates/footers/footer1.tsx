interface FooterProps {
  content?: {
    global?: {
      name?: string;
    };
  };
}

export default function Footer({ content }: FooterProps) {
  const siteName = content?.global?.name || 'About Us'

  return (
    <footer id="footer1" className="bg-gray-100">
      <div className="container px-4 py-8 mx-auto">
        <div className="text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} {siteName}.</p>
        </div>
      </div>
    </footer>
  )
}