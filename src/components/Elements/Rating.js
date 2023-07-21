
export const Rating = ({rating}) => {
    const ratingArray = Array(5).fill(false);
    for (let i = 0; i < rating; i++) {
        ratingArray[i] = rating;
        
    }
  return (
    <>
    {ratingArray.map((star,i) => {
     
     return (<i key={i} className={`${star ?'bi-star-fill':'bi-star'} text-lg bi text-yellow-500 mr-1`}></i>)
    })}
    
    </>
   
  )
}
