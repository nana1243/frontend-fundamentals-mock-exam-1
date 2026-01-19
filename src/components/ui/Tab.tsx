import { ReactNode } from 'react';
import { Tab } from 'tosslib';

interface TabComponentProps {
  onChange: (value: string) => void;
  children: ReactNode;
}

const TabComponent = (props: TabComponentProps) => {
  const { onChange, children } = props;
  return (
    <>
      <Tab onChange={onChange}>{children}</Tab>
    </>
  );
};

TabComponent.Item = Tab.Item;

export default TabComponent;
