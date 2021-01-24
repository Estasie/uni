import React, { Component } from "react";
import DailyScheduleItem from "./ScheduleItem/DailyScheduleItem";

import "./DailySchedule.scss";

export default class DailySchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleDateString("ru-RU", {
        month: "long",
        day: "numeric",
        weekday: "long",
      }),
      items: props.items,
    };
    
  }

  render() {
    return (
      <div className="TimeTable">
        <h3>Сегодня - {this.state.date}</h3>
        <h4>Нижняя неделя</h4>
        <div className="sheduleContainer">
          {this.state.items.map((item) => (
            <DailyScheduleItem {...item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}
