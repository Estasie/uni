import React, { Component } from "react";
import HorizontalScroll from "react-scroll-horizontal";
import DailySchedule from "./DayilySchedule/DailySchedule";
import WeeklySchedule from "./WeeklySchedule/WeeklySChedule";
import Calendar from "../../Calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import "./Schedule.scss";

export default class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calendarIsOpen: false,
      items: [],
      isLoaded: false,
      error: null,
    };
    this.onActive = this.onActive.bind(this);
    this.buttonRef = React.createRef();
  }

  componentDidMount() {
    fetch("https://localhost:5001/Schedule/GetAllDays")
      .then(res => res.json())
      .then(
        (result) => {
          
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  onActive() {
    const button = this.buttonRef.current;
    button.classList.toggle("is-calendar-open");
    if (!this.state.calendarIsOpen) {
      this.setState({ calendarIsOpen: true });
    } else {
      this.setState({ calendarIsOpen: false });
    }
  }

  render() {
    console.log('props for whole Schedule', this.state);
    return (
      <HorizontalScroll>
        <div></div>
        <div className="schedule__wrapper">
          <div className="calendar__wrapper">
            <button
              type="button"
              ref={this.buttonRef}
              onClick={this.onActive}
              className="calendar__button"
            >
              <FontAwesomeIcon icon={faCalendar} />
            </button>
            {!!this.state.calendarIsOpen && <Calendar />}
          </div>

          <div className="container" style={{ maxWidth: "none" }}>
            <div className="header__container">
              <h1>Расписание занятий</h1>
            </div>

            <div className="schedule__container_items">
              <DailySchedule
                items={this.state.items}
              />
              <div className="weekly__schedule">
                <WeeklySchedule weekItems={this.state.items}/>
                <div className="switch__container">
                  <p>Расписание сформировано для недели</p>
                  <button type="button" className="switch__button-button">
                    Сменить на
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HorizontalScroll>
    );
  }
}
