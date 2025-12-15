import { LinearLayout } from "./components/LinearLayout";

import './Certificates.css';

import APTIS_LOGO from './assets/certifications-logos/aptis_logo.png';
import PHP_LOGO from './assets/certifications-logos/php_logo.webp';
import JAVA_LOGO from './assets/certifications-logos/java_logo.webp';

// const SQUARE_LIKE_CERTS: readonly CertificateData[] = [
//     { name: 'Desarrollo web con PHP', sourceName: '9123002706555TI1107854150C' },
//     { name: 'Variables y estructuras: Java', sourceName: '9502002716242TI1107854150C' },
//     { name: 'Crear un videojuego Shoot\'em up', sourceName: 'diploma-godot-videojuegos2d' },
//     { name: 'Introducción a Godot', sourceName: 'diploma-introduccion-godot' },
//     { name: 'Fundación Caidedo González', sourceName: 'federación-caicedo-gonzález-cert' }
// ] ;

// const RECTANGLE_LIKE_CERTS: readonly CertificateData[] = [
//     { name: 'Aptis B2', sourceName: 'international-english-cert' },
//     { name: 'Inglés B2 nacional', sourceName: 'national-english-cert' }
// ];

const CERTIFICATIONS: readonly CertificateData[] = [
    {
        image: PHP_LOGO,
        url:"certificates/9123002706555TI1107854150C.pdf"
    },
    {
        image: JAVA_LOGO,
        url:"certificates/9502002716242TI1107854150C.pdf"
    },
    {
        image: APTIS_LOGO,
        url: "https://credentials.britishcouncil.org/37a53c25-e2bf-41f0-85e6-88133caad087?key=c8d0195bacb345d8d6b4930107b5b5072840e8a9750994123f6eb76115bb70de"
    }
];


type CertificateData = {
    image: string;
    url: string;
}

// function Certificate({ data }: { data: (CertificateData & { side?: 'left' | 'right' }) }) {

//     // return (

//     //     <a
//     //         href={`/portfolio/certificates/${data.sourceName}.pdf`}
//     //         className="certificate-container relative"
//     //     >

//     //         <span className="certificate-name absolute">{data.name}</span>

//     //         <ImageLoader
//     //             className="certificate-cover"
//     //             src={`/portfolio/certificates/${data.sourceName}.webp`}
//     //             alt={data.name}
//     //             clip={false}
//     //         />

//     //     </a>
        
//     // );

//     const BASE_SRC = `/portfolio/certificates/${data.sourceName}`;
//     const IMAGE_SRC = `${BASE_SRC}.webp`;

//     return (

//         <LinearLayout
//             justifyContent="center"
//             alignItems="center"
//             direction="horizontal"
//             className={`gap-4 w-full background-primary py-4 ${data.side == 'right' ? 'flex-row!' : 'flex-row-reverse!'}`}>
            
//             <ImageLoader
//                 width={300}
//                 height={500}
//                 src={IMAGE_SRC}
//                 alt={data.name} />
            
//             <h2>{data.name}</h2>


//         </LinearLayout>

//     );
// }

function _certShow({certificates}:{certificates:readonly CertificateData[]}) {
    // return <LinearLayout className="flex-wrap w-full" justifyContent="center" spacing="0">
    //     {certificates.map((data, i)=> {
    //         return <Certificate data={data} key={`cert#${i}`} />
    //     })}
    // </LinearLayout>
    return <div
        className="ml-auto">
        
        <LinearLayout
            direction="horizontal"
            justifyContent="flex-end"
            spacing="16px"
            className="w-fit middle text-right">

            {certificates.map((certData, index) => {

                return (
                    <a key={index} href={certData.url}>
                        <img
                            className="w-auto h-[72px] hover:brightness-120"
                            alt="_blank"
                            src={certData.image} />
                    </a>
                )
            })}

        </LinearLayout>

        <p className="mt-2 font-bold text-center">CERTIFICADOS</p>
        
    </div>
}

export default function Certificates() {
    

    return <LinearLayout direction="vertical" spacing="40px">
    <_certShow certificates={CERTIFICATIONS}/>

    </LinearLayout>;
}