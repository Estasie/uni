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
      today: ''
    };
   
  }

  render() {
    console.log("propsForDailySchedule", this.props);
    let weekday = new Date().toLocaleDateString('ru-RU', {weekday: 'long'});
    console.log(weekday);
    return (
      <div className="TimeTable">
        <Today/>
      
        <div className="sheduleContainer">
          {this.props.items.map((item) => {
             if(weekday === item.dayName.toLowerCase()){
              return (
                <DailyScheduleItem {...item} key={item.id} />
                )}
            })
          }
           
            
          
        </div>

      </div>
    );
  }
}


export default DailySchedule;