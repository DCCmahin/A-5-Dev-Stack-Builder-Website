
import logo from "../assets/logo-text.png"

const Navebar = () => {
    return (
        <div className='bg-amber-100 fixed top-0 left-0 w-full z-50 '>

        
        <div className='flex justify-between container mx-auto items-center'>
            <div>
              <img src={logo} alt="" className='mt-8 mb-5' />
            </div>
            
            <div>
                <ul className='mt-8 flex gap-4 mb-5'>

                    <li className='text-pink-700'><a href="#Home">Home</a></li>
                    <li><a href="#Technologies">Technologies</a></li>
                    <li><a href="#Projects">rojects</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>

                <div className='mt-8 flex gap-4 mb-5'>
                 <button  className='cursor-pointer'>Sign In</button>
                 <button className='bg-pink-600 px-4 py-2 rounded-3xl cursor-pointer'>Sign Up</button>
                </div>
                
          


        </div>

        </div>
    );
};

export default Navebar;