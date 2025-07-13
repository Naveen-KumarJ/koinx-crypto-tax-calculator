import React from "react";
import TaxCalculator from "./components/TaxCalculator/TaxCalculator";
import GetStarted from "./components/GetStarted/GetStarted";

const App = () => {
  return (
    <div className="bg-slate-50 min-h-screen p-4 md:p-6">
      <main className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-2.5">
        <TaxCalculator />
        <GetStarted />
      </main>
    </div>
  );
};

export default App;
