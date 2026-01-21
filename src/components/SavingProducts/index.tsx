import { Assets, colors, ListRow, Spacing } from 'tosslib';
import useSavingsProduct from '../../api/savings/savings.query';

interface SavingProductsProps {
  selectedProductId: string;
  handleClick: (itemId: string) => void;
}

const SavingProducts = (props: SavingProductsProps) => {
  const { selectedProductId, handleClick } = props;
  const { data } = useSavingsProduct();

  return (
    <>
      <Spacing size={8} />
      {data?.map(item => (
        <ListRow
          key={item.id}
          contents={
            <ListRow.Texts
              type="3RowTypeA"
              top={item.name}
              topProps={{ fontSize: 16, fontWeight: 'bold', color: colors.grey900 }}
              middle={`연 이자율: ${item.annualRate}%`}
              middleProps={{ fontSize: 14, color: colors.blue600, fontWeight: 'medium' }}
              bottom={`${item.minMonthlyAmount}원 ~ ${item.maxMonthlyAmount}원 | 12개월`}
              bottomProps={{ fontSize: 13, color: colors.grey600 }}
            />
          }
          right={selectedProductId === item.id ? <Assets.Icon name="icon-check-circle-green" /> : null}
          onClick={() => handleClick(item.id)}
        />
      ))}
    </>
  );
};

export default SavingProducts;
