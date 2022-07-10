import React from 'react';
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar1 font-weight-bold d-flex">
        <div><a className="nav-item text-dark align-middle col-sm " href="#aboutme1">about me </a></div>
        <div><a className="nav-item text-dark align-middle col-sm" href="#Services1">services</a></div>
        <div><a className="nav-item text-dark align-middle col-sm" href="#work1">work</a></div>
        <div><a className="nav-item text-dark align-middle col-sm" href="#get1">get in Touch</a></div>
      </div>
  </nav>
  )
}
