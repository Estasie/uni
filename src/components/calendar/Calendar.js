import React, { useState } from "react"
import dayjs from "dayjs"
import range from "lodash-es/range"
import "./calendar.scss";
import "dayjs/locale/ru";

dayjs.locale("ru");
const weekDays = ["Вс","Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]

const todayObj = dayjs()

const Calendar = () => {
  const [dayObj, setDayObj] = useState(dayjs())

  const thisYear = dayObj.year()
  const thisMonth = dayObj.month() // (January as 0, December as 11)
  const daysInMonth = dayObj.daysInMonth()

  const dayObjOf1 = dayjs(`${thisYear}-${thisMonth + 1}-1`)
  const weekDayOf1 = dayObjOf1.day() // (Sunday as 0, Saturday as 6)

  const dayObjOfLast = dayjs(`${thisYear}-${thisMonth + 1}-${daysInMonth}`)
  const weekDayOfLast = dayObjOfLast.day()

  const handlePrev = () => {
    setDayObj(dayObj.subtract(1, "month"))
  }

  const handleNext = () => {
    setDayObj(dayObj.add(1, "month"))
  }

  return (
    <div className="calendar">
        <p className="calendar_name">Календарь</p>
      <div className="header">
        <button type="button" className="nav nav--prev" onClick={handlePrev}>
          &lt;
        </button>
        <div className="datetime">{dayObj.format("D MMMM YYYY")}</div>
        <button type="button" className="nav nav--prev" onClick={handleNext}>
          &gt;
        </button>
      </div>
      <hr></hr>
      <div className="week-container">
        {weekDays.map(d => (
          <div className="week-cell" key={d}>
            {d}
          </div>
        ))}
      </div>
      <div className="day-container">
        {range(weekDayOf1).map(i => (
          <div className="day-cell day-cell--faded" key={i}>
            {dayObjOf1.subtract(weekDayOf1 - i, "day").date()}
          </div>
        ))}

        {range(daysInMonth).map(i => (
          <div
            className={`day-cell day-cell--in-month${
              i + 1 === todayObj.date() &&
              thisMonth === todayObj.month() &&
              thisYear === todayObj.year()
                ? " day-cell--today"
                : ""
            }`}
            key={i}
          >
            {i + 1}
          </div>
        ))}

        {range(6 - weekDayOfLast).map(i => (
          <div className="day-cell day-cell--faded" key={i}>
            {dayObjOfLast.add(i +1, "day").date()}
          </div>
        ))}
      </div>
      <hr></hr>

      <p className="footer__description">Вид мероприятия</p>
      <div className="footer__events">
            <div className=" event event--new">НОВЫЕ ЗАДАНИЯ</div>
            <div className="event event--task">КОНТРОЛЬНАЯ</div>
            <div className="event event--event">СОБЫТИЕ</div>
      </div>
    </div>
  )
}

export default Calendar
