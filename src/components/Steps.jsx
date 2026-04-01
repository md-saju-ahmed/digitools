import userIcon from "/images/user.svg";
import packageIcon from "/images/package.svg";
import rocketIcon from "/images/rocket.svg";

const Steps = () => {
  return (
    <>
      <div className="bg-[#F9FAFC] py-16 sm:py-20 lg:py-30 px-4">
        <div className="flex flex-col justify-center items-center gap-8 sm:gap-10 text-center max-w-7xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Get Started in 3 Steps
            </h2>
            <p className="text-sm sm:text-base max-w-md mx-auto">
              Start using premium digital tools in minutes, not hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7.5 w-full">
            {/* Card 1 */}
            <div className="card bg-white border-[#F2F2F2] border-2 rounded-2xl relative">
              <div className="card-body items-center gap-4 px-6 py-14 sm:py-16 lg:py-20">
                <div className="badge bg-linear text-white absolute top-4 right-4 sm:top-5 sm:right-5 h-9 w-9 sm:h-10 sm:w-10 rounded-full text-xs sm:text-sm">
                  01
                </div>
                <div className="flex justify-center items-center w-20 h-20 sm:w-25 sm:h-25 bg-[#ede4fb] rounded-full">
                  <img
                    src={userIcon}
                    alt="Create Account"
                    className="w-9 h-9 sm:w-11 sm:h-11"
                  />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">
                  Create Account
                </h2>
                <p className="text-sm sm:text-base">
                  Sign up for free in seconds. No credit card required to get
                  started.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-white border-[#F2F2F2] border-2 rounded-2xl relative">
              <div className="card-body items-center gap-4 px-6 py-14 sm:py-16 lg:py-20">
                <div className="badge bg-linear text-white absolute top-4 right-4 sm:top-5 sm:right-5 h-9 w-9 sm:h-10 sm:w-10 rounded-full text-xs sm:text-sm">
                  02
                </div>
                <div className="flex justify-center items-center w-20 h-20 sm:w-25 sm:h-25 bg-[#ede4fb] rounded-full">
                  <img
                    src={packageIcon}
                    alt="Choose Products"
                    className="w-9 h-9 sm:w-11 sm:h-11"
                  />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">
                  Choose Products
                </h2>
                <p className="text-sm sm:text-base">
                  Browse our catalog and select the tools that fit your needs.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card bg-white border-[#F2F2F2] border-2 rounded-2xl relative md:col-span-2 lg:col-span-1">
              <div className="card-body items-center gap-4 px-6 py-14 sm:py-16 lg:py-20">
                <div className="badge bg-linear text-white absolute top-4 right-4 sm:top-5 sm:right-5 h-9 w-9 sm:h-10 sm:w-10 rounded-full text-xs sm:text-sm">
                  03
                </div>
                <div className="flex justify-center items-center w-20 h-20 sm:w-25 sm:h-25 bg-[#ede4fb] rounded-full">
                  <img
                    src={rocketIcon}
                    alt="Start Creating"
                    className="w-9 h-9 sm:w-11 sm:h-11"
                  />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold">
                  Start Creating
                </h2>
                <p className="text-sm sm:text-base">
                  Download and start using your premium tools immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
