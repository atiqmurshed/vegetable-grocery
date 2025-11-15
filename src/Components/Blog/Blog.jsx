import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import vac from '../../assets/images/Vector.png'
import { IoGridOutline } from 'react-icons/io5';
import { TbSortDescending } from 'react-icons/tb';
import useData from '../../Hooks/useData';


const Blog = () => {
const {blog} = useData()
    return (

        <div className=''>
            {/* nav items */}
            <div className='flex m-5 justify-between px-12'>
                <div className="flex gap-3">
                    <img className='w-6 h-6' src={vac} alt="" />
                    <h1 className="text-xl font-semibold">Recips Articles</h1>
                </div>
                <div className='flex gap-3'>
                    <div className='flex bg-gray-100 rounded-md items-center gap-2 p-2'>
                        <IoGridOutline />
                        <button>Show: 50</button>
                        <MdOutlineKeyboardArrowDown />
                    </div>
                    <div className='flex bg-gray-100 rounded-md items-center gap-2 p-2'>
                        <TbSortDescending />
                        <h2>Sort: Featured</h2>
                        <MdOutlineKeyboardArrowDown />
                    </div>
                </div>
            </div>
            {/* category card section */}
            
            <section className='grid grid-cols-1 py-3 lg:grid-cols-3 px-10'>
                    {
                        blog.map((b) => (
                            <div className='mb-5 text-center'>
                                <img src={b.image} alt="" />
                                <h2 className='text-gray-400'>{b.name}</h2>
                                <p className='text-xl font-semibold'>{b.title}</p>
                                <div className='flex text-gray-400 justify-center p-2 gap-2'>
                                    <p>{b.date}</p>
                                    <p>{b.views} Views</p>
                                    <p>{b.minutes} mins red</p>
                                </div>
                            </div>
                        ))
                    }
            </section>

        </div>
    );
};

export default Blog;