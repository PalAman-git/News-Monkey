import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div className="flex bg-black justify-center items-center font-poppins">
        <div className="w-11/12 flex justify-center items-center my-2">
          <div className="text-mustard-yellow font-extrabold text-3xl w-2/4">News Monkey</div>
          <div className="w-3/4">
            <ul className="flex text-mustard-yellow font-light justify-end items-center">
                <li className="mx-3 cursor-pointer">Home</li>
                <li className="mx-3 cursor-pointer">About</li>
                <li className="mx-3 cursor-pointer">Contact</li>
                <li className="mx-3 cursor-pointer">News</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
