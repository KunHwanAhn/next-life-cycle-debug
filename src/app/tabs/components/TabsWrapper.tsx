'use client';

import Tabs, { TabsProps } from '@/components/Tabs/Tabs';
import React from 'react';

interface TabsWrapperProps<TabsChildProps> extends TabsProps<TabsChildProps> {}
function TabsWrapper<TabsChildProps>({ tabIds, children }: TabsWrapperProps<TabsChildProps>) {
  return (
    <Tabs<TabsChildProps> tabIds={tabIds}>
      {children}
    </Tabs>
  );
}
export default TabsWrapper;
