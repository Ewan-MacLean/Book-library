import Book from '../Book/book'


const BookList = function(props) {
    return(
        <div className="booklist-container">

            {/* need to format the syntax here with "(" because combining JSX and JS is tricky */}
            {/* 'book' is simply the response object, can be called anything */}
            {props.books.map(book=>(
                    <Book key={book.id} imgSrc={book.formats[0].image} bookTitle={book.title} bookAuthor={book.authors[0].name} bookGenre={(book.subjects) + ''}/>
                    )
                )
            }
        </div>
    )
}

export default BookList