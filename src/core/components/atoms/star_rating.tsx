import { Star } from 'lucide-react';
import Image from 'next/image';

const StarRating = ({ rating = 0, maxStars = 5 }) => {
  return (
    <div className="flex gap-2">
      {[...Array(maxStars)].map((_, index) => (
        <Image 
        key={index}
        width={31}
        height={31}
        src={index < rating ? '/Star1.webp' : '/State=Empty.webp'}
        alt={index < rating ? "filled star" : "empty star"}
         />
      ))}
    </div>
  );
};

export default StarRating;
