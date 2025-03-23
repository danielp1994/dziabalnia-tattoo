// app/aftercare/page.tsx
export default function Aftercare() {
  return (
    <section className="max-w-6xl mx-auto p-8 text-gray-200">
      <h2 className="text-3xl font-bold mb-4">Jak dbać o tatuaż?</h2>
      <ol className="list-decimal list-inside space-y-2">
        <li>Przez pierwsze kilka dni utrzymuj tatuaż w czystości i suchości.</li>
        <li>Używaj maści polecanej przez tatuażystę, np. Bepanthen.</li>
        <li>Unikaj intensywnych treningów, basenów, saun przez co najmniej 2 tygodnie.</li>
        <li>Nie drap i nie zrywaj strupków – pozwól im odpaść naturalnie.</li>
      </ol>
      <p className="mt-4">
        Przestrzeganie zaleceń przyspiesza gojenie i zapewnia piękny efekt końcowy.
      </p>
    </section>
  );
}
