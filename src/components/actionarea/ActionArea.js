import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Worklist from '../worklist/Worklist';
import ReportViewer from '../reportviewer/ReportViewer';
import AvalibleServices from '../availableservices/AvalibleServices';
import ServiceApplication from '../serviceapplication/ServiceApplication';
import { userService } from '../../services/userservice';

class ActionArea extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
                 data:{},
                 isLoading:true,
                 CaseInfo: {}
                 };

    this.setCaseInfo = this.setCaseInfo.bind(this);
    }

    setCaseInfo(inputCaseInfo) {
         //console.log(inputCaseInfo);
         this.setState({CaseInfo: inputCaseInfo});
         //console.log(this.state.CaseInfo);
    }
    
   
   login = async (event) => {
       const resp = await userService.login();
   };
    
   //runs when the component is being loaded
   componentDidMount(){
       //login using the credentials defined in the services/creds file
       this.login();
       //setInterval(this.CaseInfo, 1000);
   }
    
   render(){
     return (
      <div className="ActionArea">   
       <Switch>
         <Route path="/reports">
              <ReportViewer />
         </Route>
         <Route path="/worklist">
              <Worklist />
         </Route>
         <Route path="/serviceapplication">
              <ServiceApplication service={this.state.CaseInfo}/>
         </Route>
         <Route path="/">
              <AvalibleServices setCaseInfo={this.setCaseInfo} />
          </Route>          
       </Switch>
     </div>
     );
   }

}

export default ActionArea;
