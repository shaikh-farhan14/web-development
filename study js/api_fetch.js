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
    let data = await response.json();
    UserInterFace(data) 
}
catch (error){
    console.log('-> ~ ApiCall ~ error;',error)
}
}

    const UserInterFace = (value) => {
    const AllData = document.querySelector('#allData')
    value && value.forEach(element => {
    const div = document.createElement("div")
    const img = document.createElement("img")
    const id  = document.createElement("h4")
    const description = document.createElement("h5")
    const category = document.createElement("h6")
    const price = document.createElement("p")
    const title = document.createElement("p")
    const rate = document.createElement("p")
    const count = document.createElement("p")
    
    div.className = 'card-div'

    count.innertext=element.rating.count;

    img.src=element.image;

    description.innertext=element.description;

    category.innertext =element.category;

    price.innertext = element.price;

    title.innertext = element.title;

    rate.innerText = element.rate;

    div.append(img,id,category,price,rate,count,title,description);

    AllData.append(div);

});
}

bodys.addEventListener("load",apicall())