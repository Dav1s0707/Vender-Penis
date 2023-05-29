import "../App.css";
import Button from 'react-bootstrap/Button';

function Item() {
  return (
    <div className="item">
      <img
        src="https://havaianas.com.br/dw/image/v2/BDDJ_PRD/on/demandware.static/-/Sites-havaianas-master/default/dw4b8fae18/product-images/4146091_0001_HAVAIANAS%20KIDS%20BEN10_C.png?sw=680&sh=680"
        className="bem10"
      />

      <h3>Tenis Ben (irado) 10</h3>
      <p>Descrição</p>
      <>
        <Button variant="success">Tem que arrumar esse botao</Button>{' '}     
      </>
    </div>
  );
}

export default Item
