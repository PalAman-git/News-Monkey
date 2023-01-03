import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=58e1130ff2e341bc9c0827dc0e02eb94&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json(data);

    this.setState({ articles: parsedData.articles,totalResults:parsedData.totalResults});
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=58e1130ff2e341bc9c0827dc0e02eb94&page=${
      this.state.page - 1
    }&pageSize=20`;

    let data = await fetch(url);
    let parsedData = await data.json(data);

    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
    });
  };

  handleNextClick = async () => {
    if(this.state.page +1 >Math.ceil(this.state.totalResults/20))
    {
      return;
    }
    
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=58e1130ff2e341bc9c0827dc0e02eb94&page=${
      this.state.page + 1
    }&pageSize=20`;

    let data = await fetch(url);
    let parsedData = await data.json(data);

    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
    });
  }
  };

  render() {
    return (
      <>
        <h1 className="text-6xl text-white flex justify-center items-center my-16 font-bold w-11/12">
          Top Head Lines
        </h1>
        <div className="grid lg:grid-cols-3 justify-items-center gap-x-8 gap-y-6 sm:grid-cols-1 md:grid-cols-2">
          {this.state.articles.map((element) => {
            return (
              <NewsItem
                key={element.url}
                title={element.title ? element.title : "No Title"}
                description={
                  element.description ? element.description : "No Description"
                }
                ImageUrl={
                  element.urlToImage
                    ? element.urlToImage
                    : "https://assets2.cbsnewsstatic.com/hub/i/r/2022/01/04/5315f032-6455-45ca-a529-ee3b20b16437/thumbnail/1200x630/afe767b4c06a3b33174e37864f3eca54/eatn-park.png"
                }
                NewsUrl={element.url}
              />
            );
          })}
        </div>

        <div className="container mx-auto flex w-3/4 justify-between">
          <button disabled={this.state.page===1}
            className="px-10 rounded-lg font-bold cursor-pointer py-3 mb-5 mt-16 bg-mustard-yellow select-none"
            onClick={this.handlePrevClick}
          >
            &larr;Prev
          </button>

          <button
            className="px-10 rounded-lg font-bold cursor-pointer py-3 mb-5 mt-16 bg-mustard-yellow select-none"
            onClick={this.handleNextClick}
          >
            Next&rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
