'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

const OAuthCallback = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleOAuthCallback = () => {
      const token = searchParams.get('token');

      if (token) {
        localStorage.setItem('token', token);
        console.log('Token stored in localStorage:', token);
        router.push('/');
      } else {
        console.error('No token found in query parameters');
      }
    };

    handleOAuthCallback();
  }, [router, searchParams]);

  return (
    <div>Loading...</div>
  );
};

export default OAuthCallback;