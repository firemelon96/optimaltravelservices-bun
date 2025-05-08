'use client';

import { ReactNode, useEffect } from 'react';
import Clarity from '@microsoft/clarity';
import Cookies from 'js-cookie';

const ClarityProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const consentCookie = Cookies.get('clarity_consent');
    if (process.env.NODE_ENV === 'production' && consentCookie)
      Clarity.init(process.env.NEXT_PUBLIC_CLARITY_ID!);
  }, []);

  return <>{children}</>;
};

export default ClarityProvider;
