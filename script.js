var books = [
  {
    title: '[Title  : React Quickly: Painless web apps with React, JSX, Redux, and GraphQL]',
    url: 'google.com',
    date_published: '[date_published  : Sep 28, 2017]     ',
    author: '[author  :Azat Mardan]     ',
    reviews: '[reviews  : 34]     ',
    rate: '[rate  : 4.7]     ',
    img: 'https://images-na.ssl-images-amazon.com/images/I/5159foIB0EL._AC_US218_.jpg'
  }, {
    title: '[Title  : React Quickly: Painless web apps with React, JSX, Redux, and GraphQL]',
    url: 'google.com',
    date_published: '[date_published  : Sep 28, 2017]     ',
    author: '[author  :Azat Mardan]     ',
    reviews: '[reviews  : 34]     ',
    rate: '[rate  : 4.7]     ',
    img: 'https://images-na.ssl-images-amazon.com/images/I/5159foIB0EL._AC_US218_.jpg'
  },
  {    title: '[Title  : React Quickly: Painless web apps with React, JSX, Redux, and GraphQL]',
   url: 'google.com',
   date_published: '[date_published  : Sep 28, 2017]     ',
   author: '[author  :Azat Mardan]     ',
   reviews: '[reviews  : 34]     ',
   rate: '[rate  : 4.7]     ',
   img: 'https://images-na.ssl-images-amazon.com/images/I/5159foIB0EL._AC_US218_.jpg'
  }

  // add more book items here
]
// Default sort
sortByReviews()
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

  ulElem.appendChild(liElem2)
  liElem.appendChild(ulElem)


  // create the remaining elements
  return liElem
}

function sortByReviews (){
  books.sort(function (a, b) {
    // implment your compare function here
  })
}

function upDateDOM() {
  var ulBooks = document.getElementById('books-list')
  ulBooks.innerHTML = ''
  for (item of books) {
    
    ulBooks.appendChild(createBookItem(item))
  }
 
}

// Sort by, select event
var select = document.getElementById("sort-news")
select.onchange = function () {
  if (select.value === 'priceHigh') {
    sortByReviews()
    upDateDOM()
  }
  else if (select.value === 'priceLow') {
    sortByPriceLow()
    upDateDOM()
  }
  else if (select.value === 'rating') {
    sortByRating()
    upDateDOM()
  }
}
