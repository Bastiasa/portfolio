import { ImageLoader } from "./components/ImageLoader";
import { LinearLayout } from "./components/LinearLayout";

import './Certificates.css';

const SQUARE_LIKE_CERTS: CertificateData[] = [
  { name: 'Desarrollo web con PHP', sourceName: '9123002706555TI1107854150C' },
  { name: 'Variables y estructuras: Java', sourceName: '9502002716242TI1107854150C' },
  { name: 'Crear un videojuego Shoot\'em up', sourceName: 'diploma-godot-videojuegos2d' },
  { name: 'Introducción a Godot', sourceName: 'diploma-introduccion-godot' },
  { name: 'Fundación Caidedo González', sourceName: 'federación-caicedo-gonzález-cert' }
]

const RECTANGLE_LIKE_CERTS: CertificateData[] = [
  { name: 'Inglés B2 internacional', sourceName: 'international-english-cert' },
  { name: 'Inglés B2 nacional', sourceName: 'national-english-cert' }
]

type CertificateData = {
    name: string;
    sourceName: string;
}

function Certificate({ data }: { data: CertificateData }) {

    return (

        <a
            href={`/portfolio/certificates/${data.sourceName}.pdf`}
            className="certificate-container inline-block relative"
        >

            <span className="certificate-name absolute">{data.name}</span>

            <ImageLoader
                className="certificate-cover inline-block"
                src={`/portfolio/certificates/${data.sourceName}.webp`}
                alt={data.name}
                clip={false}
            />

        </a>
        
    );
}

function _certShow({certificates}:{certificates:CertificateData[]}) {
    return <LinearLayout className="flex-wrap" justifyContent="center" spacing="15px">
        {certificates.map((data, i)=> {
            return <Certificate data={data} key={`cert#${i}`} />
        })}
    </LinearLayout>
}

export default function Certificates() {
    

    return <LinearLayout direction="vertical" spacing="30px">
    
    <_certShow certificates={SQUARE_LIKE_CERTS}/>
    <_certShow certificates={RECTANGLE_LIKE_CERTS}/>

    </LinearLayout>;
}