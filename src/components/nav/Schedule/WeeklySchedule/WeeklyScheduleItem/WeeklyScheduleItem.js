import React from "react";

import "./WeeklyScheduleItem.scss";

export default class WeeklyScheduleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: this.props.lessons,
      day: this.props.day,
    };
  }

  render() {
    let days= this.state.day;
    let lessons = this.state.lessons;
    let spreadLesoons = {...lessons};
    // console.log(spreadLesoons);
    return (

      this.state.lessons.map(lesson => {
        return(
          <div className="weeklyScheduleItems-item">
          <div className="weeklyScheduleInfo">
            <span className="span-bold">{lesson.class}</span>
            <span>{lesson.place}</span>
          </div>
        </div>
        )
        
      })
        
    );
  }
}
