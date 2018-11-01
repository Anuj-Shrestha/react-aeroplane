import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Flight, { Rect } from 'react-flight/dom'


class App extends Component {
  render() {
    return (
      <Flight interactive ref={flight => (this.flight = flight)}>
        <Flight.Frame duration={3000} source interactive>
          <div className="keyframe">
            <Rect
              name="head-1"
              radius={5}
              style={{
                right: -60,
                top: 20,
                width: 50,
                height: 10,
              }}
            >
              <ion-icon name="ios-airplane"
                style={{
                  display: 'inline-block',
                  transform: 'rotate(180deg)'
                }}

              ></ion-icon>

            </Rect>

            <div
              id="brace-1"
              className="brace-1"
              style={{
                color: '#95A2AA',
                top: 30,
                left: -50,
                fontSize: 30,
              }}
            >
              <i class="fa fa-fighter-jet" aria-hidden="true"></i>
            </div>
            <div
              id="brace-2"
              className="brace-2"
              style={{
                color: '#95A2AA',
                top: 180,
                left: -50,
                fontSize: 30,
              }}
            >
              {'}'}
            </div>
          </div>

        </Flight.Frame>

        <Flight.Frame duration={3000}>
          <div className="keyframe">
            <Rect
              name="head-1"
              radius={5}
              style={{
                left: -60,
                top: 20,
                width: 50,
                height: 10,
              }}
            >
              <ion-icon name="ios-airplane"
                style={{
                  display: 'inline-block',
                  transform: 'rotate(90deg)'
                }}
              ></ion-icon>

            </Rect>>

            <div
              id="brace-1"
              className="brace-1"
              style={{
                color: '#95A2AA',
                top: 30,
                left: 1000,
                fontSize: 30,
              }}
            >
              <i class="fa fa-fighter-jet" aria-hidden="true"></i>
            </div>
            <div
              id="brace-2"
              className="brace-2"
              style={{
                color: '#95A2AA',
                top: 190,
                left: 20,
                fontSize: 30,
              }}
            >
              {'}'}
            </div>
          </div>

        </Flight.Frame>

      </Flight>
    );
  }
}

export default App;
