// dom in js document object model
// let li = document.querySelectorAll('li') 
// let h1 = document.querySelector('h1')
// h1.style.backgroundColor=("black")
// h1.style.color=('white')
// //h1.innerHTML="<h1> albert Einstine  </h1>";
// h1.innerText = "rober donway jr "

// let content = document.getElementById('content')
// content.innerText = "thor "
// content.style.border = '2px solid black'
// content.style.display = 'inline'
// content.style.padding = '2px'
// li.forEach((l)=>{
//     l.style.backgroundColor = 'green'
//     l.style.display = 'inline-block'
//     l.style.borderRadius = '25px'
//     l.style.padding = '15px '
//     l.style.margin = '12px'
// })

// const creatlan = (language)=> {
//     const div = document.createElement('div')
//     div.setAttribute('.name')
//     div.setAttribute('#naan')

//     div.style.color = 'orange'
//     document.body.main.appendChild(div)
// }
// creatlan('java')
// let h1 = document.createElement('p')
// h1.innerText = 'hello light '
// document.querySelector('body')
// // div.style.backgroundColor = '#ffff' .appendChild(h1)
// // div.color = '#000'
// // div.style.height = '5px'
// document.body.appendChild(h1)

 function cratemore (langname)  {
    
    const lan = document.createElement('li')
    lan.setAttribute = ('#myid')
    // lan.innerText =  (`${langname}`)
    const text = document.createTextNode(`${langname}`)
    lan.appendChild(text )
    lan.style.color = 'orange'
    const datalist =  document.querySelector('ul').appendChild(lan)
 }

cratemore('python')
// ++++++++++++  example ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function addOptiLanguage(langName){
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(langName))
//     document.querySelector('.language').appendChild(li)
// }
// addOptiLanguage('golang')  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// edit 
// const child = document.querySelector('#myid')
const addingaqr =  document.createElement('h1')
     addingaqr.setAttribute('id', 'value')
     const data = document.createTextNode('my sql')
     addingaqr.appendChild(data)
     document.querySelector('body').appendChild(addingaqr);
   //   document.body(div).appendChild(addingaqr)
// remove  element 
addingaqr.remove()





