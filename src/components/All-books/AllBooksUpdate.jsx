import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const AllBooksUpdate = () => {
    const BookInfo = useLoaderData()
    console.log(BookInfo)
    const{name,Author,image,Quantity,description,rating,Category,_id} =BookInfo;
    
    const handleClickUpdate = (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const Author = form.Author.value
        const image = form.image.value
        const Quantity = form.Quantity.value
        const description = form.description.value
        const rating = form.rating.value
        const Category = form.Category.value
        const updateBook = { name, Author, image, Quantity, description, rating, Category }
        console.log(updateBook)
        fetch(`https://library-management-system-server-pi.vercel.app/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBook)
        })