import React from 'react';
export default class Form extends React.Component{
    render(){
        return(
            <div class="container"> 
               <form onSubmit={this.props.getweather}>
                   <div class="row"> 
                   <div class="col-md-4"><input type="text" name="city" placeholder="enter city"/></div>
                   <p></p>
                   <div class="col-md-4"><input type="text" name="country" placeholder="enter country"/><p></p></div>
                   <div class="col-md-4"><button>Check-weather</button></div>
                   </div>
               </form>
            </div>
        );
    }
}