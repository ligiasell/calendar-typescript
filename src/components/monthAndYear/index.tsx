import { retriever } from "@retriever-ui/react";
import dateUtils from "../../utils/date";

const MonthAndYear = ({ date }: any) => (
  <retriever.div>{dateUtils.format(date, "yyyy")}</retriever.div>
);

export default MonthAndYear;
