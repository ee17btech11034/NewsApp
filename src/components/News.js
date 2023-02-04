import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=> {

    const firstLetterCapitalise = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    // document.title = `${firstLetterCapitalise(props.category)} - news from NewsMonkey`

    const UpdateFunc = async()=>{
        props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.newsAPI}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        props.setProgress(50)
        let parsedData = await data.json()
        props.setProgress(80)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }

    useEffect(()=>{
        document.title = `${firstLetterCapitalise(props.category)} - news from NewsMonkey`
        UpdateFunc()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // const handlePrevClick = async ()=>{
    //     setPage(page - 1)
    //     UpdateFunc()

    // }
    
    // const handleNextClick = async ()=>{
    //     setPage(page + 1)
    //     UpdateFunc()
    // }
    const fetchMoreData = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.newsAPI}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }

    return (
            <>
                <h1 className="text-center" style={{'margin-top': '80px'}}>NewsMonkey - Top {firstLetterCapitalise(props.category)} Headlines</h1> 
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length < totalResults}
                    loader={<Spinner/>}
                    >

                    <div className="container">
                        <div className="row"> 
                            {articles.map((element)=>{
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt}/>
                                </div> 
                            })} 
                        </div> 
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
                </div> */}
            </>
        )
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'science'

}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News