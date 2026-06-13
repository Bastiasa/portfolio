
import { Icon } from './components/Icon';

import { ImageLoader } from './components/ImageLoader';
import { LinearLayout } from './components/LinearLayout';

const RAW_MEDIA_LOGOS:Record<string,string> = import.meta.glob("./assets/footer_logos/*.svg", {eager:true});

const MEDIA_LOGOS = Object.fromEntries(
  Object.entries(RAW_MEDIA_LOGOS).map(([path, module]:[string, {default?:string} | string]) => {
    const filename = path.split("/").pop(); // ej: logo.svg
    if (typeof module == "object") {
        module = module.default || "";
    }
    return [filename, module];
  })
);

type SocialMediaData = {
    logo: string;
    link: string;
    name: string;
}

const SOCIAL_MEDIA: SocialMediaData[] = [
    {
        logo: MEDIA_LOGOS['linkedin_logo.svg'],
        link: "https://www.linkedin.com/in/luis-bastidas-64b06a29b/",
        name: "LinkedIn"
    },

    {
        logo: MEDIA_LOGOS['github_logo.svg'],
        link:"https://github.com/Bastiasa",
        name:"GitHub"
    },

    {
        logo: MEDIA_LOGOS['upwork_logo.svg'],
        link: "https://www.upwork.com/freelancers/~01fbbb2576482e139e",
        name: "Upwork"
    },
    {
        logo: MEDIA_LOGOS['fiverr_logo.svg'],
        link: "https://es.fiverr.com/sellers/bastiasa12/edit",
        name: "Fiverr"
    },
    {
        logo: MEDIA_LOGOS['freelancer_logo.svg'],
        link: "https://www.freelancer.com/u/Bastiasa",
        name: "Freelancer"
    },
]

const MEDIA_LOGO_SIZE = "48px"

export default function Footer() {
    return (

        <footer className="text-white bg-black border-t-2 border-t-[#304C89] p-4 text-2xl">

            <LinearLayout alignItems='center' direction='vertical' spacing='32px'>
                <h4 className='text-center'>Contacto</h4>

                <LinearLayout className='w-full max-w-150' justifyContent='space-around' spacing='0'>

                    {SOCIAL_MEDIA.map((data, index) => {
                        
                        return (
                            <a href={data.link} key={`social_media#${index}`}>
                                <ImageLoader
                                    width={MEDIA_LOGO_SIZE}
                                    height={MEDIA_LOGO_SIZE}
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