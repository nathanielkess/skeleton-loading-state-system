import { useEffect, useState } from 'react'

export const useToggleBooleanTimer = (bool, duration) => {

  const [boolVal, setBoolVal] = useState(bool);

  useEffect(() => {
    const timer = setInterval(() => {
      setBoolVal(!boolVal);
    }, duration)
    return () => { clearInterval(timer); }
  })

  return boolVal;
}