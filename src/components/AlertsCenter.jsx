import { Bell, Clock } from "lucide-react";

const alerts = [
  { id: 1, type: "Delay", msg: "Truck MH-14 on Route #8 is running 32 min late.", time: "5m ago", tone: "warn" },
  { id: 2, type: "Low Stock", msg: "SKU-002 at Dubai DC below reorder point.", time: "18m ago", tone: "danger" },
  { id: 3, type: "Spike", msg: "Demand surge detected for SKU-009 in Riyadh.", time: "1h ago", tone: "info" },
];

export default function AlertsCenter() {
  const badge = (tone) =>
    tone === "danger"
      ? "bg-red-50 text-red-700"
      : tone === "warn"
      ? "bg-amber-50 text-amber-700"
      : "bg-blue-50 text-blue-700";

  return (
    <section className="bg-white rounded-2xl border border-gray-100 p-4 md:p-6 shadow-sm h-full">
      <div className="flex items-center gap-2 mb-4">
        <Bell className="h-5 w-5 text-rose-600" />
        <h2 className="text-lg font-semibold text-gray-800">Alerts Center</h2>
      </div>

      <ul className="space-y-3">
        {alerts.map((a) => (
          <li key={a.id} className="flex items-start gap-3 p-3 rounded-lg border border-gray-100 bg-gray-50">
            <span className={`inline-flex h-6 shrink-0 w-16 items-center justify-center rounded-full text-xs font-medium ${badge(a.tone)}`}>
              {a.type}
            </span>
            <div className="flex-1">
              <p className="text-sm text-gray-800">{a.msg}</p>
              <div className="text-xs text-gray-500 mt-1 inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {a.time}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
