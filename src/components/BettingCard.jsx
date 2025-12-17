const BettingCard = ({ match }) => {
  return (
    <div className="steam-card p-5 group">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl">{match.sportIcon}</span>
          <span className="text-xs text-steam-gray-medium font-semibold">
            {match.league}
          </span>
        </div>
        {match.isLive && (
          <div className="flex items-center space-x-2">
            <span className="animate-pulse w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="text-xs text-red-400 font-bold">LIVE</span>
          </div>
        )}
        {!match.isLive && (
          <span className="text-xs text-steam-gray-medium">{match.time}</span>
        )}
      </div>

      {/* Teams */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-steam-darker rounded-full flex items-center justify-center text-xs">
              {match.homeTeam.charAt(0)}
            </div>
            <span className="text-white font-semibold">{match.homeTeam}</span>
          </div>
          {match.isLive && <span className="text-steam-blue-light font-bold">{match.score?.home}</span>}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-steam-darker rounded-full flex items-center justify-center text-xs">
              {match.awayTeam.charAt(0)}
            </div>
            <span className="text-white font-semibold">{match.awayTeam}</span>
          </div>
          {match.isLive && <span className="text-steam-blue-light font-bold">{match.score?.away}</span>}
        </div>
      </div>

      {/* Odds */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <button className="bg-steam-darker hover:bg-steam-gradient text-center py-3 rounded transition-all group-hover:scale-105">
          <div className="text-xs text-steam-gray-medium mb-1">1</div>
          <div className="text-white font-bold">{match.odds.home}</div>
        </button>
        <button className="bg-steam-darker hover:bg-steam-gradient text-center py-3 rounded transition-all group-hover:scale-105">
          <div className="text-xs text-steam-gray-medium mb-1">X</div>
          <div className="text-white font-bold">{match.odds.draw}</div>
        </button>
        <button className="bg-steam-darker hover:bg-steam-gradient text-center py-3 rounded transition-all group-hover:scale-105">
          <div className="text-xs text-steam-gray-medium mb-1">2</div>
          <div className="text-white font-bold">{match.odds.away}</div>
        </button>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center pt-3 border-t border-steam-blue/10">
        <span className="text-xs text-steam-gray-medium">
          +{match.totalMarkets} markets
        </span>
        <button className="text-xs text-steam-blue-light hover:text-white transition-colors font-semibold">
          MORE BETS →
        </button>
      </div>
    </div>
  );
};

export default BettingCard;
