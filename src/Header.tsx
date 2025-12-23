// import { ImageLoader } from "./components/ImageLoader";

// import HEADER_IMAGE_SOURCE from "./assets/header_image.png";
import { LinearLayout } from "./components/LinearLayout";

import './Header.css';

export default function Header() {
  return (
      <header className="bg-black border-b-2 border-b-[#304C89] p-4">
          
          <LinearLayout justifyContent="center" alignItems="center" spacing="30px" className="items-center justify-center">
              <LinearLayout alignItems="center" className="text-white" direction="vertical" spacing="6px" justifyContent="center" style={{ clipPath: "inset(0 100% 0 0)", animation: "1s ease-out 1s 1 normal forwards running right-inset-showing" }}>
                    <h3 className="font-bold" style={{lineHeight:"24px"}}>Luis Bastidas</h3>
                    <h4 style={{lineHeight:"24px"}}>Desarrollador</h4>
              </LinearLayout>
              
          </LinearLayout>
    </header>
  )
}
