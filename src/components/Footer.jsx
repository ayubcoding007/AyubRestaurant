export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand / About */}
        <div className="md:col-span-1">
          <h3 className="text-white text-lg font-semibold mb-3">
            AyubRestaurant
          </h3>
          <p className="text-gray-400">
            AyubRestaurant is a simple and user-friendly food ordering app designed for a smooth dining experience. 
            It allows customers to explore the menu, place orders easily, and enjoy delicious meals with convenience and quality service.
          </p>
        </div>

        {/* Product */}
        <div>
          <p className="text-white font-semibold mb-3">Product</p>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/" className="hover:text-white">Support</a></li>
            <li><a href="/" className="hover:text-white">Pricing</a></li>
            <li><a href="/" className="hover:text-white">Affiliate</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <p className="text-white font-semibold mb-3">Resources</p>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Company</a></li>
            <li><a href="/" className="hover:text-white">Blogs</a></li>
            <li><a href="/" className="hover:text-white">Community</a></li>
            <li>
              <a href="/" className="hover:text-white flex items-center gap-2">
                Careers
                <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded">
                  Hiring
                </span>
              </a>
            </li>
            <li><a href="/" className="hover:text-white">About</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <p className="text-white font-semibold mb-3">Legal</p>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Privacy</a></li>
            <li><a href="/" className="hover:text-white">Terms</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-4 text-gray-500">
        © 2026 AyubRestaurant. All rights reserved.
      </div>
    </footer>
  );
}