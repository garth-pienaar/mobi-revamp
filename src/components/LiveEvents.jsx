import BettingCard from './BettingCard';

const LiveEvents = () => {
  const liveMatches = [
    {
      id: 1,
      sportIcon: '⚽',
      league: 'PREMIER LEAGUE',
      homeTeam: 'Arsenal',
      awayTeam: 'Chelsea',
      isLive: true,
      score: { home: 2, away: 1 },
      odds: { home: '1.85', draw: '3.50', away: '4.20' },
      totalMarkets: 83,
    },
    {
      id: 2,
      sportIcon: '⚽',
      league: 'LA LIGA',
      homeTeam: 'Barcelona',
      awayTeam: 'Real Madrid',
      isLive: true,
      score: { home: 0, away: 0 },
      odds: { home: '2.10', draw: '3.20', away: '3.40' },
      totalMarkets: 95,
    },
    {
      id: 3,
      sportIcon: '🏀',
      league: 'NBA',
      homeTeam: 'Lakers',
      awayTeam: 'Warriors',
      isLive: true,
      score: { home: 78, away: 82 },
      odds: { home: '1.92', draw: '-', away: '1.88' },
      totalMarkets: 67,
    },
  ];

  const upcomingMatches = [
    {
      id: 4,
      sportIcon: '⚽',
      league: 'BUNDESLIGA',
      homeTeam: 'Bayern Munich',
      awayTeam: 'Borussia Dortmund',
      isLive: false,
      time: '18:30',
      odds: { home: '1.65', draw: '3.80', away: '5.20' },
      totalMarkets: 88,
    },
    {
      id: 5,
      sportIcon: '🎾',
      league: 'ATP TOUR',
      homeTeam: 'Djokovic',
      awayTeam: 'Alcaraz',
      isLive: false,
      time: '19:00',
      odds: { home: '2.05', draw: '-', away: '1.75' },
      totalMarkets: 45,
    },
    {
      id: 6,
      sportIcon: '🏉',
      league: 'RUGBY',
      homeTeam: 'Springboks',
      awayTeam: 'All Blacks',
      isLive: false,
      time: '20:00',
      odds: { home: '2.30', draw: '3.10', away: '2.90' },
      totalMarkets: 52,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      {/* Live Events */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <span className="animate-pulse w-3 h-3 bg-red-500 rounded-full"></span>
              <h2 className="text-2xl font-bold text-white">Live Events</h2>
            </div>
            <span className="px-3 py-1 bg-red-600/20 text-red-400 text-xs font-bold rounded-full">
              {liveMatches.length} LIVE
            </span>
          </div>
          <button className="text-steam-blue-light hover:text-white transition-colors text-sm font-semibold">
            VIEW ALL →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {liveMatches.map((match) => (
            <BettingCard key={match.id} match={match} />
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Upcoming Events</h2>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-steam-darker hover:bg-steam-blue/20 rounded-lg text-sm text-steam-gray-light transition-colors">
              All Sports
            </button>
            <button className="px-4 py-2 bg-steam-darker hover:bg-steam-blue/20 rounded-lg text-sm text-steam-gray-light transition-colors">
              Today
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcomingMatches.map((match) => (
            <BettingCard key={match.id} match={match} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveEvents;
