//localStorage.removeItem('todoList');



/****************************************
*										*
*		Load/create localstorage		*
*										*
****************************************/

todoList = localStorage.getItem('todoList');
if(	todoList	==	null){	todoList	=	'{"lastEdited":"'	+	getTime().eventId	+	'","events":[]}';	};
localStorage.setItem('todoList',todoList);

//todoList = localStorage.getItem('todoList');
//console.log(todoList);
todoList	=	JSON.parse(todoList);




function getEvents(){
	
	
	return todoList.events;
	
}


/****************************************
*										*
*		Potential error messages		*
*										*
****************************************/

messages	=	{
	
	"titleIsShort"			:	"Esemény neve túl rövid",
	"descriptionIsShort"	:	"Leírás szövege túl rövid",
	"dateIsNotSet"			:	"Nem adtál meg dátumot",
	"timeIsNotSet"			:	"Nem adtál meg időt",
	"eventIsOccupied"		:	"Az időpont foglalt",
	"dateTimeIsNotValid"	:	"Dátum formátuma nem megfelelő",
	"parameterNotAvalible"	:	"Hibás paraméter",
	"eventKeyNotExists"		:	"Eseményazonosító nem létezik"

};	





/********************************
*								*
*		localstorage Update		*
*								*
********************************/

function putInLocalStorage(){
	
	todoList.lastEdited	=	getTime().eventId;
	todoList.events	=	todoList.events.sort((a, b) => (a.eventId > b.eventId) ? 1 : -1);
	todoListTemp	=	JSON.stringify(todoList);
	localStorage.setItem('todoList',todoListTemp);

}




/********************************
*								*
*		Get dateTime object		*
*								*
********************************/

function getTime(data){

	if(typeof data	==	"undefined"	){
	
		tempDate	=	new Date();
	
	}
	else{
	
		tempDate	=	new Date(data);
	
	}
	
	
	if( tempDate	==	'Invalid Date'){
	
		return {eventId:false};
		
	}
	
	
	y		=	tempDate.getFullYear();
	m		=	tempDate.getMonth()+1;
	if(m<10){	m	=	"0"	+	m;	}
	d		=	tempDate.getDay()+1;
	if(d<10){	d	=	"0"	+	d;	}
	
	h		=	tempDate.getHours();
	if(h<10){	h	=	"0"	+	h;	}
	i		=	tempDate.getMinutes();
	if(i<10){	i	=	"0"	+	i;	}

	
	
	
	date		=	y	+	"-"	+	m	+	"-"	+	d;
	time		=	h	+	":"	+	i;
	datetime	=	date	+	" "	+	time;
	return	{date:date,time:time,datetime:datetime,eventId:tempDate.getTime()};

}
