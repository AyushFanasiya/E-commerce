/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black' >Testimonial</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-red-500'>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://niqox.com/assets/img/team/mitul.jpg" />
                                <p className="leading-relaxed">“Clean code, responsive design, and smooth interactions — exactly what any frontend developer would appreciate. Loved working with this interface!”</p>
                                <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Mitul Kalsariya</h2>
                                <p className="text-gray-500">Senior Frontend Developer</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="	https://niqox.com/assets/img/team/6.png"/>
                                <p className="leading-relaxed">“The UI is sleek, intuitive, and performs flawlessly across devices. It's clear that a lot of thought and care went into every component. Truly a frontend developer's delight.”</p>
                                <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Karan Kakadiya</h2>
                                <p className="text-gray-500">Lead UI/UX Designer</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://niqox.com/assets/img/team/hardik.jpg" />
                                <p className="leading-relaxed">“This project showcases a strong grasp of React component structuring. The state management is clean, and the UI responsiveness is good.”</p>
                                <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kinay Dhanani</h2>
                                <p className="text-gray-500">React Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial