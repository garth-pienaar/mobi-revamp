const BASE_URL = import.meta.env.BASE_URL

const Promotions = () => {
  const promos = [
    {
      id: 1,
      title: 'Aviator',
      description: 'Take flight with multipliers up to 1000x your bet',
      image: 'https://interbet.co.za/Content/images/icons-v2/aviator.png',
      gradient: 'from-blue-600/20 to-cyan-600/20',
      borderColor: 'border-blue-500/50',
      buttonGradient: 'from-blue-500 to-cyan-500',
      glowColor: 'rgba(59,130,246,0.4)',
    },
    {
      id: 2,
      title: 'Soccer 6',
      description: 'Predict 6 match results and win the jackpot',
      image: `${BASE_URL}soccer6_epl10.png`,
      gradient: 'from-green-600/20 to-emerald-600/20',
      borderColor: 'border-green-500/50',
      buttonGradient: 'from-green-500 to-emerald-500',
      glowColor: 'rgba(34,197,94,0.4)',
    },
    {
      id: 3,
      title: 'Savvy Saver',
      description: 'Earn points on every bet and unlock rewards',
      image: 'https://interbet.co.za/Content/images/icons/png/savvy-saver-100.png',
      gradient: 'from-purple-600/20 to-pink-600/20',
      borderColor: 'border-purple-500/50',
      buttonGradient: 'from-purple-500 to-pink-500',
      glowColor: 'rgba(168,85,247,0.4)',
    },
    {
      id: 4,
      title: 'Tote Betting',
      description: 'Pool betting on horse racing with big dividends',
      image: 'https://interbet.co.za/Content/images/icons-v2/tote.png',
      gradient: 'from-orange-600/20 to-red-600/20',
      borderColor: 'border-orange-500/50',
      buttonGradient: 'from-orange-500 to-red-500',
      glowColor: 'rgba(249,115,22,0.4)',
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Promotions & Offers</h2>
        <p className="text-steam-gray-medium">
          Boost your betting experience with our exclusive offers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {promos.map((promo) => (
          <div
            key={promo.id}
            className={`relative overflow-hidden rounded-lg border ${promo.borderColor} bg-gradient-to-br ${promo.gradient} p-6 cursor-pointer group transition-all duration-300 hover:scale-105`}
            style={{
              boxShadow: `0 0 0 rgba(0,0,0,0)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 30px ${promo.glowColor}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 0 rgba(0,0,0,0)';
            }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="h-20 w-20 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{promo.title}</h3>
              <p className="text-steam-gray-light text-sm mb-4">
                {promo.description}
              </p>
              <button
                className={`w-full bg-gradient-to-r ${promo.buttonGradient} text-white font-bold py-2 rounded-lg transition-all hover:shadow-lg`}
              >
                PLAY NOW
              </button>
              <p className="text-xs text-steam-gray-medium mt-3 text-center">
                T&Cs apply
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info Bar */}
      <div className="mt-8 steam-card p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl mb-2">🔒</div>
            <h4 className="text-white font-semibold mb-1">Secure Betting</h4>
            <p className="text-steam-gray-medium text-sm">
              Your data is protected with bank-level encryption
            </p>
          </div>
          <div>
            <div className="text-3xl mb-2">⚡</div>
            <h4 className="text-white font-semibold mb-1">Instant Payouts</h4>
            <p className="text-steam-gray-medium text-sm">
              Fast and reliable withdrawals to your account
            </p>
          </div>
          <div>
            <div className="text-3xl mb-2">🎮</div>
            <h4 className="text-white font-semibold mb-1">Live Support</h4>
            <p className="text-steam-gray-medium text-sm">
              24/7 customer support ready to help you
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
