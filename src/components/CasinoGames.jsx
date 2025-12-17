import { Link } from 'react-router-dom'

const games = [
  { id: 1, name: 'Gates of Olympus', image: '/gates-of-olympus.jpg' },
  { id: 2, name: '5 Lions', image: '/5-lions.jpg' },
  { id: 3, name: '888 Dragons', image: '/888-dragons.jpg' },
  { id: 4, name: 'Barn Festival', image: '/barn-festival.jpg' },
  { id: 5, name: 'Game 1', image: '/gameImg1.png' },
  { id: 6, name: 'Game 2', image: '/gameImg2.png' }
]

const upcomingMatches = [
  {
    id: 1,
    sport: 'Football',
    homeTeam: 'Manchester United',
    awayTeam: 'Liverpool',
    date: 'Dec 18, 2025',
    time: '19:45',
    homeOdds: '2.50',
    drawOdds: '3.20',
    awayOdds: '2.80'
  },
  {
    id: 2,
    sport: 'Basketball',
    homeTeam: 'LA Lakers',
    awayTeam: 'Boston Celtics',
    date: 'Dec 18, 2025',
    time: '21:00',
    homeOdds: '1.90',
    drawOdds: '-',
    awayOdds: '1.95'
  },
  {
    id: 3,
    sport: 'Football',
    homeTeam: 'Real Madrid',
    awayTeam: 'Barcelona',
    date: 'Dec 19, 2025',
    time: '20:00',
    homeOdds: '2.30',
    drawOdds: '3.10',
    awayOdds: '3.00'
  },
  {
    id: 4,
    sport: 'Tennis',
    homeTeam: 'Djokovic',
    awayTeam: 'Federer',
    date: 'Dec 19, 2025',
    time: '15:30',
    homeOdds: '1.65',
    drawOdds: '-',
    awayOdds: '2.20'
  },
  {
    id: 5,
    sport: 'Football',
    homeTeam: 'Bayern Munich',
    awayTeam: 'Dortmund',
    date: 'Dec 20, 2025',
    time: '18:30',
    homeOdds: '1.80',
    drawOdds: '3.50',
    awayOdds: '4.20'
  },
  {
    id: 6,
    sport: 'Basketball',
    homeTeam: 'Golden State',
    awayTeam: 'Miami Heat',
    date: 'Dec 20, 2025',
    time: '22:00',
    homeOdds: '2.10',
    drawOdds: '-',
    awayOdds: '1.75'
  }
]

export default function CasinoGames() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* Casino Games Section */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Casino Games</h2>
          <p className="text-steam-text">Try your luck with our featured casino games</p>
        </div>
        <Link
          to="/casino"
          className="bg-steam-dark hover:bg-steam-card text-white px-6 py-2 rounded-md font-medium transition-colors border border-steam-border"
        >
          View All Games
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
        {games.map((game) => (
          <div
            key={game.id}
            className="group relative overflow-hidden rounded-lg bg-steam-dark hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="aspect-square">
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-sm mb-2">{game.name}</h3>
                  <button className="w-full bg-steam-blue hover:bg-steam-blue-light text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Matches Section */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Upcoming Matches</h2>
            <p className="text-steam-text">Place your bets on these upcoming sports events</p>
          </div>
          <Link
            to="/sports"
            className="bg-steam-dark hover:bg-steam-card text-white px-6 py-2 rounded-md font-medium transition-colors border border-steam-border"
          >
            View All Matches
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcomingMatches.map((match) => (
            <div
              key={match.id}
              className="bg-steam-dark rounded-lg p-4 border border-steam-border hover:border-steam-blue transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-semibold text-steam-blue uppercase">{match.sport}</span>
                <span className="text-xs text-steam-text">{match.date} • {match.time}</span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">{match.homeTeam}</span>
                  <span className="text-steam-text text-sm">vs</span>
                  <span className="text-white font-medium">{match.awayTeam}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="bg-steam-card rounded p-2 text-center hover:bg-steam-blue transition-colors">
                  <div className="text-xs text-steam-text mb-1">Home</div>
                  <div className="text-white font-bold">{match.homeOdds}</div>
                </div>
                {match.drawOdds !== '-' && (
                  <div className="bg-steam-card rounded p-2 text-center hover:bg-steam-blue transition-colors">
                    <div className="text-xs text-steam-text mb-1">Draw</div>
                    <div className="text-white font-bold">{match.drawOdds}</div>
                  </div>
                )}
                <div className={`bg-steam-card rounded p-2 text-center hover:bg-steam-blue transition-colors ${match.drawOdds === '-' ? 'col-start-3' : ''}`}>
                  <div className="text-xs text-steam-text mb-1">Away</div>
                  <div className="text-white font-bold">{match.awayOdds}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
