import React from 'react'
import {Link} from "react-router";

const MobileSidebar = () => {
    return (
        <div className="mobile-sidebar wrapper">
            <header>
                <Link to="/">
                    <img
                        src="/assets/icons/logo.svg"
                        alt="logo"
                        className="size-[30px]"
                    />
                    <h1> Tour Visitor</h1>
                </Link>
                {/*<button onClick={}></button>*/}
            </header>
        </div>
    )
}
export default MobileSidebar
