import React, { Component } from 'react'
import './Preloader.css'

export default class Preloder extends Component {
  render() {
      const { efe } = this.props;
      const dis = !efe ? (
        <div className="loader">
            <div className="face face1">
            <div className="circle"></div>
        </div>

            <div className="face face2">
            <div className="circle"></div>
        </div>
      </div>
        ):(null)

    return (
    <div className="con">
        {dis}
    </div>
    )
  }
}
