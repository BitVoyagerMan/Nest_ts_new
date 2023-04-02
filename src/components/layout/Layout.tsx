import * as React from 'react';

import MyHeader from '@/components/layout/MyHeader';
export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  const menuItems = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/' },
  ];
  return (
    <>
      <MyHeader />
      {children}
    </>
  );
}
