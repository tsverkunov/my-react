import React, {useEffect, useState} from 'react';
import style from './Footer.module.sass'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.clock}>
                <Clock/>
                <Counter/>
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

// function Counter() {
//     const [count, setCount] = useState(0);
//
//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//             </button>
//         </div>
//     );
// }

// function Counter() {
//     const [count, setCount] = useState(0);
//
//     function handleAlertClick() {
//         setTimeout(() => {
//             alert('You clicked on: ' + count);
//         }, 3000);
//     }
//
//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//             </button>
//             <button onClick={handleAlertClick}>
//                 Show alert
//             </button>
//         </div>
//     );
// }

// function Counter() {
//     const [count, setCount] = useState(0);
//
//     useEffect(() => {
//         document.title = `You clicked ${count} times`;
//     });
//
//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//             </button>
//         </div>
//     );
// }

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            console.log(`You clicked ${count} times`);
        }, 2000);
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}




// function sayHi(person) {
//     const name = person.name;
//     setTimeout(() => {
//         alert('Hello, ' + name);
//     }, 3000);
// }
//
// let someone = {name: 'Dan'};
// sayHi(someone);
//
// someone = {name: 'Yuzhi'};
// sayHi(someone);
//
// someone = {name: 'Dominic'};
// sayHi(someone);

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