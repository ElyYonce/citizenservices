import React from 'react';
import ReactDOM from 'react-dom';
import Link from "react-router-dom";

class ServiceApplication extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
                 data:{},
                 isLoading:true,
                 workClass: "",
                 serviceName: "default",
                 service:{}
                 };
    }
    
    
    //runs when the component is being loaded
    componentDidMount(){
        this.setState({service:this.props.service})
        console.log(this.props.service);
    }
    
    render(){
        const { data, isLoading, serviceName,service } = this.state;
        return (
           <h3>{service.ServiceName} Application</h3>
        );
    }
}

export default ServiceApplication;