import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

export default function StarRating({ rating }) {
  return (
    <div className="star-rating">
      <span>
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} index={i + 1} rate={rating?.rate} />
        ))}
      </span>
      <span>
        {rating?.rate}
        <sub> ( {rating?.count} ) </sub>
      </span>
    </div>
  );
}


function Star({ index, rate }) {
    return (
      <>
        {index < rate && <StarRoundedIcon />}
        {index > rate && <StarBorderRoundedIcon />}
      </>
    );
  }