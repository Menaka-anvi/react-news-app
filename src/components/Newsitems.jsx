import React, { Component } from 'react';

export default class Newsitems extends Component {
  render() {
    let { title, description, url, linkurl, author, date, source } = this.props;
    return (
        <div className="card h-100">
          <img src={url} alt="News" className="card-img-top"  />

          <div className="card-body">
            {/* Badge in top-right corner */}
            <span
              className="badge rounded-pill bg-danger text-light mb-2"
              style={{
                position: "absolute",
                right: "0px",
                top: "0px"
              }}
            >
              {source}
            </span>

            <h5 className="card-title text-success">
              {title ? title.slice(0, 60) : "No Title"}...
            </h5>

            <p className="card-text">
              {description ? description.slice(0, 120) : "No description available"}
            </p>

            <p>By: {author ? author : "Anonymous"}</p>
            <hr />
            <p>Published At: {date ? new Date(date).toGMTString() : "Unknown date"}</p>

            <a
              href={linkurl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger w-100 mt-auto"
            >
              Read More
            </a>
          </div>
        </div>
    );
  }
}
