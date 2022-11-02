$(document).ready(function () {
  let cleanlist = []
  let basketcontent = document.getElementById('basketcontent')
  let basket = JSON.parse(localStorage.getItem("basket"))
  let baskethtml = ""
  for (let i = 0; i < basket.length; i++) {

    if (basket[i].Name != "" && basket[i].Price != "") {
      cleanlist.push(basket[i])
    }
  }

  let uniqueElem = []
  const unique = cleanlist.filter(element => {
    const isDuplicate = uniqueElem.includes(element.Name);

    if (!isDuplicate) {
      uniqueElem.push(element.Name);
      return true;
    }

    return false;
  });

  let sum = 0
  unique.forEach(element => {

    baskethtml += `<div class="basket-product">
      <div class="item">
        <div class="product-image">
          <img src="${element.Img}" alt="Placholder Image 2" class="product-frame">
        </div>
        <div class="product-details">
          <h1><strong><span class="item-quantity">4</span> x Eliza J</strong> Lace Sleeve Cuff Dress</h1>
          <p><strong>${element.Name}</strong></p>
          <p>Product Code - 232321939</p>
        </div>
      </div>
      <div class="price">${element.Price}</div>
      <div class="quantity">
        <input type="number" value="1" min="1" class="quantity-field">
      </div>
    </div>`

    sum += Number(element.Price.replace( /^\D+/g, ''));
  });
  basketcontent.innerHTML = baskethtml
  let basketsub = document.getElementById("basket-subtotal")
  console.log(basketsub);
  basketsub.innerText = sum
  baskethtml = ""
});



