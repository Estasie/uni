import { times } from 'lodash-es';
import React, {useEffect, useState} from 'react';


function DataForSchedule() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const timeArray = [
        '8:30 - 10:00', '10:10 - 11:40', '12:20 - 13:50', '14:00 - 15:30'
    ]
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://localhost:5001/Schedule/GetByScheduleName?weekday=%D0%92%D1%82%D0%BE%D1%80%D0%BD%D0%B8%D0%BA&isEven=false")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
    console.log(items);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          
        <ul>
         
            <li key={items.id}>
            {timeArray[items.time]} {items.dayName}
            </li>
          
        </ul>
      );
    }
  }


export default DataForSchedule;