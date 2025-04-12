// app/portfolio/page.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  // Przykładowa tablica zdjęć
  const photos = [
    { src: "/images/photo1.jpeg", alt: "Tatuaż 1" },
    { src: "/images/photo2.jpeg", alt: "Tatuaż 2" },
    { src: "/images/photo3.jpeg", alt: "Tatuaż 3" },
    { src: "/images/photo4.jpeg", alt: "Tatuaż 4" },
    { src: "/images/photo5.jpeg", alt: "Tatuaż 5" },
    { src: "/images/photo6.jpeg", alt: "Tatuaż 6" },
    { src: "/images/photo7.jpeg", alt: "Tatuaż 7" },
    { src: "/images/photo8.jpeg", alt: "Tatuaż 8" },
    { src: "/images/photo9.jpeg", alt: "Tatuaż 9" },
    { src: "/images/photo10.jpeg", alt: "Tatuaż 10" },
    { src: "/images/photo11.jpeg", alt: "Tatuaż 11" },
    { src: "/images/photo12.jpeg", alt: "Tatuaż 12" },
    { src: "/images/photo13.jpeg", alt: "Tatuaż 13" },
    { src: "/images/photo14.jpeg", alt: "Tatuaż 14" },
    { src: "/images/photo15.jpeg", alt: "Tatuaż 15" },
    { src: "/images/photo16.jpeg", alt: "Tatuaż 16" },
    { src: "/images/photo17.jpeg", alt: "Tatuaż 17" },
    { src: "/images/photo18.jpeg", alt: "Tatuaż 18" },
    { src: "/images/photo19.jpeg", alt: "Tatuaż 19" },
    { src: "/images/photo20.jpeg", alt: "Tatuaż 20" },
    { src: "/images/photo21.jpeg", alt: "Tatuaż 21" },
    { src: "/images/photo22.jpeg", alt: "Tatuaż 22" },
    { src: "/images/photo23.jpeg", alt: "Tatuaż 23" },
    { src: "/images/photo24.jpeg", alt: "Tatuaż 24" },
    { src: "/images/photo25.jpeg", alt: "Tatuaż 25" },
    { src: "/images/photo26.jpeg", alt: "Tatuaż 26" },
    { src: "/images/photo27.jpeg", alt: "Tatuaż 27" },
    { src: "/images/photo28.jpeg", alt: "Tatuaż 28" },
    { src: "/images/photo29.jpeg", alt: "Tatuaż 29" },
    { src: "/images/photo30.jpeg", alt: "Tatuaż 30" },
    { src: "/images/photo31.jpeg", alt: "Tatuaż 31" },
    { src: "/images/photo32.jpeg", alt: "Tatuaż 32" },
    { src: "/images/photo33.jpeg", alt: "Tatuaż 33" },
    { src: "/images/photo34.jpeg", alt: "Tatuaż 34" },
    { src: "/images/photo35.jpeg", alt: "Tatuaż 35" },
    { src: "/images/photo36.jpeg", alt: "Tatuaż 36" },
    { src: "/images/photo37.jpeg", alt: "Tatuaż 37" },
    { src: "/images/photo38.jpeg", alt: "Tatuaż 38" },
    { src: "/images/photo39.jpeg", alt: "Tatuaż 39" },
    { src: "/images/photo40.jpeg", alt: "Tatuaż 40" },
    { src: "/images/photo41.jpeg", alt: "Tatuaż 41" },
    { src: "/images/photo42.jpeg", alt: "Tatuaż 42" },
    { src: "/images/photo43.jpeg", alt: "Tatuaż 43" },
    { src: "/images/photo44.jpeg", alt: "Tatuaż 44" },
    { src: "/images/photo45.jpeg", alt: "Tatuaż 45" },
    { src: "/images/photo46.jpeg", alt: "Tatuaż 46" },
    { src: "/images/photo47.jpeg", alt: "Tatuaż 47" },
    { src: "/images/photo48.jpeg", alt: "Tatuaż 48" },
    { src: "/images/photo49.jpeg", alt: "Tatuaż 49" },
    { src: "/images/photo50.jpeg", alt: "Tatuaż 50" },
    { src: "/images/photo51.jpeg", alt: "Tatuaż 51" },
    { src: "/images/photo52.jpeg", alt: "Tatuaż 52" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto p-8"
    >
      <h2 className="text-3xl mb-6 font-bold text-center">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
        {photos.map((photo, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded shadow overflow-hidden flex justify-center items-center"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={400}
              height={500} // Lepsze proporcje dla pionowych zdjęć
              className="object-cover object-center w-full h-auto hover:opacity-80 transition-all aspect-[4/5]"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
