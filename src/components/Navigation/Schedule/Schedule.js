import React, { Component } from "react";
import HorizontalScroll from 'react-scroll-horizontal';
import DailySchedule from "./DayilySchedule/DailySchedule";
import WeeklySchedule from "./WeeklySchedule/WeeklySChedule";
import Calendar from '../../Calendar';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCalendar} from '@fortawesome/free-solid-svg-icons';

import { nanoid } from "nanoid";
import "./Schedule.scss";



export default class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calendarIsOpen: false,
      items: [
        {
          time: "8:30-10:00",
          class: "Элективные курсы блаблабла",
          place: "Спортивный комплекс УОР",
          isSeminar: true,
          id: nanoid(),
        },
        {
          time: "10:10-11:40",
          class: "Философия",
          place: "Ауд. 313",
          isSeminar: true,
          id: nanoid(),
        },
        {
          time: "12:20-13:50",
          class: "Бух. учёт",
          place: "Ауд. 501",
          isSeminar: false,
          id: nanoid(),
        },
      ],
      weekItems: [
        {
          day: "Понедельник",
          lessons: [
            {
              time: "10:10",
              class: "Философия",
              place: "Ауд. 108",
              isSeminar: false,
              id: nanoid(),
            },
            {
              time: "12:20",
              class: "Физ.ра",
              place: "Ауд. 108",
              isSeminar: true,
              id: nanoid(),
            },
            {
              time: "12:20",
              class: "Физ.ра",
              place: "Ауд. 108",
              isSeminar: true,
              id: nanoid(),
            },
            {
              time: "14:00",
              class: "Бух.учёт",
              place: "Ауд. 108",
              isSeminar: true,
              id: nanoid(),
            },
            {
              time: "16:00",
              class: "Философия",
              place: "Ауд. 108",
              isSeminar: true,
              id: nanoid(),
            },
          ],
        },
        {
          day: "Вторник",
          lessons: [
            {
              time: "10:10",
              class: "Физ.ра",
              place: "Ауд. 108",
              isSeminar: true,
              id: nanoid(),
            },
          ],
        },
        {
          day: "Среда",
          lessons: [
            {
              time: "8:30",
              class: "Философия",
              place: "Ауд. 108",
              isSeminar: true,
              id: nanoid(),
            },
            {
              time: "12:20",
              class: "Физ.ра",
              place: "Ауд. 108",
              isSeminar: true,
              id: nanoid(),
            },
            {
              time: "12:20",
              class: "Физ.ра",
              place: "Ауд. 108",
              isSeminar: true,
              id: nanoid(),
            },
            {
              time: "14:00",
              class: "Бух.учёт",
              place: "Ауд. 108",
              isSeminar: false,
              id: nanoid(),
            },
            {
              time: "16:00",
              class: "Философия",
              place: "Ауд. 108",
              isSeminar: false,
              id: nanoid(),
            },
          ],
        },
        {
          day: "Четверг",
        },
        {
          day: "Пятница",
        },
        {
          day: "Суббота",
        },
      ],
    };

    this.onActive = this.onActive.bind(this);
    this.buttonRef = React.createRef();
  }

//   horizontalScroll = (e) => {
//     e.preventDefault();
//     let container = document.querySelector('.schedule__wrapper');
//     container.scrollTo({
//       top:0,
//         left: 0.1 + e.deltaY
//     });
    
// }

  onActive(){
    const button = this.buttonRef.current;
    button.classList.toggle('is-calendar-open');
    if(!this.state.calendarIsOpen){
      this.setState({calendarIsOpen: true});
  
    } else {
      this.setState({calendarIsOpen: false});
      
    } 
      
    
    
  }



  render() {

    return (
      <HorizontalScroll>
        <div className="schedule__wrapper">
        <div className="calendar__wrapper">
            <button type="button" ref={this.buttonRef} onClick={this.onActive} className="calendar__button"><FontAwesomeIcon icon ={faCalendar}/></button>
            {!!this.state.calendarIsOpen &&(<Calendar/>)}
            </div>
        
          <div className="container"  style={{maxWidth:'none'}}>
            <div className="header__container">
            <h1>Расписание занятий</h1>
            
            
            </div>
            
            <div className="schedule__container_items">
            

            
              <DailySchedule
                items={this.state.items}
                name="test"
                test="abrakadabra"
              />
              <div className="weekly__schedule">
                <WeeklySchedule weekItems={this.state.weekItems} />
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