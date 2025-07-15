import { ImageLoader } from "./components/ImageLoader";

import HEADER_IMAGE_SOURCE from "./assets/header_image.jpg";
import { LinearLayout } from "./components/LinearLayout";

import './Header.css';

export default function Header() {
  return (
      <header className="background-primary p-4">
          
          <LinearLayout justifyContent="center" alignItems="center" spacing="30px" className="items-center justify-center">
              <ImageLoader className="header-image" style={{borderRadius:"7px"}} src={HEADER_IMAGE_SOURCE} alt="Luis Bastidas" />

              <LinearLayout alignItems="center" style={{ clipPath: "inset(0 100% 0 0)", animation: "1s ease-out 1s 1 normal forwards running right-inset-showing" }} className="text-white" direction="vertical" spacing="0" justifyContent="center" >
                    <h3 className="mt-4">Luis Bastidas</h3>
                    <h4 className="font-light mt-2">Desarrollador</h4>
              </LinearLayout>
              
          </LinearLayout>
    </header>
  )
}
