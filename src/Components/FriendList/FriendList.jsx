
import FriendCard from "./FriendCard";
import { BeatLoader } from "react-spinners";
import useFriends from "../../hooks/useFriends";




const FriendList = () => {
  const {friends, loading} = useFriends();

  // const [friends, setFriends] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchFriend = async () => {
  //     const res = await fetch('/data.json');
  //     const data = await res.json();

  //     setTimeout(() => {
  //       setFriends(data)
  //       setLoading(false)
  //     }, 300)


  //   };
  //   fetchFriend();
  // }, []

  // )


  return (
    <div className="bg-gray-50 py-10 p-8">
      <div className=" max-w-6xl mx-auto border-t pt-10 border-gray-200 ">
        <h2 className="text-2xl font-bold text-slate-800 mb-8">Your Friends</h2>


        {
          loading ? (
            <div className="flex flex-col justify-center items-center h-100 w-full"><BeatLoader size={15} />
              <p className="mt-4 text-slate-500 font-medium">Loading your friends...</p>
            </div>
          ) : (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
            {friends.map(friend => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>)
        }
      </div>
    </div>
  );
};

export default FriendList;