// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Tło */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-black opacity-90" />

      {/* Główna treść */}
      <div className="relative z-10 max-w-5xl mx-auto p-8 text-center flex flex-col gap-6 items-center">
        
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Witaj w mrocznym świecie tatuaży
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Zapraszamy do zapoznania się z naszym portfolio. Tu spełniamy najbardziej odważne wizje – od delikatnych wzorów aż po ciemne, mroczne motywy.
        </p>
        <div>
          <a
            href="/portfolio"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md transition-all"
          >
            Zobacz portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
