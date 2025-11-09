import { AlertTriangle, Package, TrendingDown } from "lucide-react";

const items = [
  { sku: "SKU-001", location: "Mumbai", stock: 120, forecast7: 150, lead: 5, rop: 80, roq: 200, risk: "Medium" },
  { sku: "SKU-002", location: "Dubai", stock: 40, forecast7: 110, lead: 7, rop: 90, roq: 180, risk: "High" },
  { sku: "SKU-003", location: "Riyadh", stock: 220, forecast7: 140, lead: 10, rop: 120, roq: 100, risk: "Low" },
];

export default function InventoryHealth() {
  return (
    <section className="bg-white rounded-2xl border border-gray-100 p-4 md:p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Package className="h-5 w-5 text-emerald-600" />
        <h2 className="text-lg font-semibold text-gray-800">Inventory Health</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="py-2 pr-4">SKU</th>
              <th className="py-2 pr-4">Location</th>
              <th className="py-2 pr-4">Stock</th>
              <th className="py-2 pr-4">Forecast 7d</th>
              <th className="py-2 pr-4">Lead (d)</th>
              <th className="py-2 pr-4">Reorder Point</th>
              <th className="py-2 pr-4">Reorder Qty</th>
              <th className="py-2 pr-4">Risk</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it) => (
              <tr key={`${it.sku}-${it.location}`} className="border-b last:border-0">
                <td className="py-2 pr-4 font-medium text-gray-800">{it.sku}</td>
                <td className="py-2 pr-4">{it.location}</td>
                <td className="py-2 pr-4">{it.stock}</td>
                <td className="py-2 pr-4">{it.forecast7}</td>
                <td className="py-2 pr-4">{it.lead}</td>
                <td className="py-2 pr-4">{it.rop}</td>
                <td className="py-2 pr-4">{it.roq}</td>
                <td className="py-2 pr-4">
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${
                    it.risk === 'High' ? 'bg-red-50 text-red-700' : it.risk === 'Medium' ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700'
                  }`}>
                    {it.risk === 'High' && <AlertTriangle className="h-3.5 w-3.5" />} {it.risk}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
