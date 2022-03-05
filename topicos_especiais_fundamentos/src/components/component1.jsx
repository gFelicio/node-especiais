import React from "react";

// function func1 () {
//     return <h1>Componente Um</h1>;
// }

// export default func1;

// shorthand component
// export default () => <h1>Componente Arrow Function</h1>;

// pode ser passado outras coisas além de um comp
// export default () => (10+10);

export default (props) =>
    <div>
        <h1>
            {props.valor}
        </h1>

        <h2>
            {props.soma}
        </h2>
    </div>