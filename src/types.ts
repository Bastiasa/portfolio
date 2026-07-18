export type ProjectInfo = {
  title: string;
  description: string;
  cover: string;
  link?: string;
  blank?: boolean;
  pixelatedCover?: boolean;
  year?: number;
};

export type CertificateData = {
  image: string;
  url: string;
  title?: string;
  issuer?: string;
};
