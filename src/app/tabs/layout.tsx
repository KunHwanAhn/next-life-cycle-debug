import React from 'react';

interface TabsLayoutProps {
  children: React.ReactNode;
}
function TabsLayout({ children }: TabsLayoutProps) {
  return <section id="tabs-layout">{children}</section>;
}

export default TabsLayout;
