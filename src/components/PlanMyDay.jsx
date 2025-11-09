import { MapPin, Route, Play } from "lucide-react";
import { useMemo, useState } from "react";

// Lightweight map sketch using SVG (no external map libs) to visualize routes
export default function PlanMyDay() {
  const [points, setPoints] = useState([
    { id: 1, name: "Warehouse", lat: 19.076, lng: 72.8777 },
    { id: 2, name: "Client A", lat: 19.2183, lng: 72.9781 },
    { id: 3, name: "Client B", lat: 19.043, lng: 73.022 },
    { id: 4, name: "Client C", lat: 19.164, lng: 72.849 },
  ]);
  const [sequence, setSequence] = useState([1, 2, 3, 4]);

  // Simple mock optimizer to demonstrate interaction
  const optimize = () => {
    const ids = [...sequence];
    ids.splice(1, 0, ids.splice(ids.length - 1, 1)[0]);
    setSequence(ids);
  };

  const orderedPoints = useMemo(() => {
    const map = new Map(points.map((p) => [p.id, p]));
    return sequence.map((id) => map.get(id)).filter(Boolean);
  }, [points, sequence]);

  // Project lat/lng to SVG coordinates (very rough bounding-box scaling for demo)
  const bounds = useMemo(() => {
    const lats = points.map((p) => p.lat);
    const lngs = points.map((p) => p.lng);
    return {
      minLat: Math.min(...lats),
      maxLat: Math.max(...lats),
      minLng: Math.min(...lngs),
      maxLng: Math.max(...lngs),
    };
  }, [points]);

  const width = 800;
  const height = 260;
  const pad = 20;

  const project = (p) => {
    const x = ((p.lng - bounds.minLng) / (bounds.maxLng - bounds.minLng || 1)) * (width - 2 * pad) + pad;
    const y = ((bounds.maxLat - p.lat) / (bounds.maxLat - bounds.minLat || 1)) * (height - 2 * pad) + pad;
    return { x, y };
  };

  const polyline = orderedPoints.map((p) => project(p)).map(({ x, y }) => `${x},${y}`).join(" ");

  return (
    <section className="bg-white rounded-2xl border border-gray-100 p-4 md:p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Route className="h-5 w-5 text-indigo-600" />
          <h2 className="text-lg font-semibold text-gray-800">Plan My Day</h2>
        </div>
        <button onClick={optimize} className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
          <Play className="h-4 w-4" /> Optimize
        </button>
      </div>

      <div className="h-64 w-full overflow-hidden rounded-lg bg-[url('https://tile.openstreetmap.org/10/0/0.png')] bg-cover bg-center">
        <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          {/* Route line */}
          <polyline points={polyline} fill="none" stroke="#4f46e5" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" opacity="0.85" />

          {/* Stops */}
          {orderedPoints.map((p, idx) => {
            const { x, y } = project(p);
            const color = idx === 0 ? "#059669" : "#1f2937";
            return (
              <g key={p.id}>
                <circle cx={x} cy={y} r={7} fill="#ffffff" stroke={color} strokeWidth="3" />
                <text x={x} y={y - 12} textAnchor="middle" className="fill-gray-700" fontSize="12" fontWeight="600">
                  {idx + 1}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
        {orderedPoints.map((p, idx) => (
          <div key={p.id} className="flex items-center gap-2 text-sm bg-gray-50 border border-gray-100 rounded-md px-2 py-1.5">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white text-xs">{idx + 1}</span>
            <MapPin className="h-4 w-4 text-gray-500" />
            <span className="truncate">{p.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
