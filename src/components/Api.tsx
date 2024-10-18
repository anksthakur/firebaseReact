import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ApiProps {
    category: string;
}

const Api: React.FC<ApiProps> = ({ category }) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const getApiData = async () => {
        try {
            const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1bd1f25f84c54dea9e3527caee5b5533`);
            const businessData = await res.json();
            console.log(businessData);
            setData(businessData.articles);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getApiData();
        // eslint-disable-next-line
    }, [category]);

    const LoadingComponent = () => (
        <div className="animate-pulse bg-orange-200 w-full h-64"></div>
    );

    return (
        <div className="mx-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
                {loading ? (
                    Array.from({ length:9}).map((_, index) => (
                        <LoadingComponent key={index} />
                    ))
                ) : (
                    data.map((item) => (
                        <div key={item.title} className="bg-white shadow-md rounded-lg p-4 mt-4">
                            <div className="img mb-2">
                                {item.urlToImage ? (
                                    <img src={item.urlToImage} alt="img" className="w-full h-48 object-cover rounded" />
                                ) : (
                                    <LoadingComponent />
                                )}
                            </div>
                            <h1 className="font-bold mb-2">Headlines: {item.title || "Unknown"}</h1>
                            <h2 className="text-black">Author: {item.author || "Unknown"}</h2>
                            <Link className="text-black font-bold" to={item.url }>Read Full News .....</Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Api;
