import { useState } from 'react';
import BannerEventos from './components/BannerEventos';

function App() {
  let [array, SetArray] = useState([])
  function HandleClick(){
    let banner = <BannerEventos 
      titulo="SAPO"
      descricao="Um sapo, retirado do lago e colocado em uma panela com a mesma água fria do lago, sobre o fogão aceso, fica quietinho sem perceber que a água está aquecendo, culminando com sua morte. Outro sapo, do mesmo lago, colocado em outra panela já com a água quente salta imediatamente para fora da panela, evitando o pior resultado para sua vida"
      src="/um.png"
      backgroundColor="#8F0B0B"
      textColor="white"
    />
    if(array.length % 2 === 1 ){
      banner = <BannerEventos 
        titulo="SAPO"
        descricao="Um sapo, retirado do lago e colocado em uma panela com a mesma água fria do lago, sobre o fogão aceso, fica quietinho sem perceber que a água está aquecendo, culminando com sua morte. Outro sapo, do mesmo lago, colocado em outra panela já com a água quente salta imediatamente para fora da panela, evitando o pior resultado para sua vida"
        src="/dois.png"
        backgroundColor="white"
        textColor="black"
        flex="row-reverse"
      />
    }
    SetArray([...array, banner])
  }
  return (
    <div className="App">
      {array}
      <button onClick={HandleClick}> butaobunito </button>
    </div>
  );
}


export default App;
