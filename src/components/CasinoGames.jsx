import { Link } from 'react-router-dom'

const BASE_URL = import.meta.env.BASE_URL

const games = [
  { 
    id: 1,
    title: 'Bass Bonanza',
    image: 'https://static.adv.bet/casino/pragmatic-animated-icons/vs10bbbonanza.svg',
    link: "https://interbet.co.za/VegasGames/Spin/Pragmatic",
  },
  { 
    id: 2,
    title: 'Sweet Bonanza',
    image: 'https://static.adv.bet/casino/pragmatic-animated-icons/vs20sbxmas.svg',
    link: "https://interbet.co.za/VegasGames/Spin/Pragmatic",
  },
  { 
    id: 3,
    title: 'Fire Portals',
    image: 'https://static.adv.bet/casino/pragmatic-animated-icons/vs20portals.svg',
    link: "https://interbet.co.za/VegasGames/Spin/Pragmatic",
  },
  { 
    id: 4,
    title: 'Congo Cash',
    image: 'https://static.adv.bet/casino/pragmatic-animated-icons/vs432congocash.svg',
    link: "https://interbet.co.za/VegasGames/Spin/Pragmatic",
  },
  { 
    id: 5,
    title: 'Madame Destiny',
    image: 'https://static.adv.bet/casino/pragmatic-animated-icons/vswaysmadame.svg',
    link: "https://interbet.co.za/VegasGames/Spin/Pragmatic",
  },
  { 
    id: 6,
    title: 'Lucky Lightning',
    image: 'https://static.adv.bet/casino/pragmatic-animated-icons/vswayslight.svg', 
    link: "https://interbet.co.za/VegasGames/Spin/Pragmatic",
  }
]

const upcomingMatches = [
  {
    id: 1,
    title: 'Rugby',
    description: 'Bet on international and local rugby matches',
    image: `${BASE_URL}rugbyImage.png`,
    gradient: 'from-green-600/20 to-emerald-600/20',
    borderColor: 'border-green-500/50',
    glowColor: 'rgba(34,197,94,0.4)',
    link: "https://interbet.co.za/Prematch/Sport",
  },
  {
    id: 2,
    title: 'Soccer',
    description: 'Place bets on your favorite football teams',
    image: `${BASE_URL}soccerImage.png`,
    gradient: 'from-blue-600/20 to-cyan-600/20',
    borderColor: 'border-blue-500/50',
    glowColor: 'rgba(59,130,246,0.4)',
    link: "https://interbet.co.za/Prematch/Sport/Soccer/Starting%20in%204%20hours",
  },
  {
    id: 3,
    title: 'Aviator',
    description: 'Take flight with multipliers up to 1000x',
    image: `${BASE_URL}AviatorImage.gif`,
    gradient: 'from-purple-600/20 to-pink-600/20',
    borderColor: 'border-purple-500/50',
    glowColor: 'rgba(168,85,247,0.4)',
    link: "https://interbet.co.za/VegasGames/Aviator",
  },
  {
    id: 4,
    title: 'F1 Racing',
    description: 'Bet on Formula 1 races and champions',
    image: `${BASE_URL}F1Image.png`,
    gradient: 'from-red-600/20 to-orange-600/20',
    borderColor: 'border-red-500/50',
    glowColor: 'rgba(239,68,68,0.4)',
    link: "https://interbet.co.za/Prematch/Sport",
  },
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
          to="https://interbet.co.za/VegasGames?utm_source=mobitestsite&utm_medium=referral&utm_campaign=testpromotions"
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
             <a href={game.link} target="_blank">    
            <div className="aspect-square">
          
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover"
              />
             
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="w-full bg-steam-blue hover:bg-steam-blue-light text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                      Play {game.title}
                    </div>
                  </div>
                </div>
              
            </div>
            </a>
          </div>
        ))}
      </div>

      {/* Upcoming Matches Section */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Live and Upcoming Matches</h2>
            <p className="text-steam-text">Place your bets on these upcoming sports events</p>
          </div>
          <Link
            to="https://interbet.co.za/"
            className="bg-steam-dark hover:bg-steam-card text-white px-6 py-2 rounded-md font-medium transition-colors border border-steam-border"
          >
            View Live Scores and Matches
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {upcomingMatches.map((match) => (
            <div
              key={match.id}
              className="group relative overflow-hidden rounded-lg bg-steam-dark hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <a href={match.link} target="_blank">
                <div className="aspect-[4/3]">
                <img
                  src={match.image}
                  alt={match.title}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg mb-1">{match.title}</h3>
                    <p className="text-steam-text text-xs mb-3">{match.description}</p>
                    <div className="w-full bg-steam-blue hover:bg-steam-blue-light text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                      Bet on {match.title}
                    </div>
                  </div>
                </div>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
