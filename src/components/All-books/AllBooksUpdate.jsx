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

        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.modifiedCount) {
                Swal.fire(
                    'Good job!',
                    'Update Product succesfully',
                    'success'
                )
            }
        })
}

return (
    <div className="bg-[#F4F3F0] p-20">
        <h2 className="text-3xl text-green-500 font-bold">Update Book of :{name}</h2>
        <form onSubmit={handleClickUpdate} >
            {/* form name and author name row */}
            <div className="  md:flex ">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text"> Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" defaultValue={name} placeholder=" Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Author</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="Author" defaultValue={Author} placeholder="Author Name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>