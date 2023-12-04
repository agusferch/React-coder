//componentes
import NavBarComponent from './components/NavBarComponents/NavBarComponent';
import ItemListConteiner from './components/ItemListContainer/ItemListConteiner';

//importacion de estilos de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => { 
  const condition = true;

  return (
      <div style={{width:'100vw', height:'100vh'}}>
        <NavBarComponent /> 
        <ItemListConteiner greeting="Bienvenidos a nuestra tienda" />
        <ItemListConteiner greeting= "Otro componente" />
      </div>
  )
}

export default App

