
let elem;
export let service = {}

	service.drag = function(ev) {		
		elem = ev.target;		
	}

	 service.drop = function(ev) {
	  ev.preventDefault();   
	  ev.target.parentNode.insertBefore(elem, ev.target);
	}  

	service.allowDrop = function(ev) {
	  ev.preventDefault();
	} 

	service.sumP = function(ar) {
	  let sum=0;      
	  for (let i=0; i<ar.length;i++) {        
	    sum+=Number(ar[i].price);        
	  }
	  return sum;
	}    

