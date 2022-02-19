
/********************************
*								*
*		Create new event		*
*								*
********************************/

function createEvent(evt){
	
	




	evt.active	=	"true";
	evt.eventId	=	getTime(evt.date).eventId.toString();

	msg	=	[];
	
	success	=	true;
	

	if(evt.title.length	<	3){
	
		msg.push(messages.titleIsShort);
		success	=	false;
	
	}

	if(evt.description.length	<	5){
	
		msg.push(messages.descriptionIsShort);
		success	=	false;
		
	}
	
	if(getTime(evt.date).eventId	==	false){ 
	
		msg.push(messages.dateTimeIsNotValid);
		success	=	false;
		
	}	
	

	if(Object.keys(todoList.events).length	==	0){

	
	

		if(msg.length	==	0){
			
			todoList.events.push(evt);
				obj	=	{	success:"true",	eventId:getTime(evt.date).eventId.toString()	};
				putInLocalStorage(todoList);
				
		}
		else{
				
				obj	=	{	success:"false",	eventId:getTime(evt.date).eventId.toString(),	msg:msg	};
			
			
			
		}
		
	}
	
	else{
			
		for(i=0; i < Object.keys(todoList.events).length;	i++){


			

			if(todoList.events[i].date	==	evt.date){

				msg.push(	messages.eventIsOccupied	);
				success	=	"false";
				
				break;

			}

		}

		obj	=	{	success:success.toString(),	eventId:getTime(evt.date).eventId.toString()	};

		if(msg.length	==	0){

			todoList.events.push(evt);
			putInLocalStorage(todoList);

		}
		else{

			obj.msg	=	msg;
			
		}
		
		
		
		
	}
	//console.log(msg.length);
	return obj;
	



}



















/************************************
*									*
*		search event existence		*
*									*
************************************/



function searchEvent(evtId){
	
	msg	=	[];



		grabbedEvent	=	0;
		grabbedEventKey	=	null;
	
	//console.log( todoList.events[0]);
	todoList.events.forEach(function(evt,key) {  
	

		
		if(evt.eventId	==	evtId){
			//alert(1);
			grabbedEventKey	=	key;
			grabbedEvent	=	evt;
			//return false;
		}
		
	})
	
	
	if(grabbedEvent	==	0){
		
		msg.push(messages.eventKeyNotExists);
		success	=	false;
	}
	else{
		
		success	=	true;
		//modifyEvent(grabbedEvent);
	
	}
	
	
	
	
	obj	=	{success:success,eventId:evtId,index:grabbedEventKey};

	if(msg.length	>	0){	
	
		obj.msg	=	msg;
	
	}
	else{
		
		obj.evetResult	=	grabbedEvent;

		
	}
	

	return obj;

	

}



/************************************
*									*
*		Modify existing event		*
*									*
************************************/


function modifyEvent(evt){
	
	

	msg		=	[];
	object	=	searchEvent(evt.eventId);
	success	=	object.success;
	index	=	object.index;	
	
	delEvt	=	false;
	
//alert(evt.type);

	if(success	==	true){
		
		
		if(	evt.type	==	"date"	){
	
			if(	getTime(evt.value).eventId	==	false){		//Valid dátum
				
				success	=	false;
				msg.push(messages.dateTimeIsNotValid);
				
			}
	
			grabbedEvent	=	0;
			
			todoList.events.forEach(function(evt_temp) {  
				
				if(evt_temp.date == evt.value){
		
					grabbedEvent	=	evt_temp;
					return false;
				}
				
	
			})
			
			
				
			
			
			if(grabbedEvent	!=	0){
				
				msg.push(messages.eventIsOccupied);
				success	=	false;
				
			}
	

		}
		else if(	evt.type	==	"title"	){
			
			if(evt.value.length	<	3){
		
				msg.push(messages.titleIsShort);
				success	=	false;
		
			}
	
		}
		else if(	evt.type	==	"description"	){
			
			if(evt.value.length	<	5){
		
				msg.push(messages.descriptionIsShort);
				success	=	false;
		
			}
	
		}
		else if(	evt.type	==	"active"	){




			

			if (typeof evt.value != "boolean") {
				
				
				msg.push(messages.parameterNotAvalible);
				success	=	false;
					
			}else{
				
				
				if ( evt.value ==	false	&&	todoList.events[index].active	==	"false") {
					
					delEvt	=	true;
				//	delete todoList.events[index];
					 todoList.events.splice(index, 1)
				}
				else{
					
					evt.value	=	evt.value.toString();
					
				}	
			}
					

		}
		else if(	["dateTime","title","description","active"].includes(evt.type)	== false	){
			
			msg.push(messages.parameterNotAvalible);
			success	=	false;
			
		}
		

		if(success==	true){


			if(	delEvt	==	false){
	
				todoList.events[index][evt.type]	=	evt.value;
				
				if(	evt.type	==	"date"	){		todoList.events[index].eventId	=	getTime(evt.value).eventId;	}
				
			}
			
			putInLocalStorage();
		
		}
	
		object	=	{success:success,eventId:evt.eventId};
		
		if(msg.length	>	0){
			
			object.msg	=	msg;
			
		}
		
		
		
		
	}

	if(success	==	true){
		
		putInLocalStorage();
		
	}
	
	
	return object;
	
}










/***********************************************************
*															*
*				search events								*
*															*
*															*
*															*
*					Input object:							*
*		{searchWord:"event",	eventStatus:false}			*
*															*
*															*
*															*
*															*
************************************************************/



function filterEvents(input){

	result = todoList.events.filter( obj => {
		if (
				(
				obj.title.toLowerCase().includes(input.searchWord.toLowerCase())	||
				obj.description.toLowerCase().includes(input.searchWord.toLowerCase())	||
				obj.date.toLowerCase().includes(input.searchWord.toLowerCase())
				)	&&
				
				obj.active	==	input.eventStatus.toString()
		) { return true}
	
		else {
		return false} 

		})
		
	return result;
}
