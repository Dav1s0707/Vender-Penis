// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from "./comps/Header";
import Item from "./comps/Item";
import Footer from "./comps/Footer";

function App() {
  return (
    <div className="bg">
      <Header />
      <h2 className="itens">Tendencia🤩🤩</h2>
      <img
        src="https://static3.tcdn.com.br/img/img_prod/577735/tenis_de_led_among_us_infantil_18958837_3_533a967a2466e68442c9d367cc91b55a.jpg"
        alt=""
        className="carrosel"
      />
      <h2 className="itens">Nossos itens🤤</h2>
      <div className="itens">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <Footer />
    </div>
  );
}

export default App;
