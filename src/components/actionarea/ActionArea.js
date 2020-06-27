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
import { userService } from '../../services/userservice';

class ActionArea extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
                 data:{},
                 isLoading:true,
                 CaseInsKey: "",
                 AssignmentInsKey: "",
                 AssignmentActionInsKey: ""
                 };
    }
    
   
   login = async (event) => {
       const resp = await userService.login();
   };
    
   //runs when the component is being loaded
   componentDidMount(){
       //login using the credentials defined in the services/creds file
       this.login();
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
         <Route path="/">
              <AvalibleServices />
          </Route>          
       </Switch>
     </div>
     );
   }

}

export default ActionArea;
