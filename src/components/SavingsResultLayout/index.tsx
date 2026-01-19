import TabComponent from '../ui/Tab';
import { TAB_VALUES } from '../../constants/savings';
import SavingProducts from '../SavingProducts';
import SavingResults from '../SavingResults';

interface SavingsResultLayoutProps {
  handleOnChange: (value: string) => void;
  tabValue: string;
}

const SavingsResultLayout = (props: SavingsResultLayoutProps) => {
  const { handleOnChange, tabValue } = props;
  return (
    <>
      <TabComponent onChange={handleOnChange}>
        {TAB_VALUES.map(tab => (
          <TabComponent.Item key={tab.value} value={tab.value} selected={tab.value === tabValue}>
            {tab.label}
          </TabComponent.Item>
        ))}
      </TabComponent>
      {tabValue === TAB_VALUES[0].value && <SavingProducts />}
      {tabValue === TAB_VALUES[1].value && <SavingResults />}
    </>
  );
};

export default SavingsResultLayout;
