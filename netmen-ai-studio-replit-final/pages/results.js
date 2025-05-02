
export default function Results() {
  const images = ['/images/sample1.png', '/images/sample2.png'];

  return (
    <main className="min-h-screen p-8 bg-[#FAFAFA] text-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Your AI-Generated Amazon Listing Images</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <img src={src} alt={`Generated ${i}`} className="w-full h-auto rounded mb-2" />
            <div className="text-sm">
              <a href={src} download className="text-blue-600 hover:underline">Download</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
