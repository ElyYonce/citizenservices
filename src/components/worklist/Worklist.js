import React from 'react';
import ReactDOM from 'react-dom';
import Link from "react-router-dom";
import axios from "axios";
import { dataPageService } from '../../services/datapageservice';

class Worklist extends React.Component {
    
    getWorklist = async (event) => {
       const resp = await dataPageService.getDataPage("D_Worklist", {});
       console.log(resp)
   };
    
    //runs when the component is being loaded
    componentDidMount(){
        const data = this.getWorklist();
    }
    
    render(){
        return (
      <div>
        <h3>This is the Worklist component</h3>
      </div>
        );
    }
}

export default Worklist;