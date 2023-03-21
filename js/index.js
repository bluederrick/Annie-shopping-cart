
const product = [
  {
    id: 001,
    image: './image001.jpeg',
    title: 'casual bags',
    price: '20,000 '
  },
  {
    id: 002,
    image: '',
    title: ' casual foot wears',
    price: '10,000 '
  },
  {
    id: 003,
    image: 'image008.jpeg',
    title: ' casual sandals',
    price: '10,000 '
  }

]

const categories = [product.map((item) => {
  return item
})]

let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
  const { image, title, price } = item

  return (
    `<div class='img-box'>
    <img class="images" src=${image} </img
    <div/>
    <div class='bottom'>
    <p> ${title}</p>
    <h2>$ . ${price}.00</h2> +
    <button onclick=addtocart("+(i++)+")"> add to cart</buttom>
    </div>
    </div>
    `)
}).join('')

const cart = [];

let j = 0

if (cart.length === 0) {
  document.getElementById(cart).innerHTML = 'cart is empty'
}
else {
  document.getElementById(cart).innerHTML = cart.map((items) => {
    const { image, price, title } = items

    return (`
    <div class='cart-item'>
    <div class='row-img'>
    <img class ='rowimg' src=${image} width="200">
    </div> 
    <p style='font-size:12px'> ${title}</p>
    <h2 style='font-size:20px'># ${price}.00 </h2>` +
      "< i class=' fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"

    )
  }).join('');
}

function addcart(a) {
  cart.push({ categories[a]});
  displaycart()
}