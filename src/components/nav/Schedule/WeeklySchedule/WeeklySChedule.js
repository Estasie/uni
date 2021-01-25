import React, { Component } from "react";

import WeeklyScheduleItem from "./WeeklyScheduleItem/WeeklyScheduleItem";
import "./weeklySchedule.scss";

export default class WeeklySchedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.weekItems,
    };

    // console.log(this.state.items);
  }

  render() {
    const lessons = [
      "8:30",
      "10:10",
      "12:20",
      "14:00",
      "16:00",
      "17:40",
      "19:10",
    ];

    const daysOfTheWeek = [];
    for (let i = 0; i < this.state.items.length; i++) {
      daysOfTheWeek.push(this.state.items[i].day);
    }

    const dayOfTheWeek = this.state.items;
    return (
      <div className="container__week">
        <div className="weekDays">
          {daysOfTheWeek.map((day) => {
            return <h3>{day}</h3>;
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

          {dayOfTheWeek.map((day) => {
            console.log({ ...day });
            if (day.lessons) {
              return (
                <div className="weeklyScheduleItems">
                  <WeeklyScheduleItem {...day} key={day.id} />
                </div>
              );
            } else {
              return <div className="weeklyScheduleItems"></div>;
            }
          })}
        </div>
      </div>
    );
  }
}
