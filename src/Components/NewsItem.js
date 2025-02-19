import React from 'react'

const NewsItem = (props) => {

        let { title, description, imageUrl, newsUrl, publishedAt, author, source, badge } = props
        return (
            <div className='my-3 '>
                <div className="card ">
                    <div className= "d-flex justify-content-end position-absolute end-0">
                        <span className={`badge bg-${badge}`}>
                            {source}
                        </span>
                    </div>
                    <img
                        src={!imageUrl ? "https://image.cnbcfm.com/api/v1/image/108098122-1738792639254-GettyImages-2176945116.jpg?v=1738792858&w=1920&h=1080" : imageUrl}
                        className="card-img-top"
                        alt=" " />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">Date & Time: <b>{new Date(publishedAt).toGMTString()}</b></p>
                        <p className="card-text">Author: <b>{!(author) ? "Unkown" : author}</b></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )

}
export default NewsItem
