let mainCon = document.querySelector('main'),
    footerClick = document.querySelector('footer'),
    searchVal = document.querySelector('.searchVal'),
    btnClick = document.querySelector('.btnClick'),
    msg = document.querySelector('.msg')


footerClick.onclick = ()=>{
    footerClick.classList.remove('active')
    mainCon.textContent = ''
}

 btnClick.onclick = ()=>{
    mainCon.textContent = ''
    
   let searchValue = searchVal.value
   searchVal.value =''
    let url =  `https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=uTbPKn6KPBJqplAZk1ijeqdMkaGC8umE`
    for (let i =0; i <70; i++) {
        
    
    fetch(url).then(getdata=>{
        return getdata.json()
    }).then(printdata=>{
        let srcimg =  printdata.data[i].images.original.url
        let div = document.createElement('div')
        let img = document.createElement('img')
    
        mainCon.appendChild(div)
        div.appendChild(img)
        div.classList = "image"
        img.classList = "test"
        img.src = srcimg
    })
    }
    footerClick.classList.add('active')
}




let searchValue = 'sky'


 let url =  `https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=uTbPKn6KPBJqplAZk1ijeqdMkaGC8umE`

 for (let i = 0; i <10; i++) {
     
 
 fetch(url).then(getdata=>{
     return getdata.json()
 }).then(printdata=>{
 
     let srcimg =  printdata.data[i].images.original.url
     let div = document.createElement('div')
     let img = document.createElement('img')
 
     mainCon.appendChild(div)
     div.appendChild(img)
     div.classList = "image"
     img.classList = "test"
     img.src = srcimg
 
 })


 }




