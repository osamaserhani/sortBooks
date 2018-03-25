var books = [
  {
    title: '[Title  : True Fiction ]' ,
    date_published: '[date_published  : Sep 3, 2017]     ' ,
    dp:2017,
    author: '[author  :Lee Goldberg]     ',
    reviews: '[reviews  : 750]     ',
    r:750,
    rate: '[rate  : 4.4]     ',
    nRate : 4.4,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51UbplnqSgL.jpg',
    price : '[Price  : 9.99]',
    nprice : 9.99
  }, {
    title: '[Title  :Harry Potter and the Sorcerers Stone ]' ,
    date_published: '[date_published  : Sep 5, 2015]     ' ,
    dp:2015,
    author: '[author  :J.K. Rowling ]     ',
    reviews: '[reviews  : 16000]     ',
    r:16000,
    rate: '[rate  : 4.8]     ',
    nRate : 4.8,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51qlgJ6ZojL.jpg',
    price : '[Price  : 15.99]',
    nprice : 15.99
  },
  {     title: '[Title  : The Girl Who Dared to Think 6 ]' ,
   date_published: '[date_published  : Sep 5, 2013]     ' ,
   dp:2013,
   author: '[author  :Bella Forrest ]     ',
   reviews: '[reviews  : 18]     ',
   r:18,
   rate: '[rate  : 4.7]     ',
   nRate : 4.7,
   img: 'https://images-na.ssl-images-amazon.com/images/I/51wmkyVUS9L.jpg',
   price : '[Price  : 5.99]',
   nprice : 5.99
  }

  // add more book items here
]
// Default sort
priceHigh()
upDateDOM()

function createBookItem(bookObj) {
  /*
      <li>
        <a href="#">React Quickly: Painless web apps with React, JSX, Redux, and GraphQL</a>
        <img src="https://images-na.ssl-images-amazon.com/images/I/5159foIB0EL._AC_US218_.jpg"/>
          <ul>
            <li>Sep 28, 2017 </li>
            <li>Azat Mardan</li>
            <li>34 reviews</li>
            <li>4.7 stars</li>
          </ul>
      </li>
    */
  var liElem = document.createElement('li')
  var ulElem = document.createElement('ul')
  var liElem2 = document.createElement('li')
  var img = document.createElement('img')

  var p = document.createElement('p')
  var p1 = document.createElement('p')
  var aText = document.createTextNode(bookObj.title)
  var aText1 = document.createTextNode(bookObj.date_published)
  var aText2 = document.createTextNode(bookObj.author)
  var aText3 = document.createTextNode(bookObj.reviews)
  var aText4 = document.createTextNode(bookObj.rate)
  var aText5 = document.createTextNode(bookObj.price)


  img.src=bookObj.img

  p1.appendChild(aText)
  p1.title = bookObj.title
  p.appendChild(aText2)
  liElem.appendChild(img)

  liElem.appendChild(p1)
liElem2.appendChild(aText1)
  liElem2.appendChild(aText2)
  liElem2.appendChild(aText3)
  liElem2.appendChild(aText4)
  liElem2.appendChild(aText2)
  liElem2.appendChild(aText5)


  ulElem.appendChild(liElem2)
  liElem.appendChild(ulElem)


  // create the remaining elements
  return liElem
}

function priceHigh (){
  books.sort(function (a, b) {
return b.nprice-a.nprice;
  })
}
function pricelow (){
  books.sort(function (a, b) {
    return a.nprice-b.nprice;
  })
}
function Dateold (){
  books.sort(function (a, b) {
    return a.dp-b.dp;
  })
}
function Datenew (){
  books.sort(function (a, b) {
    return b.dp-a.dp;
  })
}
function reviewsHigh (){
  books.sort(function (a, b) {
    return b.r-a.r;
  })
}
function reviewslow (){
  books.sort(function (a, b) {
    return a.r-b.r;
  })
}
function StarsHigh (){
  books.sort(function (a, b) {
    return b.nRate-a.nRate;
  })
}
function Starslow (){
  books.sort(function (a, b) {
    return a.nRate-b.nRate;
  })
}

function upDateDOM() {
  var ulBooks = document.getElementById('books-list')
  var b = document.getElementById('br')
  ulBooks.innerHTML = ''
  for (item of books) {
    
    ulBooks.appendChild(createBookItem(item))
   
  }
 
}

// Sort by, select event
var select = document.getElementById("sort-news")
select.onchange = function () {
  if (select.value === 'priceHigh') {
    priceHigh()
    upDateDOM()
  }
  else if (select.value === 'priceLow') {
    pricelow()
    upDateDOM()
  }
  else if (select.value === 'Dateold') {
    Dateold()
    upDateDOM()
  } else if (select.value === 'Datenew') {
    Datenew()
    upDateDOM()
  } else if (select.value === 'reviewsHigh') {
    reviewsHigh()
    upDateDOM()
  } else if (select.value === 'reviewslow') {
    reviewslow()
    upDateDOM()
  } else if (select.value === 'StarsHigh') {
    StarsHigh()
    upDateDOM()
  } else if (select.value === 'Starslow') {
    Starslow()
    upDateDOM()
  }
}
