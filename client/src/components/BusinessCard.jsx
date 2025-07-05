export default function BusinessCard({ data, onRegenerate }) {
  return (
    <div className="bg-white shadow-md rounded p-4 space-y-2">
      <h2 className="text-xl font-bold">{data.name} – {data.location}</h2>
      <p>{data.rating} / 5</p>
      <p>{data.reviews} Reviews</p>
      <p className="italic text-gray-700">"{data.headline}"</p>
      <button
        onClick={onRegenerate}
        className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700"
      >
        Regenerate SEO Headline
      </button>
    </div>
  );
}