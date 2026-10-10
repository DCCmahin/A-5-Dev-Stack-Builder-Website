




import type { IType } from '../type/TYpe';

interface StackCardProps {
  selectedStack: IType[];
  onRemoveStack: (technologyName: string) => void;
  onClearStack: () => void;
}

const StackCard = ({
  selectedStack,
  onRemoveStack,
  onClearStack,
}: StackCardProps) => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div>
          <h2 className="text-3xl font-bold">
            Your Stack
          </h2>

          <p className="text-gray-500 mt-2">
            Selected technologies
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <span className="bg-orange-100 text-orange-700 font-semibold px-4 py-2 rounded-full">
            {selectedStack.length} Technologies
          </span>

          <button
            onClick={onClearStack}
            disabled={selectedStack.length === 0}
            className="bg-red-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-red-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            Remove All
          </button>
        </div>
      </div>

      {selectedStack.length === 0 ? (
        <div className="border-2 border-dashed border-gray-300 rounded-2xl py-16 px-4 text-center">
          <h3 className="text-xl font-semibold text-gray-700">
            No technologies selected
          </h3>

          <p className="text-gray-500 mt-2">
            Add technologies
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {selectedStack.map((technology) => (
            <div
              key={technology.name}
              className="bg-white border border-gray-200 rounded-2xl p-5 shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-14 h-14 object-contain"
                />

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg">
                    {technology.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {technology.category}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-5 gap-3">
                <span className="text-sm text-gray-600">
                  {technology.difficulty}
                </span>

                <button
                  onClick={() => onRemoveStack(technology.name)}
                  className="bg-red-100 text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default StackCard;

