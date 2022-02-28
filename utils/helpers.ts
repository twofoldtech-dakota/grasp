import { useState } from 'react';
import { Price } from 'types';

export const AppConfig = {
  site_name: 'Grasp',
  description: 'Crypto trading journal that helps you find your edge',
  locale: 'en',
};

export const getURL = () => {
  const url =
    process?.env?.URL && process.env.URL !== ''
      ? process.env.URL
      : process?.env?.VERCEL_URL && process.env.VERCEL_URL !== ''
      ? process.env.VERCEL_URL
      : 'http://localhost:3000';
  return url.includes('http') ? url : `https://${url}`;
};

export const postData = async ({
  url,
  data
}: {
  url: string;
  data?: { price: Price };
}) => {
  console.log('posting,', url, data);

  const res: Response = await fetch(url, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin',
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    console.log('Error in postData', { url, data, res });

    throw Error(res.statusText);
  }

  return res.json();
};

export const toDateTime = (secs: number) => {
  const t = new Date('1970-01-01T00:30:00Z'); // Unix epoch start.
  t.setSeconds(secs);
  return t;
};

export const useMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClose = () => {
    setShowMenu(false);
  };

  return { showMenu, handleToggleMenu, handleClose };
};

