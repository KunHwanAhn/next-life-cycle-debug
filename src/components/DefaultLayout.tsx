import React, { ReactNode } from 'react';
import styles from './DefaultLayout.module.scss';

interface DefaultLayoutProps {
  children: ReactNode;
}
export default function DefaultLayout({ children }:DefaultLayoutProps) {
  console.log('components - DefaultLayout');

  return (
    <main>
      <div className={styles['main-container']}>
        {children}
      </div>
    </main>
  );
}
