import React, { Component } from 'react';
import Book from "./Book";
import booksData from "./data";

class Booklist extends Component {
  constructor(props){
    super(props);
    
    this.state ={
      books: booksData
    };
  }

  filterData = id => {
    console.log(id);
    const sortedBooks = this.state.books.filter(item =>item.id !== id);
    this.setState({
      books: sortedBooks
    });
  };

  render() {

    return (
      <div className="booklist">
        <h2>Best Selling Books</h2>  
        {this.state.books.map(book => (
          <Book key={book.id} info={book} deleteItem={() => this.filterData(book.id)}/>
        ))}
      </div>
    );
  }
}

export default Booklist;