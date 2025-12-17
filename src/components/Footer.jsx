const Footer = () => {
  return (
    <footer className="bg-steam-darker border-t border-steam-blue/10 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About Interbet</h3>
            <p className="text-steam-gray-medium text-sm mb-4">
              South Africa's premier online sports betting platform. Licensed and regulated for your safety.
            </p>
            <div className="flex space-x-3">
              <div className="w-10 h-10 bg-steam-dark rounded-lg flex items-center justify-center hover:bg-steam-gradient cursor-pointer transition-all">
                <span>📘</span>
              </div>
              <div className="w-10 h-10 bg-steam-dark rounded-lg flex items-center justify-center hover:bg-steam-gradient cursor-pointer transition-all">
                <span>🐦</span>
              </div>
              <div className="w-10 h-10 bg-steam-dark rounded-lg flex items-center justify-center hover:bg-steam-gradient cursor-pointer transition-all">
                <span>📷</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Sports Betting', 'Live Betting', 'Casino', 'Horse Racing', 'Results'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-steam-gray-medium hover:text-steam-blue-light transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {['Help Center', 'Betting Rules', 'Responsible Gaming', 'Contact Us', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-steam-gray-medium hover:text-steam-blue-light transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Payment Methods</h3>
            <div className="grid grid-cols-3 gap-2">
              {['💳', '🏦', '📱', '💰', '🔐', '✅'].map((icon, index) => (
                <div
                  key={index}
                  className="bg-steam-dark rounded-lg p-3 flex items-center justify-center text-2xl hover:bg-steam-gradient transition-all cursor-pointer"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-steam-blue/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-steam-gray-medium text-sm text-center md:text-left">
              <p className="mb-1">© 2025 Interbet International (Pty) Ltd. All rights reserved.</p>
              <p className="text-xs">Licensed by the Western Cape Gambling and Racing Board</p>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-steam-gray-medium hover:text-steam-blue-light text-xs transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-steam-gray-medium hover:text-steam-blue-light text-xs transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-steam-gray-medium hover:text-steam-blue-light text-xs transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Responsible Gaming */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center space-x-3 bg-steam-dark px-6 py-3 rounded-lg">
              <span className="text-2xl">🔞</span>
              <div className="text-left">
                <p className="text-white text-sm font-semibold">18+ Only</p>
                <p className="text-steam-gray-medium text-xs">Gamble Responsibly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
