import React from 'react';
import style from './Tabs.module.scss';
import TabButton from './components/TabButton';

export interface TabsProps<TabsChildProps> {
  tabIds: string[];
  children: React.ReactElement<TabsChildProps>[];
}
function Tabs<TabsChildProps>({ tabIds, children }: TabsProps<TabsChildProps>) {
  const [activeTabIndex, setActiveTabIndex] = React.useState<number>(0);

  if (tabIds.length === 0) {
    return <div className={style['tabs-container']}>No tabs available</div>;
  }

  const handleTabClick = (tabIndex: number) => {
    setActiveTabIndex(tabIndex);
  };

  return (
    <>
      <ul className={style['tabs-container']}>
        {tabIds.map((tabId, index) => (
          <li key={tabId} className={style['tab-item']}>
            <TabButton
              label={tabId}
              isActive={activeTabIndex === index}
              onClick={() => handleTabClick(index)}
            />
          </li>
        ))}
      </ul>
      {React.Children.map(children, (child, index) => {
        if (index === activeTabIndex) {
          return child;
        }

        return null;
      })}
    </>
  );
}

export default Tabs;
