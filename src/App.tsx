
import './App.css'
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
      
      <main className='w-full max-w-2xl m-auto p-4 pt-11'>

        <LinearLayout spacing='20px' direction='vertical'>
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
        </LinearLayout>


      </main>

      <Footer/>
    </>
  )
}

export default App
