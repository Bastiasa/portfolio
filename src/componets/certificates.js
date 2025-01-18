import "./styles/certificates.css";


class CertificatesData {
    static PROGRAMMING = [
        ["9123002706555TI1107854150C", "PHP"],
        ["9502002716242TI1107854150C", "JAVA"],
        ["diploma-godot-videojuegos2d", "Godot Engine 2D"],
        ["diploma-introduccion-godot", "Godot Engine"],
    ];

    static ENGLISH = [
        ["international-english-cert", "English B2"],
        ["national-english-cert", "English B2 (national)"]
    ]

    static OTHERS = [
        ["federación-caicedo-gonzález-cert", "CG Foundation"]
    ]
}



function Cert({ certData }) {
    
    const certSource = certData[0];
    const certName = certData[1];

    return (
        <a href={`/certs_media/${certSource}.pdf`} target="_blank" rel="noopener noreferrer" style={{
            position: "relative",
            
        }}>

            <span     
                className="cert-tooltip"
            >
                {certName}
            </span>

            <img
                src={`/certs_media/${certSource}.webp`}
                alt="Certificate"
                className="cert-thumbnail"

            />
        </a>
    );
}

function CertsContainer({ certs = CertificatesData.OTHERS, title = "Certificates" }) {
    return (

        <div>

            <h1 style={{

                padding: "20px",
                fontSize: "24px",
                fontWeight: "bold",
                backgroundColor: "rgba(0,0,0,0.24)"
            }}>
                {title}
            </h1>

            <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "40px",
                flexWrap: "wrap",
                padding: "40px 20px"
            }}>
                
                {certs.map((certData) => (
                    <Cert key={certData[0]} certData={certData} />
                ))}
            </div>
        </div>
    );
}

export { CertsContainer, CertificatesData };