function Card({ datos }) {
  return (
    <p>
      Hola {datos.nombre}! Mi palabra favorita también es "{datos.palabra}" 😜
    </p>
  );
}
export default Card;
