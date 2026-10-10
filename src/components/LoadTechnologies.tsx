import { use } from 'react';
import type { IType } from '../type/TYpe';
import TechnologyCard from './TechnologyCard';

interface technologyProps{
    technologyPromise:Promise<IType[]>
     selectedStack: IType[];
     onAddStack: (technology: IType) => void;

}

const LoadTechnologies = ({technologyPromise, selectedStack,onAddStack}:technologyProps) => {

    console.log(technologyPromise)
     const Technology=use(technologyPromise)
     console.log(Technology)
    return (
        <div className='container mx-auto'>
           <h3 className='font-bold text-3xl'>Explore The <span className='text-pink-400'>Thechnologies</span></h3>
           <p className='mt-[4px]'>Pick one technology per category to build your ideal stack.</p>
           
            


           <TechnologyCard 
           Technology={Technology}
           selectedStack={selectedStack}
          onAddStack={onAddStack}
           
           />
            
        </div>
    );
};

export default LoadTechnologies;