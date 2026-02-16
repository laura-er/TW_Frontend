import React from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const WhyChoose: React.FC = () => {
  const features: Feature[] = [
    {
      icon: "🌍",
      title: "Explore a Diverse Library",
      description: "Browse books from different genres, authors and categories all in one place. Discover new stories, classics and hidden gems that match your interests.",
    },
    {
      icon: "🤝",
      title: "Connect With a Reading Community",
      description: "Share books, explore recommendations and interact with readers who love the same stories. Read & Swap makes book discovery more social and engaging.",
    },
    {
      icon: "⚡",
      title: "Simple & Modern Experience",
      description: "Enjoy a clean interface, fast navigation and curated content designed to help you find books effortlessly and spend more time reading.",
    }
  ];

  return (
    <section className="bg-primary/5 dark:bg-surfaceDark py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col gap-12 md:gap-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-2xl">⭐</span>
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                Why Choose Read & Swap
              </span>
            </div>
            <h2 className="font-bold text-navyGray dark:text-white">
              Why Choose Read & Swap?
            </h2>
            <p className="text-lg text-navyGray/70 dark:text-white/70">
              A smarter way to discover, exchange and enjoy books.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white dark:bg-baseInk shadow-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{feature.icon}</span>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-navyGray dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-navyGray/70 dark:text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;