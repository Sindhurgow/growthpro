import { useState } from "react";
import BusinessForm from "./components/BusinessForm";
import BusinessCard from "./components/BusinessCard";

export default function App() {
  const [businessData, setBusinessData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async ({ name, location }) => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/business-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, location })
    });
    const data = await res.json();
    setBusinessData({ ...data, name, location });
    setLoading(false);
  };

  const handleRegenerate = async () => {
    if (!businessData) return;
    const res = await fetch(
      `http://localhost:5000/regenerate-headline?name=${businessData.name}&location=${businessData.location}`
    );
    const { headline } = await res.json();
    setBusinessData({ ...businessData, headline });
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">📈 GrowthProAI Dashboard</h1>
      <BusinessForm onSubmit={handleFormSubmit} />
      {loading && <p>Loading...</p>}
      {businessData && (
        <BusinessCard data={businessData} onRegenerate={handleRegenerate} />
      )}
    </div>
  );
}
