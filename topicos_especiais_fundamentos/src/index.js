import React from "react";
import ReactDOM from "react-dom";
// import Component1 from './components/component1';
// import {ComponentA, ComponentB} from './components/DoisComponentes';
import MultiElementos from "./components/MultiElementos";
const element = document.getElementById('root');

ReactDOM.render(
    <>
        <div>
            {/* <Component1 valor="asfefadas" soma={10+10}/>
            <ComponentA valor="Componente Um" />
            <ComponentB valor="Componente Dois" /> */}
            <MultiElementos />
        </div>
    </>
    , element
)