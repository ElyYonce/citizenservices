import React from 'react';
import { caseService } from '../../services/caseservices';


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
    
    getServiceApplication = async (event) => {
        const resp = await caseService.createCase(this.props.service.WorkClass, {});
        this.setState({data: resp, isLoading: false});
        console.log(this.state.data);
    };

    //runs when the component is being loaded
    componentDidMount(){
        this.setState({service:this.props.service})
        //console.log(this.props.service);
        this.setState({data: this.getServiceApplication()});
    }
    
    render(){
        const { data, isLoading, serviceName,service } = this.state;
        return (
          <div>
           <h3>{service.ServiceName} Application</h3>
           {isLoading ? "Loading..." : this.state.data.ID}
          </div> 
        );
    }
}

export default ServiceApplication;