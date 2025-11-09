import Header from "./components/Header";
import PlanMyDay from "./components/PlanMyDay";
import DemandInsights from "./components/DemandInsights";
import InventoryHealth from "./components/InventoryHealth";
import AlertsCenter from "./components/AlertsCenter";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Top grid: Plan My Day + Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PlanMyDay />
          </div>
          <div className="lg:col-span-1">
            <AlertsCenter />
          </div>
        </div>

        {/* Bottom grid: Demand Insights + Inventory Health */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DemandInsights />
          <InventoryHealth />
        </div>
      </main>

      <footer className="py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} AI Logistics Optimization — Demo Dashboard
      </footer>
    </div>
  );
}

export default App;
