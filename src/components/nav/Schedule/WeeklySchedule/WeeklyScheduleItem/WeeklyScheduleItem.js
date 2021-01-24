import React from "react";

import "./WeeklyScheduleItem.scss";

export default class WeeklyScheduleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: this.props.class,
      place: this.props.place,
    };
  }

  render() {
    return (
        <div className="weeklyScheduleItems-item">
          <div className="weeklyScheduleInfo">
            <span className="span-bold">{this.state.class}</span>
            <span>{this.state.place}</span>
          </div>
        </div>
    );
  }
}
