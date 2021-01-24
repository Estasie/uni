import React from "react";

import "./sheduleItem.scss";

export default class DailyScheduleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time,
      class: this.props.class,
      place: this.props.place,
    };
  }

  render() {
    return (
      <div className="scheduleItem">
        <div className="practise"></div>
        <div className="scheduleInfo">
          <span>{this.state.time}</span>
          <span className="boldSpan">{this.state.class}</span>
          <span>{this.state.place}</span>
        </div>
      </div>
    );
  }
}
