import React from 'react';
import useTabRouter from '@/hooks/useTabRouter';
import style from './Tabs.module.scss';
import TabButton from './components/TabButton';

export interface TabsProps<TabsChildProps> {
  tabIds: string[];
  children: React.ReactElement<TabsChildProps>[];
}
function Tabs<TabsChildProps>({ tabIds, children }: TabsProps<TabsChildProps>) {
  const { currentTab, setTab } = useTabRouter();

  if (tabIds.length === 0) {
    return <div className={style['tabs-container']}>No tabs available</div>;
  }

  const handleTabClick = (newTabId: string) => {
    // NOTE: shallow routing을 위해서는 true로 설정해야 함
    setTab(newTabId, false);
  };

  return (
    <>
      <ul className={style['tabs-container']}>
        {tabIds.map((tabId) => (
          <li key={tabId} className={style['tab-item']}>
            <TabButton
              label={tabId}
              isActive={tabId === currentTab}
              onClick={() => handleTabClick(tabId)}
            />
          </li>
        ))}
      </ul>
      {React.Children.map(children, (child) => {
        if (child.key === currentTab) {
          return child;
        }

        return null;
      })}
    </>
  );
}

export default Tabs;
