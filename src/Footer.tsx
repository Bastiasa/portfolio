
import FIVERR_LOGO from './assets/footer_logos/fiverr_logo.svg';
import FREELANCER_LOGO from './assets/footer_logos/frelancer_logo.svg';
import LINKEDIN_LOGO from './assets/footer_logos/linkedin_logo.svg';
import UPWORK_LOGO from './assets/footer_logos/upwork_logo.svg';
import { Icon } from './components/Icon';

import { ImageLoader } from './components/ImageLoader';
import { LinearLayout } from './components/LinearLayout';

type SocialMediaData = {
    logo: string;
    link: string;
    name: string;
}

const SOCIAL_MEDIA: SocialMediaData[] = [
    {
        logo: FIVERR_LOGO,
        link: "https://es.fiverr.com/sellers/bastiasa12/edit",
        name: "Fiverr"
    },
    {
        logo: FREELANCER_LOGO,
        link: "https://www.freelancer.com/u/Bastiasa",
        name: "Freelancer"
    },
    {
        logo: LINKEDIN_LOGO,
        link: "https://www.linkedin.com/in/luis-bastidas-64b06a29b/",
        name: "LinkedIn"
    },
    {
        logo: UPWORK_LOGO,
        link: "https://www.upwork.com/freelancers/~01fbbb2576482e139e",
        name: "Upwork"
    }
]

export default function Footer() {
    return (

        <footer className="text-white bg-black border-t-2 border-t-green-700 p-4">

            <LinearLayout alignItems='center' direction='vertical' spacing='14px'>
                <h4 className='text-center'>Contacto</h4>

                <LinearLayout justifyContent='center' spacing='20px'>

                    {SOCIAL_MEDIA.map((data, index) => {
                        
                        return (
                            <a href={data.link} key={`social_media#${index}`}>
                                <ImageLoader
                                    width='32px'
                                    height='32px'
                                    src={data.logo}
                                    alt={data.name} />
                            </a>

                        );

                    })}
                </LinearLayout>

                <section className='text-center underline'>
                    <a style={{ color: "white" }} href="mailto:leysantqm@gmail.com">leysantqm@gmail.com <Icon name='mail' /></a>
                    <br />
                    <a style={{color:"white"}} href="tel:+573126850338">+57 312-685-033-8 <Icon name='phone_android'/></a>
                </section>

            </LinearLayout>

        </footer>
    );
}