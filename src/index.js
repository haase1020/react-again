import React from 'react';
import ReactDom from 'react-dom'; //inject JS into HTML
import './index.css'

// stateless functional component
// always have return
// always return a single element
//capitalize name for components
// use camcelCase for html attributes
// className instead of class
// close every element

function BookList() {
return (
  <section className="booklist">
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
  </section>
  );
}

const Book =() => {
  return (
    <div>
      <article className="book">
      <Image></Image>
      <Author />
      </article>
    </div>
  )
}

const Image =() => {
  return (
    <img src="https://m.media-amazon.com/images/I/91O1RKTpiWL._AC_UY218_.jpg" alt="" /> 
  )
}

const Author =() => {
  return(
    <h3>Someone</h3>
  )
}
ReactDom.render(<BookList />, document.getElementById('root'))