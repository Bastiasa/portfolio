
import './App.css'
import Certificates from './Certificates';
import Footer from './Footer';
import Header from './Header'
import Projects from './Projects'
import { LinearLayout } from './components/LinearLayout';
import LiquidChrome from './components/react-bits/LiquidChrome';


function MainBackground() {
  return (
    <div
      className='-z-1 absolute inset-0 pointer-events-none opacity-15'>
      <LiquidChrome
        baseColor={[0, 0.04, 0]}
        speed={0.03}
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
                <h4>Servicios de desarrollo web</h4>

                <p>Creo y mantengo sitios web y soluciones digitales para negocios y proyectos que necesitan funcionar bien y sin complicaciones.</p>
              </LinearLayout>
            </section>

            <section>
              <h4>Proyectos</h4>
              <Projects />
            </section>

            <section>
              <LinearLayout spacing='20px' direction='vertical'>
                <h4 className='text-center mt-16 pb-8'>Mis certificados</h4>

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
