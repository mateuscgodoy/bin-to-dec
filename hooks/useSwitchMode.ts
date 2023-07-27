import {useEffect} from 'react';

import { Binary, Decimal } from '@/types';

export default function useSwitchMode(currentMode: boolean) {
  useEffect(() => {
    let ignore = false;

    if(!ignore) {
      Decimal.disabled = currentMode;
      Binary.disabled = !currentMode;
    }

    return () => { ignore = true; }
    
  }, [currentMode]);
}