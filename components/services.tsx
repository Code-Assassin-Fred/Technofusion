import OverviewContainer from "./overview-container";

export default function Services() {
  return (
    <section className="w-full flex justify-center mt-10 relative">
      <div className="w-full bg-[#181715] rounded-t-3xl py-10 px-6 md:px-12 relative overflow-hidden">
        {/* === Section Title === */}
        <h1 className="text-5xl md:text-6xl font-light text-center">
          <span className="text-white font-normal">It's Simple:</span>{" "}
          <span className="text-orange-500 font-normal">Building</span>{" "}
          <span className="text-wheat">for</span>
        </h1>

        <h2 className="text-5xl md:text-7xl text-center mt-2">
          <span className="text-white font-bold">Unlimited </span>
          <span className="text-orange-500">Possibilities</span>
        </h2>

        {/* === Overview Section === */}
        <OverviewContainer />

        {/* === Converging Service Tags Section === */}
        <div className="relative mt-24">
          <div className="service-tags-container">
            
            {/* LEFT COLUMN - 3 Tags */}
            <div className="tags-column-left">
              <div className="service-tag tag-left-1">
                <span className="tag-icon">💻</span>
                <span>Software & Systems</span>
              </div>
              <div className="service-tag tag-left-2">
                <span className="tag-icon">🤖</span>
                <span>AI & Machine Learning</span>
              </div>
              <div className="service-tag tag-left-3">
                <span className="tag-icon">📊</span>
                <span>Data Science</span>
              </div>
            </div>

            {/* CENTER COLUMN - Goal Text */}
            <div className="goal-text-center">
              <h1>
                Our goal is clear — build great things with great people. If that's
                something we can do together, I'd love to chat.
              </h1>
            </div>

            {/* RIGHT COLUMN - 2 Tags */}
            <div className="tags-column-right">
              <div className="service-tag tag-right-1">
                <span className="tag-icon">⚙️</span>
                <span>Automation Systems</span>
              </div>
              <div className="service-tag tag-right-2">
                <span className="tag-icon">🌐</span>
                <span>AI Integration</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}