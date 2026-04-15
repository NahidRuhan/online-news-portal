import { useLoaderData, useParams } from 'react-router'
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const {id} = useParams()
    const data = useLoaderData()
    let categoryData = [];
    if (id === "0") {
      categoryData = data;
    } else if (id === "1") {
      categoryData = data.filter((news) => news.others.is_today_pick === true);
    } else {
      categoryData = data.filter((news) => news.category_id === Number(id));
    }
      
  return (
    <div>
      <h2 className="font-bold mb-5">
        Total <span className="text-secondary">{categoryData.length}</span> news
        Found
      </h2>

      <div className="grid grid-cols-1 gap-5">
        {categoryData.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
