import React, { Component } from 'react';

//Stateless Funcitonal Components can be used when no state.

//destructuring an argument
const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar {" "}
                <span
                    className="badge badge-pill badge-secondary">
                    {/* This only works in classes. In functions we have to add props to arg anf remove this.{this.props.totalCounters} */}
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
}
// const NavBar = props => {
//     return (
//         <nav className="navbar navbar-light bg-light">
//             <a className="navbar-brand" href="#">
//                 Navbar {" "}
//                 <span
//                     className="badge badge-pill badge-secondary">
//                     {/* This only works in classes. In functions we have to add props to arg anf remove this.{this.props.totalCounters} */}
//                     {props.totalCounters}
//                 </span>
//             </a>
//         </nav>
//     );
// }

export default NavBar;