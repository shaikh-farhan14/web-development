let Api = `https://fakestoreapi.com/products`

const datafetch = async () => {
    try {
        let res = await fetch(Api);
        let data = await res.json();
        storeUI(data);
    } catch (error) {
      
    }
}

const storeUI = (value) => {
    const dataInfo = document.querySelector("#dataInfo");

    value?.forEach((element) => {
       
        const div = document.createElement('div');
        const pricingDiv = document.createElement('div');
        const id = document.createElement('p');
        const img = document.createElement('img');
        const price = document.createElement('p');
        const title = document.createElement('h4');
        const category = document.createElement('p');
        const description = document.createElement('p');
        const rate = document.createElement('p');
        const count = document.createElement('p');
        const button = document.createElement('button');

        img.src = element.image;
        id.innerText = element.id;
        price.innerText = element.price;
        title.innerText = element.title;
        category.innerText = element.category;
        description.innerText = element.description;
        rate.innerText = element.rating.rate;
        count.innerText = element.rating.count;


        div.classList.add('card-div');
        pricingDiv.classList.add('card-price-div');

        button.innerText = 'add'


        button.addEventListener('click', function () {
            cartArr.push(element);
            localStorage.setItem('cartItem', JSON.stringify(cartArr));
            if (cartArr.length && path === '/Project/FakeStore/index.html') {
                cartLength.style.display = 'block'
                cartLength.className = 'cartLength-active';
                cartLength.innerText = cartArr.length
            }
        })



        pricingDiv.append(price, rate, count);

        div.append(img, id, title, description, category, pricingDiv, button);

        dataInfo.append(div);


    });

}
