import React from 'react'
import logo from '../../logo.svg';
import UseState from "../StateUsestate/UseState";

export default function Home() {
    let name = "Thanh Tung";
    let obj = {name: 'Nguyen Thanh Tung', address: 'An Khanh - Hoai duc'};
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{name} - {obj.name} - {obj.address}- helloo</div>
        <UseState/>
      </header>
  )
}
