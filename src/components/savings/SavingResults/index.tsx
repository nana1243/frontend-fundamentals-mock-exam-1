import { Border, Spacing } from 'tosslib';
import SavingExpectedResults from '../SavingExpectedResults';
import SavingRecommendResults from '../SavingRecommendResults';
import useSavingResultsLogic from '../../../hooks/useSavingResultsLogic';

interface SavingResultsProps {
  selectedProductId?: string | null;
}

const SavingContentStyles = () => {
  return (
    <>
      <Spacing size={8} />
      <Border height={16} />
      <Spacing size={8} />
    </>
  );
};

const SavingResults = (props: SavingResultsProps) => {
  const { selectedProductId } = props;
  const { calculateResults, recommendProducts } = useSavingResultsLogic(selectedProductId);

  return (
    <>
      <SavingExpectedResults selectedProductId={selectedProductId} calculateResults={calculateResults} />
      <SavingContentStyles />
      <SavingRecommendResults recommendProducts={recommendProducts} />
    </>
  );
};

export default SavingResults;
