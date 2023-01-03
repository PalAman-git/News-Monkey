import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description,ImageUrl,NewsUrl} = this.props;
    return (
      <>
        <div className="w-72 bg-black rounded-lg overflow-hidden sm:w-3/4 md:w-3/4 lg:w-4/5">
          <img src={ImageUrl} className="w-full"></img>
          <div className="w-full px-5 pb-2 mb-1 h-full">
            <h5 className="w-full text-mustard-yellow my-6 text-xl font-bold">{title}</h5>
            <p className="w-full text-white my-2">{description}</p>
            <a href={NewsUrl} target="_blank" className="rounded py-2 px-4 bg-white flex justify-center items-center mt-16">Read</a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
