import React from "react";

import "./WeeklyScheduleItem.scss";

export default class WeeklyScheduleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("props for weeklyScheduleItem", this.props);

    return (
      <>
        {this.props.isSeminar === true ? (
          <div className="weeklyScheduleItems-item">
          <div className="weeklyScheduleInfo lection-color">
            <span className="span-bold">{this.props.lesson.lessonName}</span>
            <span>{this.props.lessonPlace.placeName}</span>
          </div>
        </div>
        ) : (
          <div className="weeklyScheduleItems-item">
          <div className="weeklyScheduleInfo seminar-color">
            <span className="span-bold">{this.props.lesson.lessonName}</span>
            <span>{this.props.lessonPlace.placeName}</span>
          </div>
        </div>
        )}
      </>
    );
  }
}
