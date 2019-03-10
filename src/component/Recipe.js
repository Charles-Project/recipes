import React, { Component } from 'react'
import './Recipe.css'

export default class Recipe extends Component {
  render() {
    //console.log(this.props.handleDetails);

      const {handleDetails} = this.props

        const {
        image_url, 
        title, 
        publisher,
        source_url,
        recipe_id
        } = this.props.recipe;
        
        
        //console.log(image_url,title)
    return (
      <React.Fragment>
          <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
              <div className="card">
                  <img src={image_url} alt="pic" className="img-card-top"
                  style={{height:"14rem"}}/>
                  <div className="card-body text-capitalize">
                    <h6 className="text-warning Tangerine">{title}</h6>
                    <h6>provided by {publisher}</h6>
                  </div>
                  <div className="card-footer">
                      <button type="button"
                      className="btn bblue text-capitalize"
                      onClick={()=>handleDetails(0,recipe_id)}>details</button>
                      <a href={source_url} className="btn ggreen mx-2 text-capitalize"
                      target="_blank" rel="noopener noreferrer">recipe url</a>
             
                  </div>
                 </div>
          </div>
      </React.Fragment>
    )
  }
}
