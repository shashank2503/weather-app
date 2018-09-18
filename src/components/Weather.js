import React from 'react';
export default class Weather extends React.Component{
    render(){
        return(
            <div> 
                
                
                {this.props.city && <p>City:<b>{this.props.city}</b></p>}
                {this.props.country && <p>Country:<b>{this.props.country}</b></p>}
                {this.props.temperature && <p>Temperatute:<b>{this.props.temperature}(degree celcius)</b></p>}
                {this.props.humidity && <p>Humidity:<b>{this.props.humidity}</b></p>}
                {this.props.description && <p>Description:<b>{this.props.description}</b></p>}
                {this.props.error && <p><b>{this.props.error}</b></p>}

        
            </div>
        );
    
    }
}