import React from 'react'
import './Styles/Navbar.css';
export default function Navbar() {
  return (
    <>

<div id="navbarAlign">

    <div id="navbar" className="">
       
        <div id="navbarButtonsDiv">

            <button data-text="Awesome" className="button">
                <span className="actual-text">&nbsp;home&nbsp;</span>
                <span className="hover-text" aria-hidden="true">&nbsp;home&nbsp;</span>
                </button>
            <button data-text="Awesome" className="button">
                <span className="actual-text">&nbsp;Mini Projects&nbsp;</span>
                <span className="hover-text" aria-hidden="true">&nbsp;Mini&nbsp;Projects&nbsp;</span>
                </button>
            <button data-text="Awesome" className="button">
                <span className="actual-text">&nbsp;Random Thoughts&nbsp;</span>
                <span className="hover-text" aria-hidden="true">&nbsp;Random&nbsp;Thoughts&nbsp;</span>
            </button>
        </div>
    </div>
</div>

    </>
  )
}
