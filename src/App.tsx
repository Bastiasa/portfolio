
import { useEffect, useState } from 'react';
import './App.css'
import Certificates from './Certificates';
import Footer from './Footer';
import Header from './Header'
import Projects from './Projects'
import { LinearLayout } from './components/LinearLayout';
import LiquidChrome from './components/react-bits/LiquidChrome';


function MainBackground() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 1) {
      setCount(count+1);
    }
  }, [count]);
  return (
    <div
      className='-z-1 absolute inset-0 pointer-events-none opacity-10'>
      <LiquidChrome
        baseColor={[48/255, 76/255, 137/255]}
        speed={0.06}
        amplitude={0.6}
        interactive={false}
      />
    </div>);
}


function App() {

  return (
    <>


      <Header />
      
      <div>

        <MainBackground />
        
        <main className='w-full max-w-5xl m-auto p-4 pt-11 pb-11'>

          <LinearLayout spacing='40px' direction='vertical'>
            <section>
              <LinearLayout direction='vertical'>
                <h2>Servicios de desarrollo web</h2>

                <p>Creo y mantengo sitios web y soluciones digitales para negocios y proyectos que necesitan funcionar bien y sin complicaciones.</p>
              </LinearLayout>
            </section>

            <section>
              <h2>Proyectos</h2>
              <Projects />
            </section>

            <section>
              <LinearLayout spacing='20px' direction='vertical'>
                <Certificates/>
              </LinearLayout>

            </section>
          </LinearLayout>


        </main>
      </div>
     


      <Footer/>
    </>
  )
}

export default App
