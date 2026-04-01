const Pricing = () => {
  return (
    <>
      <div id="pricing" className="bg-base-100 py-16 sm:py-20 lg:py-30 px-4">
        <div className="flex flex-col justify-center items-center gap-8 sm:gap-10 text-center max-w-7xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Simple, Transparent Pricing
            </h2>
            <p className="text-sm sm:text-base max-w-md mx-auto">
              Choose the plan that fits your needs. Upgrade or downgrade
              anytime.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-7.5 w-full items-start">
            {/* Card 1 */}
            <div className="card w-full bg-[#F9FAFC] border-[#F2F2F2] border-2 rounded-2xl">
              <div className="card-body text-left">
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-bold">Starter</h2>
                  <p className="text-sm sm:text-base">
                    Perfect for getting started
                  </p>
                </div>
                <p className="text-lg sm:text-xl opacity-80 mt-4">
                  <span className="text-3xl sm:text-4xl font-bold">$0</span>
                  /Month
                </p>
                <ul className="mt-6 flex flex-col gap-2 text-sm font-medium">
                  <li className="flex gap-2 opacity-80">
                    <svg className="w-5 h-5 text-[#30B868]">
                      <use xlinkHref="/icons.svg#icon-check"></use>
                    </svg>
                    <span>High-resolution image generation</span>
                  </li>
                  <li className="flex gap-2 opacity-80">
                    <svg className="w-5 h-5 text-[#30B868]">
                      <use xlinkHref="/icons.svg#icon-check"></use>
                    </svg>
                    <span>Customizable style templates</span>
                  </li>
                  <li className="flex gap-2 opacity-80">
                    <svg className="w-5 h-5 text-[#30B868]">
                      <use xlinkHref="/icons.svg#icon-check"></use>
                    </svg>
                    <span>Batch processing capabilities</span>
                  </li>
                  <li className="flex gap-2 opacity-80">
                    <svg className="w-5 h-5 text-[#30B868]">
                      <use xlinkHref="/icons.svg#icon-check"></use>
                    </svg>
                    <span>AI-driven image enhancements</span>
                  </li>
                  <li className="flex gap-2 opacity-80">
                    <svg className="w-5 h-5 text-[#30B868]">
                      <use xlinkHref="/icons.svg#icon-check"></use>
                    </svg>
                    <span>Seamless cloud integration</span>
                  </li>
                  <li className="flex gap-2 opacity-80">
                    <svg className="w-5 h-5 text-[#30B868]">
                      <use xlinkHref="/icons.svg#icon-check"></use>
                    </svg>
                    <span>Real-time collaboration tools</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="btn btn-primary bg-linear rounded-full btn-block h-12 sm:h-13">
                    Get Started Free
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card w-full bg-linear border-[#F2F2F2] border-2 rounded-2xl">
              <div className="card-body text-left text-white">
                <span className="badge badge-soft badge-warning font-medium rounded-full px-3 py-1.5 h-8 absolute -top-5 left-1/2 -translate-x-1/2">
                  Most Popular
                </span>
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-bold">Pro</h2>
                  <p className="text-sm sm:text-base">Best for professionals</p>
                </div>
                <p className="text-lg sm:text-xl opacity-80 mt-4">
                  <span className="text-3xl sm:text-4xl font-bold">$29</span>
                  /Month
                </p>
                <ul className="mt-6 flex flex-col gap-2 text-sm font-medium">
                  <li className="flex gap-2 opacity-80">
                    <svg className="w-5 h-5">
                      <use xlinkHref="/icons.svg#icon-check"></use>
                    </svg>
                    <span>High-resolution image generation</span>
                  </li>
                  <li className="flex gap-2 opacity-80">
                    <svg className="w-5 h-5">
                      <use xlinkHref="/icons.svg#icon-check"></use>
                    </svg>
                    <span>Customizable style templates</span>
                  </li>
                  <li className="flex gap-2 opacity-80">
                    <svg className="w-5 h-5">
                      <use xlinkHref="/icons.svg#icon-check"></use>
                    </svg>
                    <span>Batch processing capabilities</span>
                  </li>
                  <li className="flex gap-2 opacity-80">
                    <svg className="w-5 h-5">
                      <use xlinkHref="/icons.svg#icon-check"></use>
                    </svg>
                    <span>AI-driven image enhancements</span>
                  </li>
                  <li className="flex gap-2 opacity-80">
                    <svg className="w-5 h-5">
                      <use xlinkHref="/icons.svg#icon-check"></use>
                    </svg>
                    <span>Seamless cloud integration</span>
                  </li>
                  <li className="flex gap-2 opacity-80">
                    <svg className="w-5 h-5">
                      <use xlinkHref="/icons.svg#icon-check"></use>
                    </svg>
                    <span>Real-time collaboration tools</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="btn btn-primary btn-outline bg-white hover:text-primary rounded-full btn-block h-12 sm:h-13">
                    Start Pro Trial
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card w-full bg-[#F9FAFC] border-[#F2F2F2] border-2 rounded-2xl">
              <div className="card-body text-left">
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-bold">Enterprise</h2>
                  <p className="text-sm sm:text-base">
                    For teams and businesses
                  </p>
                </div>
                <p className="text-lg sm:text-xl opacity-80 mt-4">
                  <span className="text-3xl sm:text-4xl font-bold">$99</span>
                  /Month
                </p>
                <ul className="mt-6 flex flex-col gap-2 text-sm font-medium">
                  <li className="flex gap-2 opacity-80">
                    <svg className="w-5 h-5 text-[#30B868]">
                      <use xlinkHref="/icons.svg#icon-check"></use>
                    </svg>
                    <span>High-resolution image generation</span>
                  </li>
                  <li className="flex gap-2 opacity-80">
                    <svg className="w-5 h-5 text-[#30B868]">
                      <use xlinkHref="/icons.svg#icon-check"></use>
                    </svg>
                    <span>Customizable style templates</span>
                  </li>
                  <li className="flex gap-2 opacity-80">
                    <svg className="w-5 h-5 text-[#30B868]">
                      <use xlinkHref="/icons.svg#icon-check"></use>
                    </svg>
                    <span>Batch processing capabilities</span>
                  </li>
                  <li className="flex gap-2 opacity-80">
                    <svg className="w-5 h-5 text-[#30B868]">
                      <use xlinkHref="/icons.svg#icon-check"></use>
                    </svg>
                    <span>AI-driven image enhancements</span>
                  </li>
                  <li className="flex gap-2 opacity-80">
                    <svg className="w-5 h-5 text-[#30B868]">
                      <use xlinkHref="/icons.svg#icon-check"></use>
                    </svg>
                    <span>Seamless cloud integration</span>
                  </li>
                  <li className="flex gap-2 opacity-80">
                    <svg className="w-5 h-5 text-[#30B868]">
                      <use xlinkHref="/icons.svg#icon-check"></use>
                    </svg>
                    <span>Real-time collaboration tools</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <button className="btn btn-primary bg-linear rounded-full btn-block h-12 sm:h-13">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
