import {
    useCallback,
    useRef,
  } from 'react';
  
  const useClickOutSide = (
    setter,
  ) => {

    const el = useRef(null);

    const clickOutside = useCallback(
      (e) => { // e.target을 확인한다
        if (el.current && !el.current.contains(e.target)) {
          setter(false);
        }
      },
      [setter],
    );
  
    return [el, clickOutside];
  };
  
  export default useClickOutSide;