import Page from '../page.js'


const settings = {
  notifyQuantitiesRemaining: 5,
  // productsPerPage: 3,
  coverPath: 'img/students/covers/',
  profilePath :'img/students/profiles/'
}


// const allStudents =[
//   { //0
//     id : 20200101,
//     coverImg:`img01a.jpg`,
//     profilePicture : `img01.png`,
//     firstName: `Ivandi`,
//     lastName:`Santoso`,
//     phoneNumber: 123456789,
//     email: `n01398965@humbermail.ca`,
//     skills: `HTML, CSS, JavaScript`,
//     projects: `Single Page Application, Web Store`,
//     facebookURL: `https://www.facebook.com/ivandisantoz`,
//     linkedinURL:`https://www.linkedin.com/in/ivandisantoso/`,
//     githubURL:`https://github.com/ivandisantoso`
  
//   },{ //1
//     id : 20200102,
//     coverImg:`img02a.jpg`,
//     profilePicture : `img02.png`,
//     firstName: `Student`,
//     lastName:`Two`,
//     phoneNumber: `456789123`,
//     email: `student.two@humbermail.ca`,
//     skills: `HTML, CSS`,
//     projects: `Re-make apple website`,
//     facebookURL: ``,
//     linkedinURL:``,
//     githubURL:``
//   },{ //2
//     id : 20200103,
//     coverImg:`img03a.jpg`,
//     profilePicture : `img03.jpg`,
//     firstName: ``,
//     lastName:``,
//     phoneNumber: ``,
//     email: `@humbermail.ca`,
//     skills: ``,
//     projects: ``,
//     facebookURL: ``,
//     linkedinURL:``,
//     githubURL:``
//   },{ //3
//     id : 20200104,
//     coverImg:`img04a.jpg`,
//     profilePicture : `img04.jpg`,
//     firstName: ``,
//     lastName:``,
//     phoneNumber: ``,
//     email: `@humbermail.ca`,
//     skills: ``,
//     projects: ``,
//     facebookURL: ``,
//     linkedinURL:``,
//     githubURL:``
//   }
// ];


const allProducts =[
  { //0
    id : 101,
    image : `Tshirt-119.png`,
    name: `Champ Super 1`,
    brand: `champion`,
    colour: `red`,
    size: `m`,
    rating: `2stars`,
    ratingImg: `2stars.png`,
    available: 10,
    price: 39
  },{ //1
    id : 102,
    image : `Tshirt-120.png`,
    name: `Nike Super 1`,
    brand: `nike`,
    colour: `red`,
    size: `s`,
    rating: `3stars`,
    ratingImg: `3stars.png`,
    available: 5,
    price: 59
  },{ //19
    id : 120,
    image : `Tshirt-112.png`,
    name: `Puma Super 5`,
    brand: `puma`,
    colour: `grey`,
    size: `s`,
    rating: `4stars`,
    ratingImg: `4stars.png`,
    available: 3,
    price: 49
  }
];


// Sorting order function
const loadProductsByOrder = (arrToSort, criteria) => {

  const sortedProducts = arrToSort.slice(); // clone the array

  if (criteria == 'priceLow') {
    // Smallest to largest
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (criteria == 'priceHigh') {
    // Largest to smallest
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (criteria == 'nameAsc') {
    // Largest to smallest
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (criteria == 'nameDesc') {
    // Largest to smallest
    sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  return sortedProducts; // new array
}



// FUNCTIONS THAT BUILD OUR VIEW **************

const getProductAsHtmlString = (product) =>{
  let callout = ``;
  let soldout = ``;
  let register = `<button type="button" class="add-product" data-productid="${product.id}">Add</button>`;
  if (product.available <= 0) {
    callout = `<small class="callout">Sold out</small>`;
    soldout = `soldout`;
    register = ``;
  } else if (product.available < settings.notifyQuantitiesRemaining) {
    callout = `<small class="callout urgent">${product.available} remaining</small>`;
  }
  
  return `
  <article class="product ${(product.brand) ? `cat-${product.brand}` : ''} ${soldout}">
  
  <img src="${settings.imagePath + product.image}" alt="${product.name}" class="product-img">
  </header>
 
      
      <ul class="product-info">
      <li><h3>${product.name}</h3></li>
       <li><label>${callout}</label</li>
        <li><label>Size:${product.size.toUpperCase()}</label></li>
        <li><label>$ ${product.price}</label></li>
        <li><img src="${settings.imagePath + product.ratingImg}" class="product-rating-img"></li>
      </ul>
      ${register}
</article>
  `;
}

const renderProductsFromArray = (arr) => {

  //   document.getElementById(`products`).innerHTML = arr.map(getProductAsHtmlString).join(``);
  //   let res = `result`;
  //   if (arr.length == 1){
  //     res = `result`
  //   }
  //   document.getElementById(`numResuts`).innerHTML = `(${arr.length} ${res})`;
  // }
  
  // 1. SORT!!!
  const sortBy = document.getElementById('sortOrder').value;    // dropdown value
  arr = loadProductsByOrder(arr, sortBy);  // sort the products, reassign the new Array
  
    // 3. BUILD OUTPUT
    if (arr.length > 0) {
      document.getElementById('products').innerHTML = arr.map(getProductAsHtmlString).join('\n'); // Print products  
    } else {
      document.getElementById('products').innerHTML = 'Sorry, no matching results.' // Woops!
    }
  
    document.getElementById('numResults').innerHTML = `(${arr.length} ${(arr.length == 1) ? 'result' : 'results'})`; // Display number of total results
    
  }


//START
window.addEventListener(`load`, () => {
  renderProductsFromArray(allProducts);


});


export default class Students extends Page {
	constructor() {
		super()
		this.html = `
	  <select name="sort" id="sortOrder" class="sort">
                 
        <option value="priceHigh">Price, highest to lowest</option>
        <option value="priceLow">Price, lowest to highest</option>
        <option value="nameAsc" selected>Name, A to Z</option>
        <option value="nameDesc">Name, Z to A</option>
        
      </select>
      <h2>Products <small id="numResults">(5 results)</small></h2>
      <section id="products" class="products"></section>
    `
	}
}

