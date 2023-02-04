import React, { Component } from 'react'
import './oldNewsItem.css'
// import img1 from '../Images/cricket.jpg'

export class NewsItem extends Component {

  render() {
    let {title, description, imageurl, newsurl} = this.props
    return (
      <div>
        <div className='card'>
            <h4>{title}..</h4>
            <div className="card-box">
                <div className="card-img">
                    <img src={imageurl} alt="" />
                </div>
                <div className="content">
                    {description}
                </div>
            </div>
            <a href={newsurl} rel="noreferrer" target="_blank">More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
