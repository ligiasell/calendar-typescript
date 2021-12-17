import React from "react";
import { Flex, Grid } from "@retriever-ui/react";
import Header from '../header'
import WeekDay from '../weekday'
import Months from '../months'
import Day from '../day'
import dateUtils from "../../utils/date";

import { v4 } from "uuid";

interface CalendarProps {
  initialDate?: Date;
}

const Calendar = ({ initialDate = new Date() }: CalendarProps) => {
  const [showMonths, setShowMonths] = React.useState<boolean>(false);

  const [date, setDate] = React.useState<Date>(initialDate);

  const next = (date: Date) => {
    if (showMonths) return setDate(dateUtils.sum(date, { years: 1 }));

    setDate(dateUtils.sum(date, { months: 1 }));
  };

  const prev = (date: Date) => {
    if (showMonths) return setDate(dateUtils.sub(date, { years: 1 }));

    setDate(dateUtils.sub(date, { months: 1 }));
  };

  const jump = (goTo: Date) => {
    setDate(goTo);
    return setShowMonths(false);
  };

  const openMonths = () => setShowMonths(true);

  const months = dateUtils.eachMonthsOfYear(date);
  const dates = dateUtils.eachDaysOfMonth(date);

  return (
    <Flex
      p={[16, 24]}
      radius={16}
      shadow="1px 1px 15px -5px black.300"
      direction="column"
      alignItems="center"
      maxW={400}
    >
      <Header
        onPrevDateClick={() => prev(date)}
        onNextDateClick={() => next(date)}
        showMonths={showMonths}
        date={date}
        openMonths={openMonths}
      />
      {!showMonths && (
        <Grid
          mTop={20}
          justifyItems="center"
          gridTemplateColumns="repeat(7, 1fr)"
          gap={8}
        >
          <WeekDay/>
        </Grid>
      )}
      {showMonths ? (
        <Grid
          mTop={16}
          justifyItems="center"
          gridTemplateColumns="repeat(3, 1fr)"
          gap={8}
        >
          {months.map((month) => (
            <Months
             key={v4()}
              height={40}
              width="100%"
              radius={20}
              display="flex"
              alignItems="center"
              justifyContent="center"
              onClick={() => jump(month)}
              dataTestid={
                "month-test-" + dateUtils.format(month, "MMMM") + "-id"
              }
              month={month}
            />
          ))}
        </Grid>
      ) : (
        <Grid
          gap={8}
          mTop={16}
          justifyItems="center"
          gridTemplateColumns="repeat(7, 1fr)"
        >
          {dates.map((date) => (
            <Day key={v4()} date={date} />
          ))}
        </Grid>
      )}
    </Flex>
  );
};

export default Calendar;
