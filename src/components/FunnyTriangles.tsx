
import { useEffect, useRef } from 'react';


const TRIANGLE_POSITIONS = [{ "x": 57.585140121167214, "y": 55.59977084811551, "size": 13.207791161881463, "rotation": 319.0700263493492 }, { "x": 0.8742921383433244, "y": 34.71825980678888, "size": 54.172088637889075, "rotation": 76.15536191268757 }, { "x": 25.999374245302885, "y": 88.28403459205231, "size": 24.434182117871213, "rotation": 73.64082629949596 }, { "x": 43.58186806405377, "y": 93.73236541731241, "size": 27.676900953355435, "rotation": 178.83724266907365 }, { "x": 90.39630604805312, "y": 36.48094856801514, "size": 50.486457693992136, "rotation": 190.4613912165342 }, { "x": 40.61960204386041, "y": 65.79140764105824, "size": 17.72707406441419, "rotation": 126.87431581216231 }, { "x": 76.58325106119987, "y": 94.60747744976825, "size": 32.16332124713674, "rotation": 253.8769720080397 }, { "x": 78.78012714722202, "y": 70.18100985084266, "size": 48.90858137046671, "rotation": 110.95299747365524 }, { "x": 28.81457507966051, "y": 27.06440996506028, "size": 12.31447832944744, "rotation": 133.57813156780222 }, { "x": 68.57422565379733, "y": 2.6805635390976024, "size": 47.5862682501237, "rotation": 312.67862738297185 }, { "x": 46.95698498359139, "y": 87.72191139831828, "size": 21.42778178091512, "rotation": 193.85145638329382 }, { "x": 79.92661594324102, "y": 14.33606603937536, "size": 30.467391630932184, "rotation": 358.1320967048357 }, { "x": 84.26521131054294, "y": 72.32486681118534, "size": 42.828937623288574, "rotation": 324.1103253061406 }, { "x": 65.45531647263711, "y": 7.456628372226437, "size": 11.197461473190604, "rotation": 165.72555736403396 }, { "x": 67.09189229760423, "y": 34.079069325228254, "size": 22.086503233616696, "rotation": 337.4463781430753 }, { "x": 19.337235557856392, "y": 71.42394076489549, "size": 14.571049748089422, "rotation": 63.59644900616633 }, { "x": 9.3694112093487, "y": 10.297109214566657, "size": 13.355563351779605, "rotation": 157.19703455575694 }, { "x": 86.22152369297343, "y": 9.652992140864091, "size": 39.997499976365084, "rotation": 226.6318184197433 }, { "x": 23.38684813031515, "y": 33.95421263333607, "size": 11.675584298844457, "rotation": 343.16009041742547 }, { "x": 21.93512640465256, "y": 11.441347814128289, "size": 40.1288291622043, "rotation": 335.0924239179088 }, { "x": 63.39671417378144, "y": 39.76055578300547, "size": 12.2678601583002, "rotation": 110.52705837806616 }, { "x": 4.932514282133016, "y": 53.293189887765166, "size": 18.692369803581123, "rotation": 349.987865621365 }, { "x": 45.90640821939519, "y": 45.875823129070625, "size": 16.954021086751027, "rotation": 70.49349090351882 }, { "x": 50.759632154206344, "y": 46.663806058661564, "size": 53.271035957883306, "rotation": 36.09938766606929 }, { "x": 79.86345329931424, "y": 28.547258525975792, "size": 20.173682529552117, "rotation": 123.61924414041894 }, { "x": 65.71534628854982, "y": 49.883073585834126, "size": 19.50351299547396, "rotation": 292.9381494593048 }, { "x": 7.145964478865574, "y": 77.94909502994743, "size": 10.738524412736496, "rotation": 26.58995411831073 }, { "x": 58.36929698773303, "y": 86.44457286145123, "size": 58.670278141938525, "rotation": 28.16753723324988 }, { "x": 95.89450472481053, "y": 28.934307927694302, "size": 38.85556921417084, "rotation": 9.260524977926323 }, { "x": 20.98751815836564, "y": 6.2959329781173246, "size": 50.53766080559598, "rotation": 46.28145209167661 }, { "x": 53.835885539109086, "y": 58.18032314018634, "size": 52.20555883869449, "rotation": 189.63736109700196 }, { "x": 83.20744688666956, "y": 77.00929152713233, "size": 32.47443452641453, "rotation": 289.11930246066373 }, { "x": 84.40663100296138, "y": 69.03165156049155, "size": 30.038813683401415, "rotation": 75.80256942642005 }, { "x": 58.15618967740043, "y": 87.80434437821215, "size": 40.57508414323598, "rotation": 38.38590441788781 }, { "x": 48.61167649265287, "y": 48.451424911177234, "size": 23.17431486757648, "rotation": 211.31792998384603 }, { "x": 68.91320223731556, "y": 67.61732749693557, "size": 30.188477499890112, "rotation": 215.0810761830213 }, { "x": 82.2909495337498, "y": 63.66902481066049, "size": 32.308939751831346, "rotation": 343.0410205741672 }, { "x": 82.12521467169455, "y": 90.85513098905524, "size": 40.08295075679082, "rotation": 139.89145102453975 }, { "x": 70.48969627512162, "y": 31.185586417987654, "size": 57.25607061581573, "rotation": 166.43934273011504 }, { "x": 32.855246388568496, "y": 52.57167391575186, "size": 24.947161778286038, "rotation": 103.44149411643845 }];

type FunnyTriangleTransform = {
  x: number;
  y: number;
  size: number;
  rotation: number;
};

function FunnyTriangle({transform}:{
  transform: FunnyTriangleTransform
}) {
    const triangleRef = useRef<HTMLDivElement>(null);
    const MIN_DISTANCE = 230;
    


    useEffect(() => {

        const triangle = triangleRef.current as HTMLDivElement;
        const mousePosition = { x: 0, y: 0 };
        let loopId = -1;
        
        setTimeout(() => {
            triangle.style.display = "block";
            triangle.style.opacity = "1";
        }, 500);

        function onMouseMove(event: MouseEvent) {
        mousePosition.x = event.clientX;
        mousePosition.y = event.clientY;
        }

        const mainLoop = () => {
        const x = mousePosition.x;
        const y = mousePosition.y;

        const normX = x - triangle.offsetLeft;
        const normY = y - triangle.offsetTop;

        const distance = Math.sqrt(normX ** 2 + normY ** 2);

        let result = transform.rotation;

        if (distance <= MIN_DISTANCE) {
            result = Math.atan2(normY, normX) * (180 / Math.PI) + 90;
        }

        triangle.style.transform = `translate(-50%, -50%) rotate(${result}deg)`;

        loopId = requestAnimationFrame(mainLoop);
        return loopId;
        }

        loopId = mainLoop();
        window.addEventListener('mousemove', onMouseMove);

        return () => {
        window.removeEventListener('mousemove', onMouseMove);
        cancelAnimationFrame(loopId);
        }

    }, []); 

    return (
        <div
            ref={triangleRef}
            className="triangle"
            style={{
                left: `${transform.x}%`,
                top: `${transform.y}%`,
                width: `${transform.size}px`,
                height: `${transform.size}px`,
                transform: `translate(-50%, -50%) rotate(${transform.rotation * 0}deg)`
            }}

        />
    );
  
}

export default function FunnyTriangles() {

//   const generatePositions = (size:number = 40): FunnyTriangleTransform[] => (new Array(size)).fill(null).map((_, i) => {
//     const x = Math.random() * 100;
//     const y = Math.random() * 100;
//     const size = Math.random() * 50 + 10; // Size between 10 and 60
//     const rotation = Math.random() * 360; // Rotation between 0 and 360 degrees
//     return { x, y, size, rotation };
//   });

  const POSITIONS: FunnyTriangleTransform[] = TRIANGLE_POSITIONS;

  //console.log(positions);

  return (

    <div className='inset-0 absolute overflow-clip pointer-events-none'>

      {POSITIONS.map((pos, index) => {

        return <FunnyTriangle
          key={index}
          transform={pos}
        />
      })}
      
      <style>{`
        .triangle {
            background-color: rgba(0, 0, 0, 0.08);
            clip-path: polygon(50% 0%, 100% 100%, 0% 100%);

            transform-origin: center;
            transition-property: transform, opacity;
            transition-duration: 300ms;
            transition-timing-function: ease-out;

            opacity: 0;
            display: none;
            position: absolute;
        }
      `}</style>


    </div>
  );
  
}