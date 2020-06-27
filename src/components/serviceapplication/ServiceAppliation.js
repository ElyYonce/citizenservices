import React from 'react';
import ReactDOM from 'react-dom';
import Link from "react-router-dom";

class ServiceApplication extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
                 data:{},
                 isLoading:true
                 };
    }
    
    getServicesApplication = async (event) => {
       
   };
    
    //runs when the component is being loaded
    componentDidMount(){
        this.setState({data: this.getAvalibleServices()});
        console.log(this.state.data);
    }
    
    render(){
        const { data, isLoading } = this.state;
        return (
      <div className="AvailableServices">
        <h2>Avalible Services</h2>
        {isLoading ? "Loading..." : this.state.data.pxResults.map(service => {
            return <ServiceCard key={service.Id} service={service} />;       
            })}
      </div>
        );
    }
}

export default ServiceApplication;