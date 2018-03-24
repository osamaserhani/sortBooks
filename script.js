var books = [
  {
    title: 'React Quickly: Painless web apps with React, JSX, Redux, and GraphQL',
    url: 'google.com',
    date_published: 'Sep 28, 2017',
    author: 'Azat Mardan',
    reviews: 34,
    rate: 4.7,
    img: 'https://images-na.ssl-images-amazon.com/images/I/5159foIB0EL._AC_US218_.jpg'
  }, {
    title: 'The Principles of Object-Oriented JavaScript',
    url: 'google.com',
    date_published: 'Feb 14, 2014',
    author: 'Nicholas C. Zakas',
    reviews: 56,
    rate: 4.6,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51nCY21njKL._AC_US218_.jpg'
  },

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
  var a = document.createElement('a')
  var img = document.createElement('img')
  var aText = document.createTextNode(bookObj.title)
  a.appendChild(aText)
  a.href = bookObj.url
  a.title = bookObj.title
  img.src=bookObj.img
  
  liElem.appendChild(a)
  liElem.appendChild(img)


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