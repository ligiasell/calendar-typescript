
import React from "react";
import { retriever } from "@retriever-ui/react";

import dateUtils from "../../utils/date";

interface DayProps {
  date: Date;
}

const Day = ({ date }: DayProps) => {
  const [bg, setBg] = React.useState<string>("#fff");

  return (
    <retriever.div
      minW="100%"
      h={[32, 40]}
      maxW={[32, 40]}
      maxH={[32, 40]}
      radius={20}
      d="flex"
      bg={bg}
      alignItems="center"
      justifyContent="center"
      onClick={() => setBg("#f22")}
      data-testid={"day-test-" + dateUtils.format(date, "dd-MM-yyyy") + "-id"}
    >
      {dateUtils.format(date, "dd")}
    </retriever.div>
  );
};

export default Day;
