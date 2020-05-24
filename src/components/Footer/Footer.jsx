import React from 'react';
import './Footer.module.sass';
import style from './Footer.module.sass'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.clock}>
                <Clock/>
                {/*<Toggle/>*/}
            </div>
        </footer>
    )
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h5>{this.state.date.toLocaleTimeString()}</h5>
            </div>
        );
    }
}



// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};
//
//     // Эта привязка обязательна для работы `this` в колбэке.
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }
//
//   render() {
//     return (
//         <button onClick={this.handleClick}>
//           {this.state.isToggleOn ? 'Включено' : 'Выключено'}
//         </button>
//     );
//   }
// }



export default Footer;