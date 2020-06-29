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
                 serviceName: "default"
                 };
    }
    
    
    //runs when the component is being loaded
    componentDidMount(){
        var urlParams = new URLSearchParams(window.location.search);
        const workClass = urlParams.get('workClass');
        const serviceName = urlParams.get('serviceName');
        this.setState({serviceName:serviceName})
    }
    
    render(){
        const { data, isLoading, serviceName } = this.state;
        return (
           <h3>{serviceName} Application</h3>
        );
    }
}

export default ServiceApplication;