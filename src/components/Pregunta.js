import React, { Fragment, useState } from "react";
import Error from "./Error";

const Pregunta = ({
  guardarPresupuesto,
  guardarRestante,
  actualizarPregunta,
}) => {
  //definir el state del presupuesto.
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  //funcion que lee el presupuesto y cambia el state
  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value, 10));
  };
  // funcion del submit del formulario
  const agregarPresupuesto = (e) => {
    e.preventDefault();
    //validar
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }
    //si se pasa la validacion.
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El Presupuesto es Incorrecto." /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto "
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
