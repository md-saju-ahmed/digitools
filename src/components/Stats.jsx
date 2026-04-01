const Stats = () => {
  return (
    <>
      <div className="bg-linear rounded-none text-white py-10 lg:py-15 w-full">
        <div className="stats stats-vertical sm:stats-horizontal w-full bg-transparent shadow-none">
          {/* Stat 1 */}
          <div className="stat place-items-center gap-2 lg:gap-3 sm:border-e-4 border-b-4 sm:border-b-0 py-8 sm:py-10">
            <div className="stat-value text-4xl sm:text-5xl lg:text-6xl font-extrabold">
              50K+
            </div>
            <div className="stat-desc text-lg sm:text-xl lg:text-2xl text-base-300 font-medium">
              Active Users
            </div>
          </div>

          {/* Stat 2 */}
          <div className="stat place-items-center gap-2 lg:gap-3 sm:border-e-4 border-b-4 sm:border-b-0 py-8 sm:py-10">
            <div className="stat-value text-4xl sm:text-5xl lg:text-6xl font-extrabold">
              200+
            </div>
            <div className="stat-desc text-lg sm:text-xl lg:text-2xl text-base-300 font-medium">
              Premium Tools
            </div>
          </div>

          {/* Stat 3 */}
          <div className="stat place-items-center gap-2 lg:gap-3 py-8 sm:py-10">
            <div className="stat-value text-4xl sm:text-5xl lg:text-6xl font-extrabold">
              4.9
            </div>
            <div className="stat-desc text-lg sm:text-xl lg:text-2xl text-base-300 font-medium">
              Rating
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Stats;
