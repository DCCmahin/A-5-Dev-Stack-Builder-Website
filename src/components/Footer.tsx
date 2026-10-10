
import imge from "../assets/logo-text.png"

const Footer = () => {
    return (
        <div className='bg-yellow-50 p-5 mt-[50px]'>
            <div className='flex justify-between container mx-auto items-center gap-50 mt-[50px] mb-[60px] '>
                <div>
                    <img src={imge} alt="" />
                    <p className='max-w-2xl leading-7'>Curated tools, technologies, and resources for developers building
                        modern software.</p>
                    <ul className='flex gap-5 mt-[50px]'>
                        <li className='font-bold'><a href="#GitHub">GitHub</a></li>
                        <li className='font-bold'><a href="#Twitter"> Twitter</a></li>
                        <li className='font-bold'><a href="#LinkedIn"> LinkedIn</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className='font-bold'> PRODUCT</h2>
                    <ul className='mt-[7px] '>
                        <li className='mb-[4px]'><a href="">Home</a></li>
                        <li className='mb-[4px]'><a href="">Technologies</a></li>
                        <li className='mb-[4px]'><a href="">Projects</a></li>

                    </ul>


                </div>



                <div>
                    <h2 className='font-bold'>  COMPANY </h2>
                    <ul className='mt-[7px] '>
                        <li className='mb-[4px]'><a href="">About</a></li>
                        <li className='mb-[4px]'><a href="">Contact</a></li>
                        <li className='mb-[4px]'><a href="">Careers</a></li>

                    </ul>


                </div>




                <div>
                    <h2 className='font-bold'>LEGAL</h2>
                    <ul className='mt-[7px] '>
                        <li className='mb-[4px]'><a href="">Privacy Policy</a></li>
                        <li className='mb-[4px]'><a href="">erms of Service</a></li>


                    </ul>
                </div>



            </div>
            <div className="divider my-2"></div>


            <div className='flex justify-between container mx-auto'>
                <p> ©26 Dev Stack. All rights reserved.</p>
                <ul className='flex gap-4'>
                    <li>Privace</li>
                    <li>Terms</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;