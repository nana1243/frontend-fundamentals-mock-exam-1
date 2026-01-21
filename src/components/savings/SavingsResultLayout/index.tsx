import TabComponent from '../../ui/Tab';
import { TAB_VALUES } from '../../../constants/savings';
import SavingProducts from '../SavingProducts';
import SavingResults from '../SavingResults';
import { useState } from 'react';

type TabValue = (typeof TAB_VALUES)[number]['value'];

interface SavingsResultLayoutProps {
  handleOnChange: (value: TabValue) => void;
  tabValue: TabValue;
}

const SavingsResultLayout = (props: SavingsResultLayoutProps) => {
  const { handleOnChange, tabValue } = props;

  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const handleItemClick = (itemId: string) => {
    setSelectedProductId(itemId);
  };

  return (
    <>
      <TabComponent onChange={handleOnChange}>
        {TAB_VALUES.map(tab => (
          <TabComponent.Item key={tab.value} value={tab.value} selected={tab.value === tabValue}>
            {tab.label}
          </TabComponent.Item>
        ))}
      </TabComponent>
      {tabValue === 'PRODUCT' && <SavingProducts selectedProductId={selectedProductId} handleClick={handleItemClick} />}
      {tabValue === 'RESULT' && <SavingResults selectedProductId={selectedProductId} />}
    </>
  );
};

export default SavingsResultLayout;
