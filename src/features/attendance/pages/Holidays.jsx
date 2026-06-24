import React, { useMemo, useState } from "react";
import HolidayManagement from "../components/HolidayManagement";
import "../components/holidaysManagement.scss";
import HolidayCard from "../components/HolidayCard";

const Holidays = () => {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <section>
        <HolidayManagement setEdit={setEdit} />
        <HolidayCard props={{ edit, setEdit }} />
      </section>
    </>
  );
};

export default Holidays;
