import React from 'react';
import { useSwipeable } from 'react-swipeable';

const SwipeContext = React.createContext(null);

export const SwipeProvider = ({ children, onSwipeLeft }) => {
  const handlers = useSwipeable({
    onSwipedLeft: eventData => {
      onSwipeLeft(eventData);
    },
  });
  return (
    <SwipeContext.Provider value={handlers}>{children}</SwipeContext.Provider>
  );
};

export default SwipeContext;
