import React, { Component } from 'react'
import './Recipe.css'

export default class RecipeSearch extends Component {
  render() {
    const {handleChange, value, handleSubmit} = this.props
    return (
    <React.Fragment>
       <div className="container">
         <div className="row">
           <div className="col-10 mx-auto col-md-8 mt-5 text-center">
             <h1 className="style-text text-capitalise">
                Recipe App using {" "}
               <strong className="text-danger">Food2Fork</strong>
               {" "} API
             </h1>
            <form className="mt-4" onSubmit={handleSubmit}>
              <label htmlFor="search" className="text-capitalize">
                type recipes seperated by comma
              </label>

              <div className="input-group">
              <input type="text" name="search" 
              placeholder="chicken,onions,carroters"
              className="form-control"
              id="search-text"
              value={value}
              onChange={handleChange}/>

                <div className="input-group-append">
                <button type="submit"
                className="input-group-text text-white bg-primary">
                <i className="fas fa-search"></i> </button>
                </div>
              

              </div>
            </form>

           </div>
         </div>
       </div>
    </React.Fragment>
    )
  }
}

