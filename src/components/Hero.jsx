const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-steam-blue/20 via-steam-dark to-steam-darker"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Featured Event */}
          <div className="lg:col-span-2 steam-card p-6 cursor-pointer group">
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded">
                LIVE NOW
              </span>
              <span className="text-steam-gray-medium text-sm">PREMIER LEAGUE</span>
            </div>

            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">
                Manchester United vs Liverpool
              </h2>
              <p className="text-steam-blue-light text-sm">Old Trafford • 15:00 GMT</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-steam-darker rounded-lg p-4 text-center hover:bg-steam-gradient transition-all cursor-pointer">
                <div className="text-xs text-steam-gray-medium mb-2">HOME</div>
                <div className="text-2xl font-bold text-white mb-1">2.15</div>
                <div className="text-xs text-steam-blue-light">Man Utd</div>
              </div>
              <div className="bg-steam-darker rounded-lg p-4 text-center hover:bg-steam-gradient transition-all cursor-pointer">
                <div className="text-xs text-steam-gray-medium mb-2">DRAW</div>
                <div className="text-2xl font-bold text-white mb-1">3.40</div>
                <div className="text-xs text-steam-blue-light">Draw</div>
              </div>
              <div className="bg-steam-darker rounded-lg p-4 text-center hover:bg-steam-gradient transition-all cursor-pointer">
                <div className="text-xs text-steam-gray-medium mb-2">AWAY</div>
                <div className="text-2xl font-bold text-white mb-1">3.20</div>
                <div className="text-xs text-steam-blue-light">Liverpool</div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm text-steam-gray-medium">
                <span className="text-steam-blue-light font-semibold">78</span> more betting markets
              </div>
              <button className="text-steam-blue-light hover:text-white transition-colors text-sm font-semibold">
                VIEW ALL →
              </button>
            </div>
          </div>

          {/* Promotional Card */}
          <div className="relative overflow-hidden rounded-lg border border-yellow-500/50 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 p-6 cursor-pointer group hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex justify-center mb-3">
                <img
                  src="https://interbet.co.za/Content/images/icons/png/savvy-saver-100.png"
                  alt="Welcome Bonus"
                  className="h-16 w-16"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Welcome Bonus
              </h3>
              <p className="text-steam-gray-light mb-4">
                Get up to <span className="text-yellow-400 font-bold text-xl">R1,000</span> on your first deposit
              </p>
              <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all">
                CLAIM NOW
              </button>
              <p className="text-xs text-steam-gray-medium mt-3 text-center">
                New customers only. T&Cs apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
