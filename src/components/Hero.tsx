
import banner from "../assets/banner-stack.png"
const Hero = () => {
    return (
        <div className="flex justify-between container mx-auto mt-35">
            <div>
                <h2 className="text-3xl font-bold">Build Your Ideal
                </h2>
                <h2 className="text-3xl font-bold  bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Development Stack</h2>
                <p className="max-w-xl leading-7 mt-4 text-shadow-amber-100">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</p>

                    <div className='mt-8 flex gap-4 mb-5'>
                        <button className='bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold py-3 rounded-xl hover:from-orange-600 hover:to-pink-700 transition-all duration-300 px-4 py-2 rounded-md cursor-pointer'> Explore Technologies</button>
                        <button className="border-2 border-amber-100 px-4 py-2 rounded-md cursor-pointer"> Learn More</button>
                    </div>
               
               
            </div>

            <div>
                <img src={banner} alt="" className="h-[300px] w-[300px]" />
            </div>
        </div>
    );
};

export default Hero;