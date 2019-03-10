import React, { Component } from 'react';
import { recipe } from "../tempDetails";

export default class RecipeInfo extends Component {
  
 /* 
  constructor(props) {
    super(props)
    //console.log(this.props)
    this.state = {
       recipe: recipe,
       url:`https://www.food2fork.com/api/get?key=962d990ae0dff8a8161fb875e49b9ee1&rId=${this.props.id}`
    }
  }

  
 

  async componentDidMount(){
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      //console.log(Jsondata);
      this.setState({
        recipe: jsonData.recipe
      });
     }
     catch(error) {
       console.log(error)
     }
  }
 // */

 state = {
   recipe: recipe
 }

 async componentDidMount(){
   //console.log(this.props.id);
   const me = await fetch(`https://www.food2fork.com/api/get?key=962d990ae0dff8a8161fb875e49b9ee1&rId=${this.props.id}`)
    const jsonMe = await me.json();
    //console.log(jsonMe);
    this.setState({
      recipe:jsonMe.recipe
    })
  }

 
 
  
  render() {
    //console.log(this.state.recipe);
    const {handleIndex} = this.props;
    const {image_url,publisher,publisher_url,source_url,
    title,ingredients} = this.state.recipe;
    //console.log(ingredients);
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-6 mx-auto my-3">
              <button type="button" className="btn btn-warning mb-5 text-capitalize"
              onClick={()=>handleIndex(1)}>
                back to recipe
              </button>
              <img src={image_url} alt="recipe"
              className="d-block w-100"/>
            </div>
            {/**details */}
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className="text-warning text-capitalize header-text">
                provided by {publisher}
              </h6>
              <a href={publisher_url}
              className="btn btn-primary mt-2 text-capitalize"
              target="_blank"
              rel="noopener noreferrer">publisher webpage</a>

              <a href={source_url} 
              className="btn btn-success mx-3 mt-2 text-capitalize"
              target="_blank"
              rel="noopener noreferrer">recipe url</a>

              <ul className="list-group mt-4">
                <h2 className=" mt-3 mb-4 text-capitalize">ingredients</h2>
                {
                  ingredients.map((item,index) => {
                    return(
                      <li className="list-group-item" key={index}>
                      {item}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
