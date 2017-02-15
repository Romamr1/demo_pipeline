import React, { Component } from 'react';
import {demo} from '../mock/mock';
import {service} from '../service/service';

export class Demo extends Component {
  render() {    
    return (      
      <div className="demos" onDrop={service.drop} onDragOver={service.allowDrop}>
        <div className="thad">
          <p>Demo</p>
          ${service.sumP(demo)} 
        </div>  
        {demo.map((demo, index) =>
          <div key={index} className="demo" draggable="true" onDragStart={service.drag}>            
            {demo.num} {demo.name}
            $.{demo.price}, {demo.date}
          </div>
        )}        
      </div>        
    );
  }
} 
