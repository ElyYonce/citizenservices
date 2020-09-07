import React from 'react';
import ReactDOM from 'react-dom';
import Link from "react-router-dom";
import axios from "axios";
import { dataPageService } from '../../services/datapageservice';
import ServiceCard from './ServiceCard';

class AvalibleServices extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
                 data:{},
                 isLoading:true
                 };
    //this.setCaseInfo = this.props.setCaseInfo.bind(this);
    }
    
    getAvalibleServices = async (event) => {
       const resp = await dataPageService.getDataPage("D_EligibleServicesList", {});
       this.setState({data: resp, isLoading: false});
       //console.log(this.state.data);
   };
    
    //runs when the component is being loaded
    componentDidMount(){
        this.setState({data: this.getAvalibleServices()});
        //console.log(this.state.data);
    }
    
    render(){
        const { data, isLoading } = this.state;
        return (
      <div className="AvailableServices">
        <h2>Avalible Services</h2>     
        {isLoading ? "Loading..." : this.state.data.pxResults.map(service => {
            return <ServiceCard key={service.Id} service={service} setCaseInfo={this.props.setCaseInfo} />;       
            })}
      </div>
        );
    }
}

export default AvalibleServices;