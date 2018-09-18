import React from 'react';
import Title from './components/Title.js'
import Form from './components/Form.js'
import Weather from './components/Weather.js'

export default class App extends React.Component {
  
     state={
       city: undefined,
       country:undefined,
       temperature:undefined,
       humidity:undefined,
       description:undefined,
       error:undefined,
     } 
   
    getweather =async(e)=>{
      const city=e.target.elements.city.value;
      const country=e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+","+country+"&appid=a6e9e88f8a7dbbf4cf654c46fe012741&units=metric")
    const data = await api_call.json(); 
    console.log(data);
    console.log(city);
    console.log(country);
    if(city && country)
    {
    this.setState({  city: data.name,
                     country: data.sys.country,
                     temperature: data.main.temp ,
                     humidity: data.main.humidity ,
                     description: data.weather[0].description ,
                     error: "",
                    })
   }
   else{

    this.setState({  city: undefined,
      country: undefined,
      temperature: undefined ,
      humidity: undefined ,
      description: undefined ,
      error: "Unable to find weather",
     }) 

   }
                  
                  
                  
                  
                  }

  render(){
  
    return(
      <div>
      <Title />
      <Form getweather={this.getweather}/>
      <Weather
      city={this.state.city}
      country={this.state.country}
      temperature={this.state.temperature}
      humidity={this.state.humidity}
      description={this.state.description}
      error={this.state.error}
      />
      
      </div>
    );
  }
}