import React from 'react';
import { caseService } from '../../services/caseservices';
import { assignmentService } from '../../services/assignmentservice';
import { PegaForm } from '../pegaform/PegaForm';


class ServiceApplication extends React.Component {
    
    constructor(props) {
    super(props);
    this.state = {
                 data:{},
                 assignmentData:{},
                 assignmentFields:{},
                 isLoading:true,
                 workClass: "",
                 serviceName: "default",
                 service:{}
                 };
    }
    
    getServiceApplication = async (event) => {
        const resp = await caseService.createCase(this.props.service.WorkClass, {});
        this.setState({data: resp, isLoading: true});
        console.log(this.state.data);
        const assignResp = await assignmentService.getAssignment(this.state.data.nextAssignmentID);
        this.setState({assignmentData: assignResp, isLoading: true});
        console.log(this.state.assignmentData);
        const assignFields = await assignmentService.getFieldsForAssignment(this.state.assignmentData);
        this.setState({assignmentFields: assignFields, isLoading: false});
        console.log(this.state.assignmentFields);
    };

    //runs when the component is being loaded
    componentDidMount(){
        this.setState({service:this.props.service});
        //console.log(this.props.service);
        this.setState({data: this.getServiceApplication()});
    }

    render(){
        const { data, isLoading, serviceName,service } = this.state;
        return (
          <div>
           {isLoading ? <h3>{service.ServiceName} Application</h3> : <h3>{this.state.data.etag}</h3>}
           {isLoading ? "" : <PegaForm 
                caseID={this.state.data.ID}
                assignment={this.state.data.nextAssignmentID}
                currAssignmentAction={this.state.assignmentData.actions[0].ID}
                //page={this.props.page}
                view={this.state.assignmentFields.view}
                //caseView={this.props.caseViews[caseID]}
                //header={this.props.viewHeaders[caseID]}
                //loading={this.props.loadingStatus[caseID]}
                //caseStatus={this.props.case ? this.props.case.status : null}
                etag={this.props.case ? this.props.case.etag : this.state.data.etag}
                //updateCurrAssignmentAction={action =>
                  //this.updateCurrAssignmentAction(action)
                //}
                //forceRefresh={this.state.forceRefresh}
                //resetForceRefresh={() => this.resetForceRefresh()}
                //validationErrors={this.props.errors.validationErrors[caseID]}
           
           />}
           {isLoading ? "Loading..." : JSON.stringify(this.state.assignmentFields.view)}
          </div> 
        );
    }
}

export default ServiceApplication;