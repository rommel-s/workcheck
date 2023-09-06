import { useEffect, useState } from "react";

import * as C from "./styles";

const Clock = () => {
  const [currentDay, setCurrentDay] = useState<number>();
  const [currentMonth, setCurrentMonth] = useState<string>();
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];

  useEffect(() => {
    const date = new Date();
    let today = date.getDate();
    let month = date.getMonth();

    setCurrentDay(today);
    setCurrentMonth(monthNames[month]);
  });

  return (
    <C.ClockContainer>
      <h1>{currentDay}</h1>
      <h4>{currentMonth}</h4>
    </C.ClockContainer>
  );
};

export default Clock;
