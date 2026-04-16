import React, { createContext, useState } from 'react';

export const TimelineContext = createContext();

const TimeLineProvider = ({children}) => {

    const [activities, setActivities] =useState([]);





 const addActivity = (type, personName) => {
        const newActivity = {
            id: Date.now(),
            type,
            with: personName,
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        };
        setActivities([...activities, newActivity ]);
    };



    return (
      <TimelineContext.Provider value={{ activities, addActivity }}>
            {children}
        </TimelineContext.Provider>
    );
};

export default TimeLineProvider;