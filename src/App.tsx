
import './App.css'
import Certificates from './Certificates';
import Footer from './Footer';
import Header from './Header'
import Projects from './Projects'
import FunnyTriangles from './components/FunnyTriangles';
import { LinearLayout } from './components/LinearLayout';


function App() {

  return (
    <>

      <FunnyTriangles />

      <Header />
      
      <main className='w-full max-w-5xl m-auto p-4 pt-11 pb-11'>

        <LinearLayout spacing='40px' direction='vertical'>
          <section>
            <LinearLayout direction='vertical'>
              <h4>¡Bienvenido!</h4>
              <p>Este es mi portafolio y es un gusto que estés aquí.</p>
              <p>Soy Luis Bastidas, un desarrollador Back-End.</p>
              <p>También me gusta un poco la <strong>creación de videojuegos</strong>, <strong>aplicaciones Android</strong> y el <strong>desarrollo de software</strong> de una forma general.</p>
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


      <Footer/>
    </>
  )
}

export default App
