import React from 'react'

const Search = ({onChange, handleSubmit}) => {
    return (
        <div className="container">
            <div className = "row">
               <section className = "col s4 offset-s4 text">
                   <form onSubmit = {handleSubmit} className = "form" >    
                        <input onChange = {onChange} type="text" placeholder = "Search Your Movie Here..."/> 
                        <input type="submit" className = "waves-effect waves-light btn-small button"/>
                   </form>
                </section>         
            </div>
        </div>   
    )
}

export default Search