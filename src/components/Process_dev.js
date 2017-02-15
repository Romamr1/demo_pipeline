import React, { Component } from 'react';
import {defs} from '../mock/mock';
import {service} from '../service/service';

export class ProcessDef extends Component {

  render() {  
    return ( 
      <div id="processDef" className="defs" onDrop={service.drop} onDragOver={service.allowDrop}> 
        <div className="thad">
          <p>Process Def</p>
          ${service.sumP(defs)} 
        </div>                      
       	{defs.map((def, index) =>
       		<div key={index} className="def" draggable="true" onDragStart={service.drag}>
            {def.num} {def.name} 
            $.{def.price}, {def.date}
          </div>
       		)}    		
      </div>           		
    );
  }
}

