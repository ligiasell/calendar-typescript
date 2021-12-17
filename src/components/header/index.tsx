import { Flex } from "@retriever-ui/react";
import Button from '../button'
import MonthAndYear from '../monthAndYear'
import Year from '../year'


const Header = ({ onPrevDateClick, onNextDateClick, showMonths, date, openMonths }: any) => (
    <Flex alignItems="center" justifyContent="space-between" gap={12}>
        <Button
          height={32}
          size={16}
          radius={8}
          fontWeight={700}
          border="2px solid black.300"
          dataTestId="prev-test-id"
          onClick={onPrevDateClick}
          isPrevious
        />
        {showMonths ? (
        <MonthAndYear date={date}/>
        ) : (
        <Year
         date={date}
          openMonths={openMonths}
        />
        )}
        <Button
          height={32}
          size={16}
          radius={8}
          fontWeight={700}
          border="2px solid black.300"
          dataTestId="next-test-id"
          onClick={onNextDateClick}
          isPrevious={false}
        />
      </Flex>
);

export default Header;
