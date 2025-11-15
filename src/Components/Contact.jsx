import dg from "../assets/images/460.png"
import ndg from "../assets/images/about_bottom.png"

const Contact = () => {

    return (

        <div>
            {/* part one */}
            <div className='flex gap-5 px-16 py-6'>
                {/* section 1 */}
                <div>
                    <p className="text-green-500">How can help you ?</p>
                    <h1 className="text-2xl font-semibold">Let us know how <br />
                        we can help you</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                        leo.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                        leo.</p>
                    <p className="text-green-400 font-semibold">Office</p>
                    <p>205 North Michigan Avenue, Suite 810
                        Chicago, 60601, USA
                        Phone: (123) 456-7890
                        Email: contact@Evara.com
                    </p>
                    <button className="bg-green-800 text-white rounded-md p-2">view map</button>
                </div>
                {/* section 2 */}
                <div>
                    <p>01. Visit Feedback</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                        leo.
                    </p>
                    <h3 className="text-green-500 p-2">03. Billing Inquiries</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                        leo.</p>
                    <h3 className="text-green-500 p-2">Studio</h3>
                    <p>205 North Michigan Avenue, Suite 810
                        Chicago, 60601, USA
                        Phone: (123) 456-7890
                        Email: contact@Evara.com</p>
                    <button className="bg-green-800 text-white rounded-md p-2">view map</button>
                </div>
                {/* section 3 */}
                <div>
                    <p>02. Employer Services</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                        leo.
                    </p>
                    <h3 className="text-green-500 p-2">04.General Inquiries</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                        elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                        leo.</p>
                    <h3 className="text-green-500 p-2">Shop</h3>
                    <p>205 North Michigan Avenue, Suite 810
                        Chicago, 60601, USA
                        Phone: (123) 456-7890
                        Email: contact@Evara.com</p>
                    <button className="bg-green-800 text-white rounded-md p-2">view map</button>
                </div>
            </div>
            {/* part tow */}
            <div  className="flex justify-around mx-auto gap-8 py-8 px-12">
                <div>
                    <p className="text-green-500">Contact form</p>
                    <h2 className="text-xl p-2 font-semibold">Drop Us a Line</h2>
                    <small className="text-gray-400 m-2">Your email address will not be published. Required fields are marked *</small>
                    <div class="grid grid-cols-2 gap-4">

                        <input type="text" placeholder="First Name" class="input input-bordered w-full" />

                        <input type="email" placeholder="Your Email" class="input input-bordered w-full" />

                        <input type="tel" placeholder="Your Phone" class="input input-bordered w-full" />

                        <input type="text" placeholder="Subject" class="input input-bordered w-full" />

                    </div>
                    <textarea className="textarea w-full border py-2 mt-5 border-x-slate-300" placeholder="Bio"></textarea>
                        <p className="bg-black w-28 py-2 items-center mt-2 mb-3 cursor-pointer rounded-md text-white">send message</p>
                    {/* <button className="btn btn-active">Default</button> */}

                </div>
                <div>
                    <img className="h-56 mt-16" src={dg} alt="loading..." />
                </div>
            </div>
                <img className="px-12 py-10" src={ndg} alt="" />
        </div>
    );
};

export default Contact;