'use client';
import Clarity from '@microsoft/clarity';
import Cookies from 'js-cookie';

import { useEffect, useState } from 'react';
export const CookiesConsent = () => {
  const [consent, setConsent] = useState<'accepted' | 'declined' | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get('clarity_consent') as
      | 'accepted'
      | 'declined'
      | undefined;

    if (cookieConsent === 'accepted') {
      setConsent('accepted');
      Clarity.init(process.env.NEXT_PUBLIC_CLARITY_ID!);
    } else if (cookieConsent === 'declined') {
      setConsent('declined');
    } else {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('clarity_consent', 'accepted', {
      expires: 365,
      path: '/',
      sameSite: 'Lax',
      secure: process.env.NODE_ENV === 'production',
    });
    setConsent('accepted');
    Clarity.init(process.env.NEXT_PUBLIC_CLARITY_ID!);
    setShowBanner(false);
  };

  const handleDecline = () => {
    Cookies.set('clarity_consent', 'declined', {
      expires: 365,
      path: '/',
      sameSite: 'Lax',
      secure: process.env.NODE_ENV === 'production',
    });
    setConsent('declined');
    setShowBanner(false);
  };

  const reopenBanner = () => {
    setShowBanner(true);
  };

  return (
    <>
      {showBanner && (
        <div className='fixed bottom-0 w-full bg-gray-900 text-white px-4 py-4 z-50 flex justify-between items-center flex-wrap gap-4'>
          <p className='text-sm'>
            We use cookies to analyze traffic (via Microsoft Clarity). You can
            accept or decline.
          </p>
          <div className='flex gap-2'>
            <button
              className='bg-green-500 text-white px-4 py-2 text-sm rounded hover:bg-green-600'
              onClick={handleAccept}
            >
              Accept
            </button>
            <button
              className='bg-gray-700 text-white px-4 py-2 text-sm rounded hover:bg-gray-600'
              onClick={handleDecline}
            >
              Decline
            </button>
          </div>
        </div>
      )}

      {consent === 'declined' && !showBanner && (
        <button
          onClick={reopenBanner}
          className='fixed bottom-4 right-4 bg-gray-800 text-white text-xs px-3 py-2 rounded shadow z-40 hover:bg-gray-700'
        >
          Cookie Settings
        </button>
      )}
    </>
  );
};
