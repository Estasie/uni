import React, {Component} from 'react';
import '../Navigation/UserInfo/UserInfo.scss';

class MyComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        lesson: []
      };
    }
  
    componentDidMount() {
      fetch("https://localhost:5001/User/GetAllUsers")
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

  
    render() {
      const { error, isLoaded, items } = this.state;
      console.log(this.state.lesson);
      if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Понимание происходит...</div>;
      } else {
        return (
            
                <button type="button">{items[0].fullName}</button>
            
    
            
          
        );
      }
    }
  }

  export default MyComponent;