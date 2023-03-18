const ProductDetails=[
    {
        name:"Cartoon Astronaut T-Shirts",
        price: 1889
    },
    {
        name:"Green Leaves T-Shirts",
        price: 1799
    },
    {
        name:"Red Rose T-Shirts",
        price: 2999
    },
    {
        name:"Pink Butterfly T-Shirts",
        price: 2599
    },
    {
        name:"Flower & Moon T-Shirts",
        price: 1200
    },
    {
        name:"Thug Life T-Shirts",
        price: 3222
    },
    {
        name:"Sweet Plazo",
        price: 1200
    },
    {
        name:"Romantic Moon T-Shirts",
        price: 1299
    },
    {
        name:"Blue Shirt",
        price: 1200
    },
    {
        name:"Gray Shirts",
        price: 799
    },
    {
        name:"Holly White Shirts",
        price: 998
    },
    {
        name:"Green Brown Check T-Shirts",
        price: 1799
    },
    {
        name:"Denim Blue Shirt",
        price: 2999
    },
    {
        name:"Formal Sorts",
        price: 1589
    },
    {
        name:"Brown Cargo Shirt",
        price: 1497
    },
    {
        name:"Hilfighter T-Shirt",
        price: 1179
    },
];

const bar=document.getElementById("bar");
const close=document.getElementById("close");
const nav=document.getElementById("navbar");

if(bar){// if any one click on bar it will true
bar.addEventListener('click',()=>{
    nav.classList.add('active');
})
}

if(close){// when we click on close it will work
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}






//single product Convertion of Smalll img to Main img by click on small img
// updateSingleProductDetail()
var MainImg = document.getElementById("MainImg");
var smallimg= document.getElementsByClassName("small-img");

smallimg[0].onclick = function(){
    MainImg.src =smallimg[0].src;
    updateDetail(MainImg.src);
 
}
smallimg[1].onclick = function(){
    MainImg.src =smallimg[1].src;
    updateDetail(MainImg.src);
}
smallimg[2].onclick = function(){
    MainImg.src =smallimg[2].src;
    updateDetail(MainImg.src);
}
smallimg[3].onclick = function(){
    MainImg.src =smallimg[3].src;
    updateDetail(MainImg.src);
    // updateSingleProductDetail()
}



// for updating detail from small boxed
function updateDetail(src){
    const srcNoExtracted=getsrcNo(src);
    const singleproPrice= document.querySelector("#single-pro-details h2")
    const singleproName= document.querySelector("#single-pro-details h4")
    singleproName.innerHTML=ProductDetails[srcNoExtracted-1].name;
    singleproPrice.innerHTML="₹"+ProductDetails[srcNoExtracted-1].price;
}

//for finding no from src of img
function getsrcNo(src){
    const regex = /f(\d+)\.jpg/; // regular expression to match "f" followed by one or more digits, then ".jpg"
    const match = src.match(regex);
    return match[1];
}


     // For Single product display Main Img and Small Image
     const urlParams = new URLSearchParams(window.location.search);// searching for previous url
     const index = urlParams.get('index');//index-data passed by shop.html paze as a index
     console.log(index)
     updateSProductPaze(index);
    
    
     //forUpdating cart Items
    



     function updateSProductPaze(index){
        const mainImg = document.getElementById("MainImg");
        const smallImgs = document.getElementsByClassName("small-img");
        const imgPrefix = "img/products/f";
        mainImg.src = imgPrefix + index + ".jpg";
        let i=-1,j=-1;
        //For Small Box images
        if(index>0 && index<5){i=1;j=5} 
        else if(index>4 && index<9){i=5;j=9} 
        else if(index>8 && index<13){i=9;j=13} 
        else if(index>12 && index<17){i=13;j=17} 
        for (let k=0; i < j; k++,i++) {
        smallImgs[k].src = imgPrefix + (i) + ".jpg";
        }
        //for Single Product detail
        const singleproPrice= document.querySelector("#single-pro-details h2")
        const singleproName= document.querySelector("#single-pro-details h4")
        singleproName.innerHTML=ProductDetails[index-1].name;
        singleproPrice.innerHTML="₹"+ProductDetails[index-1].price;
     }
    

 


    function getRandomFeature(){
        console.log("getramdom is working")
        const fetureImg = document.getElementsByClassName("fetureImg");
        const random=document.getElementsByClassName("ramdom")
        // console.log(fetureImg)
            const randomNumber = Math.floor(Math.random() * 12) + 1;
        let l=randomNumber;
        let m=randomNumber+4;
        const imgPrefix = "img/products/f";
        for (let k=0; l < m; k++,l++) {
        fetureImg[k].src = imgPrefix + (l) + ".jpg";
        console.log("imagupdate:"+fetureImg[k].src);
        // console.log(document.querySelector('.random[k][data-index="1"]'));
            // const element = document.querySelector('.random[data-index="1"]');
            // element.setAttribute('data-index', '2');
        // console.log( random[k].getAttribute("h4").innerText);
        random[k].querySelector("h5").innerText =ProductDetails[l].name;
        random[k].querySelector("h4").innerText="₹"+ProductDetails[l].price;
        }
        }


        //For Updating cart name and price IN ROW
        // Get all the rows in the table body
    function updateCartDetailBysrcNo(){
        const rows = document.querySelectorAll('tbody tr');
        // Loop through each row and add an event listener to the input field
        rows.forEach(row => {
        const img = row.querySelector('img');
        const priceCell = row.querySelector('.rowPrice');
        const rowName = row.querySelector('.rowName');
        // Calculate and update the row sum when the input value changes
        let i=getsrcNo(img.src);
        priceCell.textContent = '₹' + ProductDetails[i].price.toFixed(2);
        rowName.textContent=ProductDetails[i].name;
        });
    }



        //forUpdating cart Items
        function updateCartItemsByButtonClick(){
            console.log("add to cart button is working")
            const cartItems = document.getElementsByClassName("cartAddRow")[0];
            const newRow = cartItems.insertRow(); 
            console.log(cartItems)
            const productQty = document.querySelector('input').value;
            let i=getsrcNo(MainImg.src);
            newRow.innerHTML = `
          <td><a href="#"><button class="danger normal">Remove</button></a></td>
          <td><img src="img/products/f${i}.jpg" alt=""></td>
          <td class="rowName">${ProductDetails[i+1].name}</td>
          <td class="rowPrice">${ProductDetails[i+1].price}</td>
          <td><input type="number" min="1" value="${productQty}"></td>
          <td class="rowSum">${ProductDetails[i+1].price * productQty}</td>
        `;
         }



    //for adding procut in cart by clicking on cartlogo
    // Handle the click event on the cart icon
    // const forInsertinfRowinCart = document.getElementById('cart-items-tbody');
    // console.log("baiya watching")
    // console.log(forInsertinfRowinCart);
    // const newRow = forInsertinfRowinCart.insertRow();
    //     // add cells to the row
    //     const cell1 = newRow.insertCell(0);
    //     const cell2 = newRow.insertCell(1);
    //     const cell3 = newRow.insertCell(2);
    //     const cell4 = newRow.insertCell(3);
    //     const cell5 = newRow.insertCell(4);
    //     const cell6 = newRow.insertCell(5);
    //  // set the content of the cells
    //     cell1.innerHTML = '<a href="#"><button class="danger normal">Remove</button></a>';
    //     cell2.innerHTML = '<img src="img/products/f13.jpg" alt="">';
    //     cell3.innerHTML = '<td class="rowName">New Product</td>';
    //     cell4.innerHTML = '<td class="rowPrice">₹19.00</td>';
    //     cell5.innerHTML = '<td><input type="number" min="1" value="3"></td>';
    //     cell6.innerHTML = '<td class="rowSum">₹57.00</td>';





//   function addToCart(event) {
//     event.stopPropagation(); // Stop the link from redirecting to cart.html
//     const product = event.target.parentNode.parentNode;
//     const productName = product.querySelector('h5').textContent;
//     const productPrice = product.querySelector('h4').textContent;
//     const productId = product.getAttribute('data-index');
//     const cartItem = { name: productName, price: productPrice, id: productId };
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const index = cart.findIndex(item => item.id === productId);
//     if (index !== -1) {
//       // If the item is already in the cart, increase its quantity by 1
//       cart[index].quantity += 1;
//     } else {
//       // Otherwise, add the item to the cart with quantity 1
//       cartItem.quantity = 1;
//       cart.push(cartItem);
//     }
//     localStorage.setItem('cart', JSON.stringify(cart));
//     alert('Product added to cart');
//   }