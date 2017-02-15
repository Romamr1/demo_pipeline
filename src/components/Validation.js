import React, { Component } from 'react';
import {validations} from '../mock/mock';
import {service} from '../service/service';

export class Validation extends Component {

  render() {  
    return ( 
      <div id="validation" className="validations" onDrop={service.drop} onDragOver={service.allowDrop}> 
        <div className="thad">
          <p>Validation</p>
          ${service.sumP(validations)} 
        </div>                      
        {validations.map((validation, index) =>
          <div key={index} className="validation" draggable="true" onDragStart={service.drag}>
            {validation.num} {validation.name} 
            $.{validation.price}, {validation.date}
          </div>
          )}        
      </div>              
    );
  }
}