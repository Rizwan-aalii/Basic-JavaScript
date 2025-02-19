const readyurl = 'https://api.github.com/users/hiteshchoudhary' ;



const xhr = new XMLHttpRequest();
// console.log(xhr)
 //   open() has been called.
xhr.open('GET', readyurl)       

 //  track a every single state 
xhr.onreadystatechange = function () {   
     //   to return the loading status of the current documen
    console.log(xhr.readyState)             
    if (xhr.readyState === 4){
     // responseText holds partial data.  and JSON.parse this is for change a data type string to object 
        const datais =  JSON.parse(this.responseText )   
        console.log(datais.followers)        
}
    
}
 // send() has been called, and headers and status are available.
xhr.send()    




// Create a div element
const div = document.createElement('div');

// Set the height and width
div.style.height = '20px';
div.style.width = '2wv';
div.style.color = 'white'

// Set the inner HTML to the value of datais.followers
div.innerHTML = xhr.followers;
div.style.backgroundColor = 'red'

// Query the main element and append the div to it
const mainElement = document.querySelector('main');
if (mainElement) {
    mainElement.appendChild(div);
} else {
    console.error('Main element not found');
}
