import React, { Component } from 'react'
import './Loader.css'

export default class Loader extends Component {
  render() {
      const { efe } = this.props;
        const dis = !efe ? (
             <div id="overlay">
        <div className="spinner">
            <p>loading</p>
        </div>
      </div>
        ):(null)
            

    return (
     <React.Fragment>
        {dis}
     </React.Fragment>
    )
  }
}
