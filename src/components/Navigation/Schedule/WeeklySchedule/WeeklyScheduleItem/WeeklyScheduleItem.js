import React from "react";

import "./WeeklyScheduleItem.scss";

export default class WeeklyScheduleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: this.props.lessons,
      day: this.props.day,
      isSeminar: this.props.lessons.isSeminar
      
    };
  }

  render() {
    let lessons = this.state.lessons;
    return (
      lessons.map(lesson => {
        if(lesson.isSeminar === false){
          return(
            <div className="weeklyScheduleItems-item">
            <div className="weeklyScheduleInfo lection-color">
              <span className="span-bold">{lesson.class}</span>
              <span>{lesson.place}</span>
            </div>
          </div>
          )
        } else {
          return(
            <div className="weeklyScheduleItems-item">
            <div className="weeklyScheduleInfo seminar-color">
              <span className="span-bold">{lesson.class}</span>
              <span>{lesson.place}</span>
            </div>
          </div>
          )
        }
        
        
      })
        
    );
  }
}
