import { colors, ListRow, Spacing } from 'tosslib';

interface SavingExpectedResultsProps {
  selectedProductId?: string;
  listRowConfigData?: Array<{ top: string; bottom: string }>;
}

const SavingExpectedResults = (props: SavingExpectedResultsProps) => {
  const { selectedProductId, listRowConfigData } = props;
  return (
    <>
      {!selectedProductId ? (
        <>
          <Spacing size={40} />
          <ListRow contents={<ListRow.Texts type="1RowTypeA" top="상품을 선택해주세요." />} />
        </>
      ) : (
        <>
          {listRowConfigData?.map((item, index) => (
            <ListRow
              key={index}
              contents={
                <ListRow.Texts
                  type="2RowTypeA"
                  top={item.top}
                  topProps={{ color: colors.grey600 }}
                  bottom={item.bottom}
                  bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
                />
              }
            />
          ))}
        </>
      )}
    </>
  );
};

export default SavingExpectedResults;
