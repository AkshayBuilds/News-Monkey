import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setarticles] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


const updateNews = async () => {
  props.setProgress(20)
  setLoading(true)
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`
  let data = await fetch(url);
  let parsedData = await data.json();
  setarticles(parsedData.articles)
  setLoading(false)
  settotalResults(parsedData.totalResults)
  props.setProgress(100)
}
useEffect(() => {
  updateNews()
  document.title = `${capitalizeFirstLetter(props.category)} - News Monkey`
}, []);

const fetchMoreData = async () => {
  setLoading(true)
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`
  setpage(page + 1)
  let data = await fetch(url);
  let parsedData = await data.json();
  setarticles(articles.concat(parsedData.articles))
  settotalResults(parsedData.totalResults)
  setLoading(false)
};

return (
  <>
    <h1 className="text-center" style={{marginTop: '90px' }}>News Monkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
    {/* {loading && <Spinner />} */}
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchMoreData}
      hasMore={articles.length !== totalResults}
      loader={<Spinner />}
    >
      <div className="container">
        <div className="row">
          {articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title : " "} description={element.description ? element.description : " "} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source.name} badge={props.badge} />
            </div>
          })}
        </div>
      </div>
    </InfiniteScroll>
  </>
)
}

News.defaultProps = {
  country: "us",
  pageSize: 6,
  category: 'general',
  totalResults: 0,
}
News.propsTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News
