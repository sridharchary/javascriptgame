 function GenerateRandomNumbers(){
	mainRoot=document.getElementById("root");
	tbody=document.createElement("tbody");
		data_len=[];
		correct_data=[];
			 var count=0;
	for(var i=0;i<4;i++){
		row=document.createElement("tr");
		for(var j=0;j<4;j++){		
			col=document.createElement("td");
			col.setAttribute("data-number","false");
			//click event start here		
			col.addEventListener("click",function(e){
					count+=1;					
				 e.target.style.background="yellow";
				 data=e.target.getAttribute("data-number");
				 e.target.innerHTML=data;		
				 e.target.style.pointerEvents='none';
				 data_len.push(e.target);			 								
			
				 if(data_len.length>=2)
				 {				 
						 var enter=false;				 
						 for(var c=0;c<data_len.length;c++){							 
							 if(data_len[data_len.length-2].getAttribute("data-number")==e.target.getAttribute("data-number"))
							 {				
								e.target.style.pointerEvents='none';								
								data_len[data_len.length-2].style.pointerEvents='none';
								data_len[data_len.length-2].setAttribute("data-revel","true");					 
								e.target.setAttribute("data-revel","true");		
								data_len.splice(0,data_len.length);							
								 enter=false;								 
							 }
							 else
							 {											
								data_len[data_len.length-2].style.pointerEvents='auto';
								e.target.style.pointerEvents='auto';															
								enter=true
							 }
							}	
								
				 if(enter==true)
				 {						
					data_len.splice(0,data_len.length);					
					dom=document.querySelectorAll("table tr td");										
					if(count>=2){
						for(var k=0;k<dom.length;k++)
						{
							dom[k].style.pointerEvents='none';
						}						
						count=0;			
					setTimeout(function(){NumberToggle(e);},1000);						
					}
										
				 }
				}	 
			});
			row.appendChild(col);			
		}	
		tbody.appendChild(row);
	}	
		mainRoot.appendChild(tbody);	
		callRandom();
		document.getElementById("generate").disabled = true;
 }
 function NumberToggle(e)
 {
	 			
	dom=document.querySelectorAll("table tr td");
	data_count=[];
	data=e.target.getAttribute("data-number");
	
		for(var i=0;i<dom.length;i++)
		{			
		dom[i].style.pointerEvents='auto';
		if(dom[i].getAttribute("data-revel")=="true")
		{
			dom[i].style.pointerEvents='none';			
			dom[i].style.background="yellow";
			data_count.push(dom[i]);			
		}
		else
		{			
			dom[i].style.background="aqua";
			dom[i].innerHTML="";
		}						
		}
	successMessage();	 
 }
 function successMessage()
 {
	 var levelCompleteCheck=false;
	 dom=document.querySelectorAll("table tr td");
	 count_data=[];
	 for(var i=0;i<dom.length;i++)
	 {
		 if(dom[i].getAttribute("data-revel")=="true")
		 {
			 count_data.push(dom[i]);
			 levelCompleteCheck=true
		 }
	 }
	 if(levelCompleteCheck==true && count_data.length>=12)
	 {
		// alert("you win");
	 }
 }
 function callRandom(){
	 var arr=[0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7];	
	 
	 var data=document.querySelectorAll("table tr td");	 
		 for(var j=0;j<data.length;j++){				
		    len=Math.floor(Math.random()*arr.length);												
			 if(data[j].getAttribute('data-number')=="false"){				 				 
				 if(arr.length>0){											
					data[j].setAttribute('data-number',arr[len]);					
					arr.splice(len,1);												
				 }
					
					
			}
		 }		 	 	 
 }