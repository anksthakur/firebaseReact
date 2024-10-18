import { useEffect, useState } from 'react';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from './NewsItem';

const NewsIn = (props:any) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string: any) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1bd1f25f84c54dea9e3527caee5b5533&page=1&pageSize=${props.pageSize}`;

        setLoading(true);
        try {
            let data = await fetch(url);
            props.setProgress(30);
            let parsedData = await data.json();
            props.setProgress(70);
            setArticles(parsedData.articles);
            setTotalResults(parsedData.totalResults);
        } catch (error) {
            console.error("Error fetching news:", error);
        } finally {
            setLoading(false);
            props.setProgress(100);
        }
    };

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsApp`;
        updateNews();
        // eslint-disable-next-line
    }, [props.category, props.country, props.pageSize]);

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1bd1f25f84c54dea9e3527caee5b5533&page=${page + 1}&pageSize=${props.pageSize}`;

        setPage(page + 1);
        setLoading(true);
        try {
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticles((prevArticles) => prevArticles.concat(parsedData.articles));
            setTotalResults(parsedData.totalResults);
        } catch (error) {
            console.error("Error fetching more news:", error);
        } finally {
            setLoading(false); 
        }
    };

    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>
                NewsApp - Top {capitalizeFirstLetter(props.category)} Headlines
            </h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element:any) => {
                            return (
                                <div className="col-md-4" key={element?.url}>
                                    <NewsItem
                                        title={element?.title ? element?.title : ""}
                                        description={element?.description ? element?.description : ""}
                                        imageUrl={element?.urlToImage}
                                        newsUrl={element?.url}
                                        author={element?.author}
                                        date={element?.publishedAt}
                                        source={element?.source?.name}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    );
};

NewsIn.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
};

NewsIn.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    setProgress: PropTypes.func.isRequired
};

export default NewsIn;