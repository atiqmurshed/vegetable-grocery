import useData from "../../Hooks/useData";

import alt from '../../assets/images/alt.png'
import alt1 from '../../assets/images/alt_2.png'
import alt2 from '../../assets/images/alt_3.png'


const Card = () => {
    const { item, loading } = useData()
    console.log(item, loading);
    if (loading) {
        return <p>Loading...</p>; // optional loading state
    }
    return (
        <div className="container py-5 mx-auto">
            <div className="flex justify-center gap-2">
                {item.map((dataItem, index) => (
                    <div key={index} className="flex flex-col items-center w-64 h-54 px-5 py-4 rounded-md bg-gray-100 text-center">
                        <img className="w-24 h-16 mb-2" src={dataItem.image} alt="" />
                        <h3 className="text-gray-700 font-semibold">{dataItem.name}</h3>
                        <p className="text-xs text-gray-400">{dataItem.items} items</p>
                    </div>
                ))}
            </div>

            {/* big card data className="py-64" style={{ backgroundImage: `url(${alt})` }}*/}
            <div className="flex justify-around gap-32 py-8 mr-36 mb-32">
                <div className="w-[200px]">
                    <img className="absolute w-[400px]" src={alt} alt="" />
                    <p className="relative text-xl px-2 mt-5">Everyday Fresh<br />
                        Clean with Our <br />
                        Products
                    </p>
                    <div className="px-2 my-4">
                        <button className="relative bg-green-600 w-20 rounded-md text-white">Shop Now</button>
                    </div>
                </div>
                <div className="w-[200px]">
                    <img className="absolute w-[400px]" src={alt1} alt="" />
                    <p className="relative text-xl mt-2 p-2">Make Breakfast<br />
                        Healthy and Easy
                    </p>
                    <div className="p-2">
                        <button className="relative bg-green-600 w-20 rounded-md text-white">Shop Now</button>
                    </div>
                </div>
                <div className="w-[200px]">
                    <img className="absolute w-[400px]" src={alt2} alt="" />
                    <p className="relative text-xl p-2">The best Organic<br />
                        Products Online
                    </p>
                    <div className="p-2">
                        <button className="relative bg-green-600 w-20 rounded-md text-white">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;