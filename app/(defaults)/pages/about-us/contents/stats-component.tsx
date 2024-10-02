import React from "react";

interface StatItem {
  count: number;
  label: string;
}

const stats: StatItem[] = [
  { count: 19, label: "Projects Completed" },
  { count: 38, label: "Total Clients" },
  { count: 15, label: "Our Partners" },
  { count: 2, label: "Total Awards" },
];

const StatsSection = () => {
  return (
    <section className="relative banner bg-cover bg-no-repeat shadow-insetcustom py-20 text-white">
      <div className="absolute inset-0 bg-blue-900 opacity-75"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-wrap justify-around text-center">
        {stats.map((stat, index) => (
          <div key={index} className="w-1/2 md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-5xl font-bold">{stat.count}</h3>
            <p className="mt-2 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
