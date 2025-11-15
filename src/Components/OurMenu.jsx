import { Link } from "react-router-dom";
import useData from "../Hooks/useData";


const OurMenu = () => {

    const { category } = useData();

    return (

        <div>
            <div className="flex justify-between px-5 mb-8 py-5">
                <div>
                    <h1 className="text-xl font-semibold">Popular Products</h1>
                </div>
                <div className="flex gap-5">
                    <Link className="text-green-500 cursor-pointer">All</Link>
                    <Link className="cursor-pointer">BookMaterial</Link>
                    <Link className="cursor-pointer">Fresh Fruits</Link>
                    <Link className="cursor-pointer">Vegetable</Link>
                    <Link className="cursor-pointer">Milks and Dairies</Link>
                    <Link className="cursor-pointer">Meats</Link>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 px-7">
                {
                    category.map((k, i) => (
                        <div key={i} className="mb-10 m-1" >
                            <div className="card bg-base-100 shadow-xl">
                                <figure>
                                    <img className="w-36 h-32"
                                        src={k.image}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <p className="text-gray-400">{k.category}</p>
                                    <p className="card-title">{k.name}</p>
                                    <h2>By <p className="text-green-400">{k.brand}</p></h2>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>

    );

};

export default OurMenu;