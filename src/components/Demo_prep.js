import React, { Component } from 'react';
import {demoPreps} from '../mock/mock';
import {service} from '../service/service';

export class DemoPrep extends Component {
  render() {   
    return (      
        <div className="demoPreps" onDrop={service.drop} onDragOver={service.allowDrop}>
          <div className="thad">
            <p>Demo Prep</p>
            ${service.sumP(demoPreps)} 
          </div>  
          {demoPreps.map((demoPrep, index) =>
            <div key={index} className="demoPrep" draggable="true" onDragStart={service.drag}>
              {demoPrep.num} {demoPrep.name}
              $.{demoPrep.price}, {demoPrep.date}
            </div>
          )}        
        </div>
                  
    );
  }
}