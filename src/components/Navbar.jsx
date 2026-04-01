const Navbar = ({ carts = [] }) => {
  return (
    <>
      <div className="navbar bg-base-100 max-w-7xl mx-auto px-4 py-3 sm:py-5">
        {/* Left */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex="0"
              role="button"
              className="btn btn-ghost btn-sm lg:hidden mr-1"
            >
              <svg className="w-5 h-5">
                <use xlinkHref="/icons.svg#icon-menu"></use>
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 p-2 w-52 shadow"
            >
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <a href="/">
            <img
              src="/images/logo.svg"
              alt="DigiTools"
              className="h-7 sm:h-10 w-auto"
            />
          </a>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end gap-1 sm:gap-2 lg:gap-3">
          <button id="cart" className="btn btn-link text-neutral px-2">
            <div className="indicator">
              <svg className="w-5 h-5">
                <use xlinkHref="/icons.svg#icon-shopping-cart"></use>
              </svg>
              {carts.length > 0 && (
                <span className="badge badge-xs badge-secondary rounded-full indicator-item">
                  {carts.length}
                </span>
              )}
            </div>
          </button>
          <a href="#" className="text-base font-semibold px-2">
            Login
          </a>
          <a
            href="#"
            className="btn btn-primary bg-linear border-0 rounded-full h-9 sm:h-11 hidden sm:flex"
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
