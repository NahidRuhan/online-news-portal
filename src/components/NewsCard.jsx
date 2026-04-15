import { FaEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, author, thumbnail_url, details, rating, total_view, category_id } = news;

  // The image shows a specific date format: YYYY-MM-DD. 
  // We can format the string directly to match this.
  const formattedDate = author?.published_date 
    ? new Date(author.published_date).toISOString().split('T')[0] 
    : "No date provided";

  return (
    <div className="border border-gray-200 rounded-lg bg-white mb-6">
      {/* Header: Author + Actions */}
      <div className="flex bg-[#F3F3F3] justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h2 className="font-semibold text-gray-800 text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500 mt-1">{formattedDate}</p>
          </div>
        </div>
        <div className="text-gray-500 flex gap-4 text-lg">
          <button className="hover:text-gray-800 transition-colors">
            <FaRegBookmark />
          </button>
          <button className="hover:text-gray-800 transition-colors">
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-4 leading-snug">
          {title}
        </h2>

        {/* Image */}
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-62 object-cover rounded-md mb-5"
        />

        {/* Details Text */}
        <p className="text-sm text-gray-500 leading-relaxed mb-3">
          {details.length > 200 ? (
            <>{details.slice(0, 200)}...</>
          ) : (
            details
          )}
        </p>

        {/* Read More Link (Pushed to its own line like the image) */}
        {details.length > 200 && (
          <Link
            to={`/category/${category_id}/${id}`}
            className="text-orange-400 font-semibold text-sm hover:underline block"
          >
            Read More
          </Link>
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-5 py-4 border-t border-gray-200">
        {/* Rating */}
        <div className="flex items-center text-orange-400">
          <div className="flex gap-1 text-base">
            {/* Safely handle the rating number array map */}
            {Array.from({ length: Math.round(rating?.number || 0) }).map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600 font-medium">
            {rating?.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
          <FaEye className="text-lg" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;