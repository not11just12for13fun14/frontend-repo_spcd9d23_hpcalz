import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Area, AreaChart } from 'recharts';
import { BarChart3 } from 'lucide-react';

const sample = Array.from({ length: 14 }).map((_, i) => {
  const base = 120 + Math.round(20 * Math.sin(i / 2));
  return {
    day: `D${i + 1}`,
    forecast: base,
    actual: base + (i % 3 === 0 ? -10 : 8),
    lower: base - 15,
    upper: base + 15,
  };
});

export default function DemandInsights() {
  return (
    <section className="bg-white rounded-2xl border border-gray-100 p-4 md:p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 className="h-5 w-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-800">Demand Insights</h2>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={sample} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="conf" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#93c5fd" stopOpacity={0.35}/>
                <stop offset="95%" stopColor="#93c5fd" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="day" tick={{ fill: '#64748b' }} />
            <YAxis tick={{ fill: '#64748b' }} />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="upper" stroke="#93c5fd" fill="url(#conf)" dot={false} name="Upper CI" />
            <Area type="monotone" dataKey="lower" stroke="#93c5fd" fill="url(#conf)" dot={false} name="Lower CI" />
            <Line type="monotone" dataKey="forecast" stroke="#2563eb" strokeWidth={2} dot={false} name="Forecast" />
            <Line type="monotone" dataKey="actual" stroke="#10b981" strokeWidth={2} dot={false} name="Actual" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
