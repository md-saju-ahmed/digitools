const Banner = () => {
  return (
    <>
      <div className="hero bg-base-100 py-10 lg:py-15 border-t-2 border-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-15 w-full max-w-7xl mx-auto px-4">
          {/* Image */}
          <img
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto rounded-lg object-cover"
            src="/images/banner.png"
            alt="Banner"
          />

          {/* Content */}
          <div className="w-full min-w-0 lg:max-w-2xl space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="badge badge-soft badge-primary rounded-full font-medium px-4 py-2 h-auto inline-flex">
                <img src="/images/pulse.svg" alt="" />
                New: AI-Powered Tools Available
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight lg:leading-[1.15]">
                Supercharge Your <br className="hidden sm:block" /> Digital
                Workflow
              </h1>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                Access premium AI tools, design assets, templates, and
                productivity software—all in one place. Start creating faster
                today.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
              <a
                className="btn btn-primary bg-linear border-0 rounded-full h-12 lg:h-13 w-full sm:w-auto"
                href="#"
              >
                Explore Products
              </a>
              <a
                className="btn btn-outline btn-primary rounded-full h-12 lg:h-13 w-full sm:w-auto"
                href="#"
              >
                <svg className="w-5 h-5">
                  <use xlinkHref="/icons.svg#icon-play"></use>
                </svg>
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
