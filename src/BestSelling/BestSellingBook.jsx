import { useEffect, useState } from "react";
import SellingBookDetails from "./SellingBookDetails";

const BestSellingBook = () => {
    const [allCart, setAllCart] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('bestSellBook.json')
            .then(res => res.json())
            .then(data => setAllCart(data))
    }, []);

    const handleShowAllCart = () => {
        setShowAll(true);
    }

    const displayedCards = showAll ? allCart : allCart.slice(0, 3);

    return (
        
    );
};

export default BestSellingBook;