import { SavingsProductList } from '../../../api/savings/savings.schema';
import { colors, ListRow } from 'tosslib';

interface SavingRecommendResultsProps {
  recommendProducts: SavingsProductList;
}

const SavingRecommendResults = (props: SavingRecommendResultsProps) => {
  const { recommendProducts } = props;
  return (
    <>
      {recommendProducts?.map(item => (
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
          onClick={() => {}}
        />
      ))}
    </>
  );
};

export default SavingRecommendResults;
