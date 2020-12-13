import React from 'react';
import ReactDom from 'react-dom'; //inject JS into HTML


// stateless functional component
// always have return
// always return a single element
//capitalize name for components
// use camcelCase for html attributes
// className instead of class
// close every element

function BookList() {
return (
  <section>
    <Book />
    <Image></Image>
  </section>
  );
}

const Book =() => {
  return (
    <article>This is a book</article>
  )
}

const Image =() => {
  return (
    <img src="https://m.media-amazon.com/images/I/91O1RKTpiWL._AC_UY218_.jpg" alt="" /> 
  )
}
ReactDom.render(<BookList />, document.getElementById('root'))