import React from 'react'
import './header.css'

class Header extends React.Component{
    render() {

        return (
                <section className='Header'>
                    <div className="header-div">
                        <h1>Welcome to my library!</h1>
                    </div>
                </section>
            )
    }
}

export default Header