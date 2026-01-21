import { SavingsProductList } from '../../../api/savings/savings.schema';
import { colors, ListHeader, ListRow, Spacing } from 'tosslib';

interface SavingRecommendResultsProps {
  recommendProducts: SavingsProductList;
}

const SavingRecommendResults = (props: SavingRecommendResultsProps) => {
  const { recommendProducts } = props;
  return (
    <>
      <ListHeader title={<ListHeader.TitleParagraph fontWeight="bold">추천 상품 목록</ListHeader.TitleParagraph>} />
      <Spacing size={12} />

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
