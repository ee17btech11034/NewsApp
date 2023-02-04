import React, { Component } from 'react'
import NewsItem from './oldNewsItem'
import './oldNews.css'

export class News extends Component {

  constructor(){
    super()
    console.log("Hello, I am constructor in news.js")

    this.state = {articles: [],
                loading: false,
                pages: 1
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=16cb9a78436c4088acb733624a47d369"
    let data = await fetch(url)
    let parsedData = data.json()
    // console.log(parsedData)
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div>
        <div className='allnews'>
          {this.state.articles.map((element)=>{
            return <div key={element.newsurl}>
                <NewsItem className='newscarddisplay' title={element.title?element.title.slice(0,50):""} description={element.description} imageurl={element.imgurl} newsurl={element.newsurl}/>
              </div>
          })}
        </div>
      </div>
    )
  }
}

export default News
