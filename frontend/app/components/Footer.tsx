import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white flex justify-end p-4 fixed bottom-0 w-full font-jetbrains-mono">
      <Link href="/about" className="text-white hover:text-secondary">
        About
      </Link>
    </footer>
  );
};

export default Footer;
