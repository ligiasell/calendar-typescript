import { retriever } from "@retriever-ui/react";
import dateUtils from "../../utils/date";

const Year = ({ date, openMonths }: any) => (
 <retriever.div data-testid="month-test-id" onClick={openMonths}>
  {dateUtils.format(date, "MMMM - yyyy")}
 </retriever.div>);

export default Year;
