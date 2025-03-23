// app/about/page.tsx
import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto p-8 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-shrink-0">
        <Image
          src="/images/artist.jpg"
          alt="Dziabaka Marek"
          width={300}
          height={400}
          className="object-cover rounded-lg"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4">O artyście</h2>
        <p className="text-gray-300 mb-4">
          Nazywam się Marek „Dziabaka” i zajmuję się tatuażem od wielu lat. Moją pasją są ciemne, mroczne motywy, ale chętnie podejmuję się także innych stylów, dopasowując projekt do charakteru klienta. 
        </p>
        <p className="text-gray-300">
          Pracuję w studiu Dziabalnia Tattoo, gdzie dbamy o sterylność, przyjazną atmosferę i profesjonalne podejście do każdego zlecenia.
        </p>
      </div>
    </section>
  );
}
