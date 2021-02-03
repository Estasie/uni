import React from "react";

import "./sheduleItem.scss";

export default class DailyScheduleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time,
      class: this.props.class,
      place: this.props.place,
      seminar: this.props.isSeminar,
    };
    console.log(this.state.seminar);

  }

  render() {
    const info = [this.state.seminar];
    return (
      info.map(el => {
        if(el === true){
          return <div className="scheduleItem">
          <div className="seminar"></div>
          <div className="scheduleInfo">
            <span>{this.state.time}</span>
            <span className="boldSpan">{this.state.class}</span>
            <span>{this.state.place}</span>
          </div>
        </div>
        } else {
          return <div className="scheduleItem">
          <div className="lection"></div>
          <div className="scheduleInfo">
            <span>{this.state.time}</span>
            <span className="boldSpan">{this.state.class}</span>
            <span>{this.state.place}</span>
          </div>
        </div>
        }
      })
      
    );
  }
}
