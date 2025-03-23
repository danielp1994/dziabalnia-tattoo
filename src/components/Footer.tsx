// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-4 mt-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Dziabalnia Tattoo - Wszelkie prawa zastrzeżone
        </div>
        <div className="flex space-x-4">
          {/* Przykładowe linki do social mediów */}
          <Link href="https://www.facebook.com/DziabalniaTattoo/" target="_blank">
            <Image
              src="/images/logoFB.png"
              alt="Facebook"
              width={40}
              height={40}
            />
          </Link>
          <Link href="https://www.instagram.com/dziabalniatattoo/" target="_blank">
            <Image
              src="/images/logoIG.png"
              alt="Instagram"
              width={40}
              height={40}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
