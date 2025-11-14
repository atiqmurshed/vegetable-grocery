import eggMaking from '../../assets/images/about_left.png'
import abou from '../../assets/images/about-1.png'
import abut1 from '../../assets/images/about-2.png'
import abut2 from '../../assets/images/about-3.png'

import icon from '../../assets/images/icon-1.png'
import icon1 from '../../assets/images/icon-2.png'
import icon2 from '../../assets/images/icon-3.png'
import icon3 from '../../assets/images/icon-4.png'
import icon4 from '../../assets/images/icon-5.png'
import icon5 from '../../assets/images/icon-6.png'
const About = () => {

    return (

        <div>
            <div className='flex mx-auto my-2 px-24'>
                <div>
                    <img className='h-[480px] w-[1500px]' src={eggMaking} alt="loading" />
                </div>
                <div>
                    <h2 className='text-xl px-4 my-2 font-semibold'>Welcome to Nest</h2>
                    <p className='px-4 mb-2 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate id est laborum.</p>

                    <p className='px-4 text-gray-500'>Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos
                        interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet
                        orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare
                        lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate id est laborum.</p>

                    <div className='flex my-2 gap-5 mt-4 px-4'>
                        <div>
                            <img className='h-[110px] w-[100px]' src={abou} alt="" />
                        </div>
                        <div>
                            <img className='h-[110px] w-[100px]' src={abut1} alt="" />
                        </div>
                        <div>
                            <img className='h-[110px] w-[100px]' src={abut2} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-auto text-center p-5'><h1 className='text-xl font-semibold'>What we Provide ?</h1></div>

            <div>
                <div className='flex text-center gap-5 py-4'>
                    <div className='bg-gray-100'>
                        <img className='w-[80px] h-[80px] ml-32 m-2' src={icon} alt="loading..." />
                        <h3>Best Prices & Offers</h3>
                        <p>There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form</p>
                        <button>Read More</button>
                    </div>
                    <div className='bg-gray-100'>
                        <img className='w-[80px] h-[80px] ml-32 m-2' src={icon1} alt="loading..." />
                        <h3>Best Prices & Offers</h3>
                        <p>There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form</p>
                        <button>Read More</button>
                    </div>
                    <div className='bg-gray-100'>
                        <img className='w-[80px] h-[80px] ml-32 m-2' src={icon2} alt="loading..." />
                        <h3>Best Prices & Offers</h3>
                        <p>There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form</p>
                        <button>Read More</button>
                    </div>
                </div>

                <div className='flex align-middle text-center gap-5 py-4'>
                    <div className='bg-gray-100'>
                        <img className='w-[80px] h-[80px] ml-32 m-2' src={icon3} alt="loading..." />
                        <h3>Best Prices & Offers</h3>
                        <p>There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form</p>
                        <button>Read More</button>
                    </div>
                    <div className='bg-gray-100'>
                        <img className='w-[80px] h-[80px] ml-32 m-2' src={icon4} alt="loading..." />
                        <h3>Best Prices & Offers</h3>
                        <p>There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form</p>
                        <button>Read More</button>
                    </div>
                    <div  className='bg-gray-100'>
                        <img className='w-[80px] h-[80px] ml-32 m-2' src={icon5} alt="loading..." />
                        <h3>Best Prices & Offers</h3>
                        <p>There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;