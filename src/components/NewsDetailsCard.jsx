import { Link, useLoaderData, useParams } from "react-router";

const NewsDetailsCard = () => {
      const {newsId} = useParams()
    const data = useLoaderData()
    
    const news = data.find(news=>news.id === newsId)
    
  return (
    <div className="space-y-5">
      <img
        className="w-full h-87 object-cover"
        src={news.image_url}
        alt=""
      />
      <h2 className="text-2xl">{news.title}</h2>

      <p>{news.details}</p>
      <Link className="btn btn-secondary" to={`/category/${news.category_id}`}>
        Back to Category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;