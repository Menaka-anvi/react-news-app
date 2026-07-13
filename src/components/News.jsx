import React, { Component } from "react";
import Newsitems from "./Newsitems";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import mockArticles from "../mockData";



export default class News extends Component {
  // articles = [
  //   {
  //     source: {
  //       id: "rte",
  //       name: "RTE",
  //     },
  //     author: "RTÉ News",
  //     title: "24% of new private cars licensed in H1 electric - CSO",
  //     description:
  //       "Almost a quarter of new private cars licensed in the first half of 2026 were electric vehicles, new figures from the Central Statistics Office show today.",
  //     url: "https://www.rte.ie/news/business/2026/0710/1582736-24-of-new-private-cars-licensed-in-h1-electric-cso/",
  //     urlToImage: "https://www.rte.ie/images/001ecb9f-1600.jpg",
  //     publishedAt: "2026-07-10T10:25:51Z",
  //     content:
  //       "Almost a quarter of new private cars licensed in the first half of 2026 were electric vehicles, new figures from the Central Statistics Office show today.\r\nThe CSO said the number of new private elec… [+1841 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "GlobeNewswire",
  //     },
  //     author: "Bleichmar Fonti & Auld",
  //     title:
  //       "Peabody (NYSE:BTU) Centurion Mine Issues Trigger Securities Fraud Class Action – Investors Notified to Contact BFA Law about the Lawsuit",
  //     description:
  //       "Peabody (NYSE:BTU) Centurion Mine Issues Trigger Securities Fraud Class Action – Investors Notified to Contact BFA Law about the Lawsuit...",
  //     url: "https://www.globenewswire.com/news-release/2026/07/10/3325412/0/en/Peabody-NYSE-BTU-Centurion-Mine-Issues-Trigger-Securities-Fraud-Class-Action-Investors-Notified-to-Contact-BFA-Law-about-the-Lawsuit.html",
  //     urlToImage:
  //       "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
  //     publishedAt: "2026-07-10T10:25:00Z",
  //     content:
  //       "NEW YORK, July 10, 2026 (GLOBE NEWSWIRE) -- Leading securities law firm Bleichmar Fonti &amp; Auld LLP announces that a class action lawsuit has been filed against Peabody Energy Corporation (NYSE:BT… [+4962 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "GlobeNewswire",
  //     },
  //     author: "Bleichmar Fonti & Auld",
  //     title:
  //       "AeroVironment (NASDAQ:AVAV) SCAR Contract Cancellation Triggers Securities Fraud Class Action – Investors Notified to Contact BFA Law about the Lawsuit",
  //     description:
  //       "AeroVironment (NASDAQ:AVAV) SCAR Contract Cancellation Triggers Securities Fraud Class Action – Investors Notified to Contact BFA Law about the Lawsuit...",
  //     url: "https://www.globenewswire.com/news-release/2026/07/10/3325411/0/en/AeroVironment-NASDAQ-AVAV-SCAR-Contract-Cancellation-Triggers-Securities-Fraud-Class-Action-Investors-Notified-to-Contact-BFA-Law-about-the-Lawsuit.html",
  //     urlToImage:
  //       "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
  //     publishedAt: "2026-07-10T10:22:00Z",
  //     content:
  //       "NEW YORK, July 10, 2026 (GLOBE NEWSWIRE) -- Leading securities law firm Bleichmar Fonti &amp; Auld LLP announces that a class action lawsuit has been filed against AeroVironment, Inc. (NASDAQ:AVAV) a… [+5718 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "GlobeNewswire",
  //     },
  //     author: "Bleichmar Fonti & Auld",
  //     title:
  //       "ADMA Biologics (NASDAQ:ADMA) Channel Stuffing Claims Trigger Securities Fraud Class Action – Investors Notified to Contact BFA Law about the Lawsuit",
  //     description:
  //       "ADMA Biologics (NASDAQ:ADMA) Channel Stuffing Claims Trigger Securities Fraud Class Action – Investors Notified to Contact BFA Law about the Lawsuit...",
  //     url: "https://www.globenewswire.com/news-release/2026/07/10/3325410/0/en/ADMA-Biologics-NASDAQ-ADMA-Channel-Stuffing-Claims-Trigger-Securities-Fraud-Class-Action-Investors-Notified-to-Contact-BFA-Law-about-the-Lawsuit.html",
  //     urlToImage:
  //       "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
  //     publishedAt: "2026-07-10T10:20:00Z",
  //     content:
  //       "NEW YORK, July 10, 2026 (GLOBE NEWSWIRE) -- Leading securities law firm Bleichmar Fonti &amp; Auld LLP announces that a class action lawsuit has been filed against ADMA Biologics, Inc. (NASDAQ:ADMA) … [+5284 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "GlobeNewswire",
  //     },
  //     author: "Bleichmar Fonti & Auld",
  //     title:
  //       "Embecta (NASDAQ:EMBC) Insulin Pen Issues Trigger Securities Fraud Class Action – Investors Notified to Contact BFA Law about the Lawsuit",
  //     description:
  //       "Embecta (NASDAQ:EMBC) Insulin Pen Issues Trigger Securities Fraud Class Action – Investors Notified to Contact BFA Law about the Lawsuit...",
  //     url: "https://www.globenewswire.com/news-release/2026/07/10/3325407/0/en/Embecta-NASDAQ-EMBC-Insulin-Pen-Issues-Trigger-Securities-Fraud-Class-Action-Investors-Notified-to-Contact-BFA-Law-about-the-Lawsuit.html",
  //     urlToImage:
  //       "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
  //     publishedAt: "2026-07-10T10:18:00Z",
  //     content:
  //       "NEW YORK, July 10, 2026 (GLOBE NEWSWIRE) -- Leading securities law firm Bleichmar Fonti &amp; Auld LLP announces that a class action lawsuit has been filed against Embecta Corp. (NASDAQ:EMBC) and cer… [+4354 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "GlobeNewswire",
  //     },
  //     author: "Bleichmar Fonti & Auld",
  //     title:
  //       "ZoomInfo (NASDAQ:GTM) AI Integration Issues Trigger Securities Fraud Class Action – Investors Notified to Contact BFA Law about the Lawsuit",
  //     description:
  //       "ZoomInfo (NASDAQ:GTM) AI Integration Issues Trigger Securities Fraud Class Action – Investors Notified to Contact BFA Law about the Lawsuit...",
  //     url: "https://www.globenewswire.com/news-release/2026/07/10/3325408/0/en/ZoomInfo-NASDAQ-GTM-AI-Integration-Issues-Trigger-Securities-Fraud-Class-Action-Investors-Notified-to-Contact-BFA-Law-about-the-Lawsuit.html",
  //     urlToImage:
  //       "https://ml.globenewswire.com/Resource/Download/44a256cf-d470-4d8a-af6b-dbb1b5bbb11e",
  //     publishedAt: "2026-07-10T10:18:00Z",
  //     content:
  //       "NEW YORK, July 10, 2026 (GLOBE NEWSWIRE) -- Leading securities law firm Bleichmar Fonti &amp; Auld LLP announces that a class action lawsuit has been filed against ZoomInfo Technologies Inc. (NASDAQ:… [+4699 chars]",
  //   },
  // ];

  articles = [];

  static defaultProps = {
    country: "us",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  };

  constructor(prop) {
    super();
    console.log("i am constructor");
    this.state = {
      articles: [],
      loading:false,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    try{
    const apikey= process.env.REACT_APP_NEWS_API_KEY;
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=474f5cc2097d47618f067114f5a2c712&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({
        loading:true
      })
      
    let data = await fetch(`./netlify/functions/news?=$ {this.state.page}&country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}`);
    let parsedData = await data.json();

    if (!parsedData.articles){
      this.setState({articles: mockArticles,loading:false});
    }else{
          console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
      });
    }
  }catch (error){
    this.setState({articles:mockArticles,loading:false});
  }
 }


  handleNext=async()=>{
    const apikey= process.env.REACT_APP_NEWS_API_KEY;
      this.setState({
        loading:true
      })

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=474f5cc2097d47618f067114f5a2c712&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(`./netlify/functions/news?=$ {this.state.page + 1}&country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}`);
    let parsedData = await data.json();

    this.setState({
      page:this.state.page+1,
      articles: parsedData.articles,
      loading:false
    });
  }

  handlePrev=async()=>{
    if(this.state.page <=1) return;
    const apikey= process.env.REACT_APP_NEWS_API_KEY;
      this.setState({
        loading:true
      })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=474f5cc2097d47618f067114f5a2c712&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(`./netlify/functions/news?=$ {this.state.page - 1}&country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}`);
    let parsedData = await data.json();
    
    this.setState({
      page:this.state.page-1,
      articles: parsedData.articles,
      loading:false
    });
  }



  render() {
    return (
      <>
        <h1 className="text-center text-danger">Live News</h1>
        
        {this.state.loading && <Spinner/> }

        <div className="container">
          <div className="row g-3">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 mb-4" key={element.url}>
                  <Newsitems
                    title={element.title}
                    description={element.description}
                    url={element.urlToImage}
                    linkurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-danger me-md-2" type="button" onClick={this.handlePrev}
            disabled={this.state.page <= 1}>
              &laquo;Prev
            </button>
            <button className="btn btn-danger" type="button" onClick={this.handleNext}
            disabled={this.state.page >= Math.ceil(this.state.totalResults/this.props.pageSize)}>
              Next &raquo;
            </button>
          </div>

          <br />
        </div>
      </>
    );
  }
}
