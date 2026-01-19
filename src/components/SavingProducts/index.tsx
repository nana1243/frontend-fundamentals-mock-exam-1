import { Assets, colors, ListRow, Spacing } from 'tosslib';
import useSavingsProduct from '../../api/savings/savings.query';

const SavingProducts = () => {
  const { data, isLoading, isError } = useSavingsProduct();
  console.log('data', data);
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
          right={<Assets.Icon name="icon-check-circle-green" />}
          onClick={() => {}}
        />
      ))}
    </>
  );
};

export default SavingProducts;
