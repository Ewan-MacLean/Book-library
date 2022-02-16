import React from 'react'
import './book.css'


const Book = function(props) {

    function flipCard(event) {
        // CSS
        // .flip-card:hover .flip-card-inner {
        //     transform: rotateY(180deg);
        // }
        // .bookTileBack {
        //     transform: rotateY(180deg);
        // }
    }
    return(
        <div id="flip-card" className='flip-card'>
            <div id='flip-card-inner' className='flip-card-inner'>
                <div className='bookTile'>
                    <img className="cover" src={props.imgSrc}></img>
                        <div>
                            <header className='title'>{props.bookTitle}</header>
                            <p className='author'>{props.bookAuthor}</p>
                        </div>
                    </div>
                <div className='bookTileBack'>
                    <p className='title'>Genres</p>
                    <p className='genre'>{props.bookGenre}</p>
                </div>
            </div>
        </div>
    )
}

export default Book