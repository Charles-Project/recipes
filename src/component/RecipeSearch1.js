import React, { Component } from 'react'
import './Recipe.css'

export default class RecipeSearch extends Component {
  render() {
    const {handleChange, value, handleSubmit} = this.props
    return (
    <React.Fragment>
       <div className="container myfirst mx-auto">
         <div className="row">
           <div className="col-10 mx-auto col-md-8 mt-5 text-center">
             <h1 className="Dancing-Script text-capitalise text-center">
               Recipe App Using {" "}
               <strong className="text-danger">Food2Fork</strong>
               {" "} API
             </h1>
            <form className="mt-4" onSubmit={handleSubmit}>
              <label htmlFor="search" className="text-capitalize">
                type recipes seperated by comma
              </label>

              <div className="search-box mx-auto">
              <input type="text" name="search" 
              placeholder="chicken,onions,carroters"
              className="search-txt"
              id="search-text"
              value={value}
              onChange={handleChange}/>

                <button type="submit"
                className="search-btn">
                <i className="fas fa-search"></i> </button>

              </div>
            </form>

           </div>
         </div>
       </div>
    </React.Fragment>
    )
  }
}

