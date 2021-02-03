import React, { Component } from "react";

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        event: "Контрольная точка 1.1",
        class: "Товароведение и экспертиза непродовольственных товаров",
        progress: 60,
        deadline: "2 дня",
      },
    ];
  }

  render() {
    return (
      <div className="card_wrapper">
        <div className="card__info">
          <span className="event">{this.state[0].event}</span>
          <span className="card__class">
          {this.state[0].class}
          </span>
          <div className="card__progress_wrapper">
            <span className="card__progress">ПРОГРЕСС ВЫПОЛНЕНИЯ</span>
            <div className="card__progress_prs">
              <span className="card__progress_total" />
              {/* {
               let progressLine= document.querySelector('.card__progress_total');
               progressLine.style.width= 
              } */}
              <span className="card__progress">{this.state[0].progress}%</span>
            </div>
            <span className="card__progress_value" style={{width: this.state[0].progress +"%"}}/>
            <span className="card__progress">Оставшееся время {this.state[0].deadline}</span>
          </div>

        </div>
      </div>
    );
  }
}
