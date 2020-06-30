import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import { dataPageService } from '../../services/datapageservice';

class AvalibleServices extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {};
    //this.setCaseInfo = this.props.setCaseInfo.bind(this);
    }  
    
    //runs when the component is being loaded
    componentDidMount(){
        
    }
    
    render(){
        const service = this.props.service;
        
        return (
      <div className="ServiceCard">
        <div className={
                   service.Ineligible.localeCompare("true") ? "ServiceCardHeader" : "ServiceCardHeaderIneligible"
                        }>
          <div className="ApplyContainer">
            <Link to='/serviceapplication'
             onClick={() => this.props.setCaseInfo(service)}> Apply </Link>
          </div>
          <div className="ServiceTitle">
            <h5>{service.ServiceName}</h5>
          </div>
        </div>
        <div className="ServiceCardBody">
          <p>Benefit: {service.Benefit}</p>
          <p>Receive Time: {service.ReceiveTime}</p>
          <p>Processing Time: {service.ProcessingTime}</p>
        </div>
      </div>
        );
    }
}

export default AvalibleServices;