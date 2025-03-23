// app/portfolio/page.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  // Przykładowa tablica zdjęć
  const photos = [
    { src: "/images/photo1.jpg", alt: "Tatuaż 1" },
    { src: "/images/photo2.jpg", alt: "Tatuaż 2" },
    { src: "/images/photo3.jpg", alt: "Tatuaż 3" },
    { src: "/images/photo4.jpg", alt: "Tatuaż 4" },
    { src: "/images/photo5.jpg", alt: "Tatuaż 5" },
    { src: "/images/photo6.jpg", alt: "Tatuaż 6" },
    { src: "/images/photo7.jpg", alt: "Tatuaż 7" },
    { src: "/images/photo8.jpg", alt: "Tatuaż 8" },
    { src: "/images/photo9.jpg", alt: "Tatuaż 9" },
    { src: "/images/photo10.jpg", alt: "Tatuaż 10" },
    { src: "/images/photo11.jpg", alt: "Tatuaż 11" },
    { src: "/images/photo12.jpg", alt: "Tatuaż 12" },
    { src: "/images/photo13.jpg", alt: "Tatuaż 13" },
    { src: "/images/photo14.jpg", alt: "Tatuaż 14" },
    { src: "/images/photo15.jpg", alt: "Tatuaż 15" },
    { src: "/images/photo16.jpg", alt: "Tatuaż 16" },
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
