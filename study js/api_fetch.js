const bodys = document.querySelector('body')

const api = 'https://fakestoreapi.com/products'

const apicall = async () => {

/*
 fetch(api)
.then((response) => response.json())
.then((response)  => console.log(response))
.catch((err) => conole.log (err)  )
*/ 

try{
    let response = await fetch(api);
    let data = await response.json;
    UserInterFace(data) 
}
catch{
    console.error('-> ~ ApiCall ~ error;',error)
}
}

const UserInterFace = (value) => {
const AllData = document.querySelector('#allData')
value && value.forEach(element => {
    console.warn('-> ~ UserInterface ~ element;', element)
    const div = document.createElement("div")
    const img = document.createElement("img")
    const id  = document.createElement("h4")
    const description = document.createElement("h5")
    const category = document.createElement("h6")
    const price = document.createElement("p")
const title = document.createElement("p")
const rate = document.createElement("p")
const div = document.createElement("div")
const div = document.createElement("div")






});

}