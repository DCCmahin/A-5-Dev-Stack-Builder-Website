





import type { IType } from '../type/TYpe';

interface IeachyechProps {
    eachTeach: IType;
    selectedStack: IType[];
    onAddStack: (technology: IType) => void;
}

const EachCard = ({
    eachTeach,
    selectedStack,
    onAddStack
}: IeachyechProps) => {

    const isAdded = selectedStack.some(
        (item) => item.name === eachTeach.name
    );

    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-orange-400 transition-all duration-300 mb-[20px] ml-[10px]">

            <div className="flex items-center justify-between mb-4">
                <img
                    src={eachTeach.icon}
                    alt={eachTeach.name}
                    className="w-14 h-14 object-contain"
                />

                <span className="text-sm font-medium bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                    {eachTeach.badge}
                </span>
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-2">
                {eachTeach.name}
            </h2>

            <p className="text-gray-500 text-sm leading-6 mb-4">
                {eachTeach.description}
            </p>

            <div className="flex justify-between items-center mb-5">

                <span className="text-sm text-gray-600 bg-sky-100 rounded-md px-3">
                    {eachTeach.category}
                </span>

                <span className="text-sm text-gray-600">
                    {eachTeach.difficulty}
                </span>

                <span className="text-sm font-semibold text-black">
                    ⭐ {eachTeach.rating}
                </span>

            </div>

            <div className="flex justify-center mt-[40px]">

                <button
                    onClick={() => onAddStack(eachTeach)}
                    disabled={isAdded}
                    className={`px-10 font-semibold py-3 rounded-2xl transition-all duration-300 ${
                        isAdded
                            ? 'bg-green-600 text-white cursor-not-allowed'
                            : 'bg-black text-white hover:bg-orange-400 hover:text-black cursor-pointer'
                    }`}
                >
                    {isAdded ? 'Added ✓' : '+ Add to Stack'}
                </button>

            </div>

        </div>
    );
};

export default EachCard;
