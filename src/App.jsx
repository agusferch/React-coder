import ItemListConteiner from './components/ItemListContainer/ItemListConteiner';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountComponent from './components/CountComponent/CountComponent';
import MainLayout from './layouts/MainLayout';
import { getProducts } from './services/productsService';

const App = () => {

  const promesa = new Promise((resolve, reject) => {
    const flag = true;
    if(flag){
      resolve("Promesa resuelta correctamente")
    }else {
      reject("Promesa se resuelve negativamente")
    }
  });

  //se pone res por una convencion, que significa responsive y el .catch atrapa el rechazo de la funcion, basicamente trabajo la promesa cuando se resuelve y cuando no
  promesa.then(res => console.log(res)).catch(error => console.error(error))


  const [productsData, setProductsData] = UseState([])

  useEffect(() => {
    getProducts()
    .then(response => {
      setProductsData(response.data.products);
    })
      .catch(error => {
        console.error(error);
      })
  }, [])

  return (
      <MainLayout>
        <ItemListConteiner productsData = {productsData} />
        <CountComponent/>
      </MainLayout>
  )
}

export default App;

