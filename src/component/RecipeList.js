import React, { Component } from 'react'
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch1';

export default class RecipeList extends Component {
  render() {
    //console.log(this.props.handleList);
    
    const {recipes, handleDetails, handleChange, value, handleSubmit, error} = this.props;

    return (
      <React.Fragment>
        <RecipeSearch handleChange={handleChange} value={value} handleSubmit={handleSubmit}/>
        <div className="constainer my-5">
           {/** title*/}
           <div className="row">
               <div className="col-10 col-md-6 text-center mx-auto text-uppercase">
                <h1 className="header-text">Recipe List</h1>
               </div>
            </div> 
            {/** title*/}
            <div className="row">
              {error?(<h1 className="text-danger text-center">{error}</h1>):(
                
                    recipes.map(recipe => {
                        return (
                            <Recipe key={recipe.recipe_id} recipe={recipe} handleDetails={handleDetails}/>  
                        )
                    })
                
                )}
            </div>
        </div>
        
        
      </React.Fragment>
    )
  }
}
