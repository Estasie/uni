import React, { Component } from "react";
import DailyScheduleItem from "./ScheduleItem/DailyScheduleItem";
import "./DailySchedule.scss";


function Today(){
  return (
    <>
    <h5>Сегодня - {new Date().toLocaleDateString("ru-RU", {
      month: "long",
      day: "numeric",
      weekday: "long",
    })}</h5>
    <h6>Нижняя неделя</h6>
    </>
  )
}
class DailySchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
    };
    
  }

  render() {
    return (
      <div className="TimeTable">
        <Today/>
      
        <div className="sheduleContainer">
          {this.state.items.map((item) => (
            <DailyScheduleItem {...item} key={item.id} />
          ))}
        </div>

      </div>
    );
  }
}


export default DailySchedule;