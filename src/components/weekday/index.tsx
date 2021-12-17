import { retriever } from "@retriever-ui/react";

const WEEK_DAYS = [
  { name: 'Dom', },
  { name: 'Seg', },
  { name: 'Ter', },
  { name: 'Qua', },
  { name: 'Qui', },
  { name: 'Sex', },
  { name: 'Sab', },
]

const WeekDay = () => (
  <>
    {WEEK_DAYS.map(day => (
      <retriever.p fontSize={14}>{day.name}</retriever.p>
    ))
    }
    </>
)

export default WeekDay;
