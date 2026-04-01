const Footer = () => {
  return (
    <footer className="w-full bg-[#0f1623]">
      <div className="max-w-7xl mx-auto px-4 pt-30 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          <div className="col-span-2 space-y-4">
            <img src="/images/logo-footer.svg" alt="" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <nav className="space-y-4">
            <h6 className="text-white font-semibold text-base">Product</h6>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Integrations
                </a>
              </li>
            </ul>
          </nav>

          <nav className="space-y-4">
            <h6 className="text-white font-semibold text-base">Company</h6>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Press
                </a>
              </li>
            </ul>
          </nav>

          <nav className="space-y-4">
            <h6 className="text-white font-semibold text-base">Resources</h6>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <nav className="space-y-4">
            <h6 className="text-white font-semibold text-base">Social Links</h6>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white hover:bg-white/90 flex items-center justify-center"
              >
                <svg className="w-5 h-5">
                  <use xlinkHref="/icons.svg#icon-instagram"></use>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white hover:bg-white/90 flex items-center justify-center"
              >
                <svg className="w-5 h-5">
                  <use xlinkHref="/icons.svg#icon-facebook"></use>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white hover:bg-white/90 flex items-center justify-center"
              >
                <svg className="w-5 h-5">
                  <use xlinkHref="/icons.svg#icon-twitter-x"></use>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-7.5 text-sm flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Digitools. All rights reserved.
        </p>
        <nav className="flex items-center gap-6">
          <a href="#" className="text-gray-500 hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-500 hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="text-gray-500 hover:text-white">
            Cookies
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
