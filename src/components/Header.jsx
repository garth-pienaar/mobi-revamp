import { Link, useLocation } from 'react-router-dom';
const BASE_URL = import.meta.env.BASE_URL
const Header = () => {
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'HOME', icon: '🏠', path: '/' },
    { id: 'sports', label: 'SPORTS', icon: '⚽', path: 'https://interbet.co.za/Prematch/Sportorts' },
    { id: 'live', label: 'LIVE BETTING', icon: '🔴', path: 'https://interbet.co.za/LiveBetting' },
    { id: 'casino', label: 'CASINO', icon: '🎰', path: 'https://interbet.co.za/VegasGames' },
    { id: 'promotions', label: 'PROMOTIONS', icon: '🎁', path: 'https://interbet.co.za/Promotions' },
  ];

  return (
    <header className="bg-steam-dark border-b border-steam-blue/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
          
        
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <input
              type="text"
              placeholder="Search sports, events..."
              className="w-full bg-steam-darker border border-steam-blue/30 rounded-lg px-4 py-2 text-steam-gray-light placeholder-steam-gray-medium focus:outline-none focus:border-steam-blue transition-colors"
            />
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-3">
            <button className="hidden md:block steam-button text-sm">
              LOGIN
            </button>
            <button className="steam-button text-sm bg-green-600 hover:bg-green-500">
              SIGN UP
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-1 overflow-x-auto pb-2">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`px-4 py-2 rounded-t-lg text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                location.pathname === item.path
                  ? 'bg-steam-gradient text-white'
                  : 'text-steam-gray-medium hover:text-steam-blue-light hover:bg-steam-darker'
              }`}
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
