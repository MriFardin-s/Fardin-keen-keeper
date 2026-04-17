import { Link } from "react-router";

const FriendCard = ({ friend }) => {

  const statusStyles = {
    'overdue': 'bg-red-500 text-white',
    'almost due': 'bg-orange-400 text-white',
    'on-track': 'bg-green-700 text-white'
  };

  
  const currentStatus = friend.status.toLowerCase();
  const activeClass = statusStyles[currentStatus] || 'bg-gray-200 text-gray-800';

  return (
    <Link to={`/details/${friend.id}`} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border border-gray-50">

      <div className="relative mb-4">
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-gray-50"
        />
      </div>

      <h3 className="text-xl font-bold text-slate-800">{friend.name}</h3>
      <p className="text-gray-400 text-sm mb-4">{friend.days_since_contact}d ago</p>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {friend.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold uppercase rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <button className={`px-6 py-2 rounded-xl font-bold text-sm shadow-sm ${activeClass}`}>
        {friend.status}
      </button>
    </Link>
  );
};

export default FriendCard;