
import { Suspense, useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Navebar from './components/Navebar'
import LoadTechnologies from './components/LoadTechnologies'
import type { IType } from './type/TYpe'
import Footer from './components/Footer'
import StackCard from './components/StackCard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const loadTechnologiesfetch = async (): Promise<IType[]> => {
  const res = await fetch("/data.json")
  const data = await res.json()
  return data
}

function App() {

  const [technologyPromise] = useState(() => loadTechnologiesfetch())



  const [selectedStack, setSelectedStack] = useState<IType[]>([]);







  const handleAddStack = (technology: IType) => {
    const alreadyAdded = selectedStack.some(
      (item) => item.name === technology.name
    );

    if (alreadyAdded) {
      toast.info(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack successfully!`
    );
  };



  // Remove one technology
  const handleRemoveStack = (technologyName: string) => {
    setSelectedStack((previousStack) =>
      previousStack.filter(
        (item) => item.name !== technologyName
      )
    );
  };

  // Remove all technologies
  const handleClearStack = () => {
    setSelectedStack([]);
  };




  return (
    <>

      <Navebar />
      <Hero />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="colored"
         />


          <Suspense fallback={<h2>Loading...</h2>}>
            <LoadTechnologies
              technologyPromise={technologyPromise}
              selectedStack={selectedStack}
              onAddStack={handleAddStack}
            />
          </Suspense>
      

        {/* Your Stack - Right Side */}
        
          <StackCard
            selectedStack={selectedStack}
            onRemoveStack={handleRemoveStack}
            onClearStack={handleClearStack}
          />
       
      <Footer />


    </>
  )
}

export default App
