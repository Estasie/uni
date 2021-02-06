import React, { Component } from "react";

import WeeklyScheduleItem from "./WeeklyScheduleItem/WeeklyScheduleItem";
import "./weeklySchedule.scss";

export default class WeeklySchedule extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("props for weekly schedule", this.props);
    const lessons = [
      "8:30",
      "10:10",
      "12:20",
      "14:00",
      "16:00",
      "17:40",
      "19:10",
    ];

    const daysOfTheWeek = [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];

    return (
      <div className="container__week">
        <div className="weekDays">
          {daysOfTheWeek.map((day) => {
            return <h5>{day}</h5>;
          })}
        </div>
        <div className="container__daysAndTime">
          <div className="weekTime">
            {lessons.map((time) => {
              if (lessons.length) {
                return <span>{time}</span>;
              }
            })}
          </div>

          {daysOfTheWeek.map((day) => {
            let weeklyScheduleByDay = [];
            this.props.weekItems.map((item, i) => {
              if (item.dayName === day) {
                for (let i = 0; i < 7; i++) {
                  if (item.time === i) {
                    weeklyScheduleByDay.push(
                      <WeeklyScheduleItem {...item} key={item.time} />
                    );
                  } else {
                    weeklyScheduleByDay.push(
                      <div className="weeklyScheduleItems-item"></div>
                    );
                  }
                }

                // if (item.time === i) {
                //   weeklyScheduleByDay.push(
                //     <WeeklyScheduleItem {...item} key={item.time} />
                //   );
                // } else {
                //   <div className="weeklyScheduleItems-item"></div>;
                // }
              }
            });
            return (
              <div className="weeklyScheduleItems">{weeklyScheduleByDay}</div>
            );
          })}

          {/* {
            this.props.weekItems.map((item) => 
             {
               console.log(item);
               return (
                <div className="weeklyScheduleItems">
                  <WeeklyScheduleItem {...item} key={item.id} />
                </div>
              );
             }
            )
          } */}

          {/* { daysOfTheWeek.map(weekday => {
            if(weekday === "Понедельник"){
              return this.props.weekItems.map((day) => {
                if (day.lesson) {
                  return (
                    <div className="weeklyScheduleItems">
                      <WeeklyScheduleItem {...day} key={day.id} />
                    </div>
                  );
                } else {
                  return <div className="weeklyScheduleItems"></div>;
                }
              })
            }
            })} */}
        </div>
      </div>
    );
  }
}
