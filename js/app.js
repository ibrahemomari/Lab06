'use strict';

// decleartions of objects
let Seattle,Tokyo,Dubai,Paris,Lima;
// array that have the cookies per hour
let CookiesPerHours;
let Hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
// variables related CPH fnction
let dayTime , finalArray=[];

// Seattle object
Seattle={
    name:'Seattle',
    min:23 ,
    max:65,
    avg:6.3,

    // ACPC=[],
    
    ACPC: function ()
    {
        CPH(this.min,this.max,this.avg,this.name)
        
    } 

};


let sum=0,x=0;

function CPH(minmum,maximum,average,location)
{
    let format=[];
    let li=[];
    let randomNumber;
    
    for (let i = 0; i < Hours.length; i++) {
        randomNumber=Math.floor((Math.random() * (maximum - minmum) + minmum)*average);
        format[i]=Hours[i]+' : '+randomNumber+' cookies';
        console.log(format[i]);
    }

    
    
    let parent=document.getElementById('cookies');
    let h1=document.createElement('h1');
    parent.appendChild(h1);
    h1.textContent=location;
    let ul=document.createElement('ul');
    parent.appendChild(ul);
    console.log(parent);
    

    
    for (let i = 0; i < format.length; i++) {
        
        li[i]=document.createElement('li');
        ul.appendChild(li[i]);
        li[i].textContent=format[i];
    }
    

}

Seattle.ACPC(); 




// Tokyo object
Tokyo={
    name:'Tokyo',
    min:3 ,
    max:24,
    avg:1.2,

    // ACPC=[],
    
    ACPC: function ()
    {
        CPH(this.min,this.max,this.avg,this.name)
        
    } 
    
}

Tokyo.ACPC()


// Tokyo object
Dubai={
    name:'Dubai',
    min:11 ,
    max:38,
    avg:3.7,

    // ACPC=[],
    
    ACPC: function ()
    {
        CPH(this.min,this.max,this.avg,this.name)
        
    } 
    
}

Dubai.ACPC()


// Tokyo object
Paris={
    name:'Paris',
    min:20 ,
    max:38,
    avg:2.3,

    // ACPC=[],
    
    ACPC: function ()
    {
        CPH(this.min,this.max,this.avg,this.name)
        
    } 
    
}

Paris.ACPC()




// Lima	 object
Lima={
    name:'Lima	',
    min:2 ,
    max:16,
    avg:4.6,

    // ACPC=[],
    
    ACPC: function ()
    {
        CPH(this.min,this.max,this.avg,this.name)
        
    } 
    
}

Lima.ACPC()