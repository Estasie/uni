import React from "react";

import "./sheduleItem.scss";

export default class DailyScheduleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time,
      class: this.props.lesson.lessonName,
      place: this.props.lessonPlace.placeName,
      seminar: this.props.isSeminar,
    };
  }

  render() {
    console.log("props for DailyScheduleItem", this.state);
    const timeArray = [
      "8:30 - 10:00",
      "10:10 - 11:40",
      "12:20 - 13:50",
      "14:00 - 15:30",
    ];
    const { time } = this.state;
    const info = [this.state.seminar];
    console.log(timeArray[time]);
    return info.map((el) => {
      if (el === true) {
        return (
          <div className="scheduleItem">
            <div className="seminar"></div>
            <div className="scheduleInfo">
              <span>{timeArray[time]}</span>
              <span className="boldSpan">{this.state.class}</span>
              <span>{this.state.place}</span>
            </div>
          </div>
        );
      } else {
        return (
          <div className="scheduleItem">
            <div className="lection"></div>
            <div className="scheduleInfo">
              <span>{timeArray[time]}</span>
              <span className="boldSpan">{this.state.class}</span>
              <span>{this.state.place}</span>
            </div>
          </div>
        );
      }
    });
  }
}
