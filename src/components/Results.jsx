import {calculateInvestmentResults} from '../util/investment';

export default function Results({ sendUserInput }) {

  const resultsData = calculateInvestmentResults(sendUserInput);
  console.log(resultsData);
  return (
    <>
      <p>Results....</p>
    </>
  );
}
