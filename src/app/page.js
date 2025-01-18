'use client';

import {ImageLoader, HorizontalLayout, VerticalLayout} from "../componets/utilities"

export default function Home() {
  return (

    <VerticalLayout>

      <HorizontalLayout style={{alignItems:"center"}}>

        <ImageLoader src="/images/bastiasa_face.webp" style={{ width: "20%", aspectRatio: "1", borderRadius: "1000px", overflow: "hidden" }}>
          
        </ImageLoader>

        <p style={{width:"100%", height:"fit-content"}}>
          Hello there, I'm Luis Bastidas.
        </p>

      </HorizontalLayout>

    </VerticalLayout>

  );
}