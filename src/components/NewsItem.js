
const NewsItem =(props)=> {
        let {title, description, imageUrl, newsUrl, author, date} = props;
        return (
            <div className="my-3">
                <div className="card" >
                    <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        {/* <p className="card-text"><small className="text-muted">By {author} at {date}</small></p> */}
                        <p className="card-text"><small className="text-muted">By {author} at {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer"  target="_blank" className="btn btn-sm btn-dark" href={newsUrl}>Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem