// app/blog/page.tsx
export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Nowe wzory geometryczne",
      date: "2025-03-01",
      excerpt: "Sprawdźcie najnowsze wzory inspirowane geometrią...",
    },
    {
      id: 2,
      title: "Promocja na tatuaże realistyczne",
      date: "2025-02-15",
      excerpt: "Na najbliższe dwa tygodnie oferujemy...",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto p-8">
      <h2 className="text-3xl mb-6 font-bold">Blog</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-4 bg-gray-800 rounded-md shadow hover:bg-gray-700 transition-all"
          >
            <h3 className="text-xl font-semibold mb-1">{post.title}</h3>
            <p className="text-xs text-gray-400 mb-2">{post.date}</p>
            <p className="text-gray-200">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
