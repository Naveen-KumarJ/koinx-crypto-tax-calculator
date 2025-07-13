import React, { useState } from "react";

const TaxCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [expenses, setExpenses] = useState("");
  const [investmentType, setInvestmentType] = useState("Short Term");
  const [incomeRange, setIncomeRange] = useState("45001-120000");
  const [netCapitalGain, setNetCapitalGain] = useState(0);
  const [taxPayable, setTaxPayable] = useState(0);
  const [country, setCountry] = useState("Austraila");

  const handleCalculate = () => {
    const purchase = parseFloat(purchasePrice) || 0;
    const sale = parseFloat(salePrice) || 0;
    const exp = parseFloat(expenses) || 0;

    const gainOrLoss = sale - purchase - exp;
    const gain = gainOrLoss > 0 ? gainOrLoss : 0;

    setNetCapitalGain(gain);

    let tax = 0;
    if (gain > 0) {
      const excess = gain;
      tax = 5902 + 0.325 * excess;
    }

    setTaxPayable(tax.toFixed(2));
  };

  return (
    <div className="bg-white mx-auto p-8 rounded-md font-sans flex-3">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Free Crypto Tax Calculator - {country}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col">
          Financial Year
          <select className="mt-1 border rounded px-3 py-2">
            <option selected>FY 2024-2025</option>
            <option>FY 2023-2024</option>
            <option>FY 2022-2023</option>
          </select>
        </label>

        <label className="flex flex-col">
          Country
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="mt-1 border rounded px-3 py-2"
          >
            <option selected>Australia</option>
            <option>UK</option>
          </select>
        </label>
      </div>

      <hr className="my-6 border-t border-neutral-200" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col">
          Enter purchase price of Crypto
          <input
            type="number"
            className="mt-1 border rounded px-3 py-2"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
          />
        </label>

        <label className="flex flex-col">
          Enter sale price of Crypto
          <input
            type="number"
            className="mt-1 border rounded px-3 py-2"
            value={salePrice}
            onChange={(e) => setSalePrice(e.target.value)}
          />
        </label>

        <label className="flex flex-col">
          Enter your Expenses
          <input
            type="number"
            className="mt-1 border rounded px-3 py-2"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
          />
        </label>

        <div>
          <span className="block mb-1 font-medium">Investment Type</span>
          <div className="flex gap-4">
            <button
              className={`px-4 py-2 rounded text-white ${
                investmentType === "Short Term"
                  ? "bg-blue-600"
                  : "bg-gray-300 text-black"
              }`}
              onClick={() => setInvestmentType("Short Term")}
            >
              Short Term
            </button>
            <button
              className={`px-4 py-2 rounded text-white ${
                investmentType === "Long Term"
                  ? "bg-blue-600"
                  : "bg-gray-300 text-black"
              }`}
              onClick={() => setInvestmentType("Long Term")}
            >
              Long Term
            </button>
          </div>
        </div>

        <label className="flex flex-col">
          Select your Annual Income
          <select
            className="mt-1 border rounded px-3 py-2"
            value={incomeRange}
            onChange={(e) => setIncomeRange(e.target.value)}
          >
            <option value="0-45000">$0 - $45,000</option>
            <option value="45001-120000">$45,001 - $120,000</option>
            <option value="120001+">$120,001+</option>
          </select>
        </label>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={handleCalculate}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 cursor-pointer"
        >
          Calculate Tax
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <div className="bg-green-100 border border-green-300 rounded p-4 text-center">
          <p className="font-semibold text-gray-800">
            Net Capital gains tax amount:
          </p>
          <p className="text-2xl font-bold text-green-700">${netCapitalGain}</p>
        </div>

        <div className="bg-blue-100 border border-blue-300 rounded p-4 text-center">
          <p className="font-semibold text-gray-800">
            The tax you need to pay:
          </p>
          <p className="text-2xl font-bold text-blue-700">${taxPayable}</p>
        </div>
      </div>
    </div>
  );
};

export default TaxCalculator;
