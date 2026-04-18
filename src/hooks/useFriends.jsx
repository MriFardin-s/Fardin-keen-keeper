import React, { useEffect, useState } from 'react';

const useFriends = () => {
      const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriend = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();

      setTimeout(() => {
        setFriends(data)
        setLoading(false)
      }, 3500)


    };
    fetchFriend();
  }, []

  )
    return (
        {friends, loading}
    );
};

export default useFriends;