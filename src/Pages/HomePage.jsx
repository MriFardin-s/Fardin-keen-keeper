import React from 'react';
import Stats from '../Components/Stats';
import FriendList from '../Components/FriendList/FriendList';

const HomePage = () => {
    return (
        <div>
            <Stats/>
            
            <div className="mt-24" >  <FriendList/></div>
          
        </div>
    );
};

export default HomePage;