import RootLayout from "../layout";
import {CertsContainer, CertificatesData} from "../../componets/certificates"
import Header from "../../componets/main_root_header"


export const metadata = {
  title: 'Bastiasa | Certificates',
  description: 'Descripción específica de esta página',
};

export default function Page() {
    return (
        <div>
            <CertsContainer title="Programming" certs={CertificatesData.PROGRAMMING}></CertsContainer>
            <CertsContainer title="English" certs={CertificatesData.ENGLISH}></CertsContainer>
            <CertsContainer title="Other" certs={CertificatesData.OTHERS}></CertsContainer>
        </div>
    );
}