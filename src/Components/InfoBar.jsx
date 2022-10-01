import "./infobar.css";

const InfoBarComponent = ({ carrito, handleKeyUp }) => {
  return (
    <div className="containe-infobar">
      <form>
        <input
          className="input"
          type="text"
          onInput={handleKeyUp}
          placeholder="Buscar productos, marcas y mas.."
        />
        <button className="btn-infobar"> ↺ </button>
      </form>
      elementos en el carrito :{carrito.length}
    </div>
  );
};
export default InfoBarComponent;
