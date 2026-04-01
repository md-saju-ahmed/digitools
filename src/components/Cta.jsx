const Cta = () => {
  return (
    <>
      <div className="bg-linear py-16 sm:py-20 lg:py-30 px-4">
        <div className="flex flex-col justify-center items-center gap-8 sm:gap-10 text-center text-white max-w-7xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-base-300 text-sm sm:text-base max-w-lg mx-auto">
              Join thousands of professionals who are already using Digitools to
              work smarter. <br />
              Start your free trial today.
            </p>
          </div>
          <div className="space-y-4 w-full">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn btn-outline btn-primary bg-white border-white hover:text-neutral rounded-full w-full sm:w-40 h-12 sm:h-13">
                Explore Products
              </button>
              <button className="btn btn-outline rounded-full w-full sm:w-40 h-12 sm:h-13">
                View Pricing
              </button>
            </div>
            <p className="text-base-300 text-xs sm:text-sm">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cta;
