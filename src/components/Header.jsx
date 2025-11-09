import { Globe, Settings, Truck } from "lucide-react";
import { useState } from "react";

// Header with brand, region toggle (India/GCC), and simple language switch
export default function Header() {
  const [region, setRegion] = useState("India");
  const [lang, setLang] = useState("EN");

  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 grid place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 text-white">
            <Truck className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-800">AI Logistics Optimization</h1>
            <p className="text-xs text-gray-500 -mt-0.5">Plan. Predict. Deliver.</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
            {(["India", "GCC"]).map((opt) => (
              <button
                key={opt}
                onClick={() => setRegion(opt)}
                className={`${region === opt ? "bg-white shadow text-gray-800" : "text-gray-500"} px-3 py-1.5 rounded-md text-sm transition`}
              >
                {opt}
              </button>
            ))}
          </div>

          <button
            onClick={() => setLang((l) => (l === "EN" ? "AR" : "EN"))}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" /> {lang}
          </button>

          <button className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50">
            <Settings className="h-4 w-4" />
            Settings
          </button>
        </div>
      </div>
    </header>
  );
}
