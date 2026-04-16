import { Link } from "react-router";

const FriendCard = ({ friend }) => {

  const statusStyles = {
    'Overdue': 'bg-red-500 text-white',
    'Almost Due': 'bg-orange-400 text-white',
    'On-Track': 'bg-emerald-700 text-white'
  };

  return (
    <Link to={`/details/${friend.id}`} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border border-gray-50">

      <div className="relative mb-4">
        <img
          src={friend.image}
          alt={friend.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-gray-50"
        />
      </div>


      <h3 className="text-xl font-bold text-slate-800">{friend.name}</h3>
      <p className="text-gray-400 text-sm mb-4">{friend.lastSeen}d ago</p>


      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {friend.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-emerald-50 text-green-700 text-xs font-bold uppercase  rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>


      <button className={`w-25 py-2 rounded-xl font-bold text-sm shadow-sm ${statusStyles[friend.status] || 'bg-gray-200'}`}>
        {friend.status}
      </button>
    </Link>
  );
};

export default FriendCard;