import React,{useContext} from 'react';
import { AppContext } from '../utils/AppContext';

const BookTable = () => {

  // Grab Search data to filter against
  const {bookData, fetchData} = useContext(AppContext);
  let [fetching/*, setFetching*/] =  fetchData;

  return(
    <section id="searchedBooks">
      {fetching === false ?  
       ''
        : (
          <React.Fragment>
          {bookData[0].items.map((book) => (
            <div className="book" key={book.id}>
              <h3>{book.volumeInfo.title}</h3>
              {console.log(book.volumeInfo.authors)}
              <h4>Written By: {
                (book.volumeInfo.authors ) ? 
                book.volumeInfo.authors.map((author) => ` ${author}`).toString() :
                  " Not Provided"
              }</h4>
              <div className="book-info">
                <div>{ (book.volumeInfo.imageLinks ? 
                <img src={book.volumeInfo.imageLinks.thumbnail} alt="book.volumeInfo.title"/>
                : <img src="./content/img/not-found.jpg" alt="Not Found" width="150"/> )}</div>
                <div>{ (book.volumeInfo.description ? <p>{book.volumeInfo.description}</p>: <p>No description has been provided for this book.</p> )}</div>
              </div>  
            </div>
          ))}
        </React.Fragment>
      )}
    </section>
    )
  }; 
  
  export default BookTable