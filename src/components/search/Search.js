import React, {useState} from 'react'

const Search = () => {
    return (
        <section className='search'>
            <form>
                <input
                type='text'
                className='form-control'
                placeholder='Search characters'
                autofocus/>
            </form>
        </section>
    )
}

export default Search