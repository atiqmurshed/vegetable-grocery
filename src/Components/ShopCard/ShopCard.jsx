import useData from '../../Hooks/useData';

const ShopCard = () => {
    const { category } = useData();
    return (
        <div>
            <div className='flex mx-auto w-[1200px]'>
                {
                    category.slice(0, 5).map((item, index) => (
                        <div key={index} className='text-start bg-gray-100 py-2 mb-5 w-[322px] h-[370px]'>
                            <img className='w-32 ml-8' src={item.image} alt="loading" />
                            <p className='text-gray-400'>{item.category}</p>
                            <p className='font-semibold'>{item.name}</p>
                            <p className='text-green-400 mb-5'><span className='text-gray-300'>By</span> {item.brand}</p>
                            <div className='flex gap-10 mb-2'>
                                <p className='text-green-500 font-bold'>$:{item.price}</p>
                                <p className='bg-green-300 px-2 rounded-md'>add</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='mx-auto px-96 mb-2 ml-20'>
                 <button className="btn btn-outline btn-success">View full menu</button>
            </div>
        </div>
    );
};

export default ShopCard;