import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StatelessComponent from './StatelessComponent';
import SelectionComponent from "./SelectionComponent";

class App extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }





    onClick(e) {
        console.log(e.target)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">This a Simple React Page</h1>
                </header>

                <p className="App-intro">
                    Intro (needs writing)
                </p>

                {/*'title' is passed as 'props' to 'StatelessComponent*/}
                <SelectionComponent title="Selection"  selectListingAction={this.onClick} />

                {/*'headline' and 'callback' are passed as 'props' to 'StatelessComponent*/}
                <StatelessComponent headline="Today's News" callback={this.onClick}>
                    <p>
                        Lorem ipsum dolor sit amet, ut malorum numquam eam.
                        Vim cibo inani noluisse te, feugiat blandit appellantur ius at, qui at novum nihil deleniti.
                        Platonem inimicus duo cu. Vix no dicunt eleifend cotidieque.
                    </p>
                    <p>
                        Est adipisci appellantur in. Sit cu ullum audire placerat, at dolore
                        constituto referrentur qui. Pro no meliore evertitur,
                        in has tibique disputando neglegentur, ea falli democritum vis.
                    </p>
                </StatelessComponent>
            </div>
        );
    }
}

export default App;
