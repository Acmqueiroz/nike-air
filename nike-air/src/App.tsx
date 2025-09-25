import { useState } from 'react';
import './App.css';

// Importar imagens
import logo from './assets/logo.png';
import nike1 from './assets/nike1.png';
import nike2 from './assets/nike2.png';
import nike3 from './assets/nike3.png';

function App() {
  const [bgColor, setBgColor] = useState('#ccee66');
  const [sneakerImg, setSneakerImg] = useState(nike1);
  const [imgClass, setImgClass] = useState('');

  function mudarVisual(cor: string, imagem: string) {
    setImgClass('troca-efeito'); // animação
    setTimeout(() => {
      setBgColor(cor);
      setSneakerImg(imagem);
      setImgClass('');
    }, 300); // tempo de animação antes de trocar
  }

  return (
    <div style={{ backgroundColor: bgColor }} className="app-body">
      <img src={logo} className="logo" alt="Nike logo" />

      <div className="caixa-principal">
        <div className="caixa-texto">
          <h4>R$ 799,00</h4>
          <h1>Nike Air Zoom</h1>
          <p>
            Uma passada elástica para qualquer corrida, a sensação familiar e perfeita do Peg retorna para ajudá-lo
            a atingir seus objetivos. Esta versão tem a mesma capacidade de resposta e suporte neutro que você adora,
            mas com melhor conforto nas áreas sensíveis do seu pé, como o arco e os dedos.
          </p>
          <a className="botao-carrinho">Adicionar ao Carrinho</a>
        </div>

        <div className="caixa-imagem">
          <img src={sneakerImg} className={`imagem-tenis ${imgClass}`} alt="Tênis Nike" />
        </div>
      </div>

      <div className="caixa-botoes">
        <div onClick={() => mudarVisual('#ccee66', nike1)} className="botoes verde"></div>
        <div onClick={() => mudarVisual('#58cced', nike2)} className="botoes azul"></div>
        <div onClick={() => mudarVisual('#ff9eb5', nike3)} className="botoes rosa"></div>
      </div>
    </div>
  );
}

export default App;
