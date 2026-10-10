
import type { IType } from '../type/TYpe';
import EachCard from './EachCard';


interface ItechnologtCardProps{
   Technology:IType[]
   selectedStack: IType[];
  onAddStack: (technology: IType) => void;

}
const TechnologyCard = ({Technology,selectedStack,onAddStack}:ItechnologtCardProps) => {
    return (
                 
         
        <div className='grid grid-cols-3 gap-2 mt-6 container mx-auto'>

            
        {
                

            Technology.map((eachTech:IType,ind:number)=>{
                return(
                    <EachCard 
                     key={ind} 
                     eachTeach={eachTech}
                      selectedStack={selectedStack}
                      onAddStack={onAddStack}

                    />
                )
            })
        }
        </div>
    );
};

export default TechnologyCard;