import { retriever } from "@retriever-ui/react";
import dateUtils from "../../utils/date";

const Months = ({ key, height, width, radius, display, alignItems, justifyContent, onClick, dataTestid, month}: any) => (
<retriever.div
                              key={key}
                              h={height}
                              w={width}
                              radius={radius}
                              d={display}
                              alignItems={alignItems}
                              justifyContent={justifyContent}
                              onClick={onClick}
                              data-testid={dataTestid}
                            >
                              {dateUtils.format(month, "MMMM")}
                            </retriever.div>
);

export default Months;
