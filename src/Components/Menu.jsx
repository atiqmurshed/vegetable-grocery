import item from '../assets/images/icon-1.png'
import item1 from '../assets/images/icon-2.png'
import item2 from '../assets/images/icon-3.png'
import item3 from '../assets/images/icon-4.png'
import item4 from '../assets/images/icon-5.png'

const Menu = () => {

    return (
        
        <div className='flex mx-auto mb-5 px-8 gap-2 rounded-md'>

            <div className='bg-gray-100 py-4 px-4 flex gap-3 rounded-md'>
                <img className='w-8 h-8 mt-2' src={item} alt="" />
                <div>
                    <h2>Best Price & offers</h2>
                    <p className='text-xs text-gray-400'>Order $50 or more</p>
                </div>
            </div>
            <div className='bg-gray-100 py-4 px-4 flex gap-2 rounded-md'>
                <img className='w-8 h-8 mt-2' src={item1} alt="" />
                <div>
                    <h2>Free Delivery</h2>
                    <p className='text-xs text-gray-400'>24/7 amazing services</p>
                </div>
            </div>
            <div className='bg-gray-100 py-4 px-4 flex gap-2 rounded-md'>
                <img className='w-8 h-8 mt-2' src={item2} alt="" />
                <div>
                    <h2>Great daily deal</h2>
                    <p className='text-xs text-gray-400'>when you sign up</p>
                </div>
            </div>
            <div className='bg-gray-100 py-4 px-4 flex gap-2 rounded-md'>
                <img className='w-8 h-8 mt-2' src={item3} alt="" />
                <div>
                    <h2>Wide assortment</h2>
                    <p className='text-xs text-gray-400'>Mega discount</p>
                </div>
            </div>
            <div className='bg-gray-100 px-5 py-4 flex gap-2 rounded-md'>
                <img className='w-8 h-8 mt-2' src={item4} alt="" />
                <div>
                    <h2>Wide assortment</h2>
                    <p className='text-xs text-gray-400'>Mega discount</p>
                </div>
            </div>

        </div>
    );
};

export default Menu;