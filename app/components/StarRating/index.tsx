'use client';
import { useState } from "react";
import { IoMdStar } from "react-icons/io";


export default function StarRating() { 
    const [rating, setRating] = useState(0);
    const [ishovered, setishovered] = useState <[boolean, number]>([false, 0])
    return(
<div className="flex gap-2">
    {[1, 2, 3, 4, 5].map((star) => (
        <button 
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setishovered([true, star])}
            onMouseLeave={() => setishovered([false, 0])}
            className={`${(star <= rating) || (ishovered[0] == true) && (star <= ishovered[1]) ? "text-yellow-500" : "text-gray-300"}`}>
            <IoMdStar/>
            </button>
    ))}
</div>
)
}
