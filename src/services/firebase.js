import { write } from "@popperjs/core";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
  addDoc,
  documentId,
  writeBatch,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVdJsUTq8wE_jn_ElzJP5lfPp6J_Zl4kQ",
  authDomain: "reactcoderhouse-9d0fb.firebaseapp.com",
  projectId: "reactcoderhouse-9d0fb",
  storageBucket: "reactcoderhouse-9d0fb.appspot.com",
  messagingSenderId: "43430949684",
  appId: "1:43430949684:web:dde929e96f61ef5e422b61"
};

const app = initializeApp(firebaseConfig);

const DB = getFirestore(app);

export async function getSingleItem(id) {
  //1. referencia
  let docRef = doc(DB, "products", id);

  //2. obtenemos la respuesta async de getDoc
  let docSnapshot = await getDoc(docRef);

  //3. retornamos la respuesta.data()
  let item = docSnapshot.data();
  item.id = docSnapshot.id;

  return item;
}

export async function getItems() {
  let collectionRef = collection(DB, "products");
  let docsSnapshot = await getDocs(collectionRef);

  let docsArray = docsSnapshot.docs;

  let dataDocs = docsArray.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return dataDocs;
}

export async function getItemsCategory(categoryID) {
  let collectionRef = collection(DB, "products");

  let q = query(collectionRef, where("category", "==", categoryID));

  let docsSnapshot = await getDocs(q);
  let docsArray = docsSnapshot.docs;

  let dataDocs = docsArray.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return dataDocs;
}

export async function createBuyOrder(order) {
  const colectionRef = collection(DB, "orders");

  let newOrder = await addDoc(colectionRef, order);
  return newOrder.id;
}

export async function createBuyOrder_WithStockControl(order) {
  const colectionRef = collection(DB, "orders");
  const colectionProductsRef = collection(DB, "products");

  let batch = writeBatch(DB);

  let arrayIds = order.items.map((itemInCart) => itemInCart.id);
  const q = query(colectionProductsRef, where(documentId(), "in", arrayIds));
  let snapshot = await getDocs(q);

  snapshot.docs.forEach((doc) => {
    let stockDispoible = doc.data().stock;

    let ItemInCart = order.items.find((item) => item.id === doc.id);
    let countItemInCart = ItemInCart.count;

    if (stockDispoible < countItemInCart)
      throw new Error(
        `Stock no disponible para el producto para el producto ${doc.id}`
      );
    else batch.update(doc.ref, { stock: stockDispoible - countItemInCart });
  });

  await batch.commit();
  let newOrder = await addDoc(colectionRef, order);
  return newOrder.id;
}

export async function exportItemsToFirestore() {
 const products = [
    {
      id: 1,
      title: "Los 4 Acuerdos",
      price: 649,
      stock: 2,
      category: "books",
      img: "https://http2.mlstatic.com/D_NQ_NP_670430-MLA52608110053_112022-V.webp",
      description: "Los 4 acuerdos son un libro escrito por el Dr. Miguel Ruiz y su principal propósito es convertirse en una guía práctica que te ayude a tener una mayor y mejor libertad personal.",
    },
    {
      id: 2,
      title: "Este dolor no es mio",
      description:
        "Resumen corto/Sinópsis: Este dolor no es mío explica cómo nuestra historia familiar, puede ser la fuente de nuestros problemas emocionales o mentales. ¿Nos sentíamos incómodos cuando íbamos a ver a los abuelos u otros parientes? O tal vez teníamos una relación tensa con nuestros padres.",
      price: 899,
      stock: 34,
      category: "books",
      img: "https://http2.mlstatic.com/D_NQ_NP_748820-MLA51934976813_102022-V.webp",
    },
    {
        id: 3,
        title: "Volver a empezar",
        description:
        "Volver a empezar es una guía para alcanzar la vida plena. En ella se nos enseña a establecer una hoja de ruta propia y a reflexionar acerca del sentido de la vida y, sobre todo, de nuestros valores. ¿Qué es lo realmente importante para cada uno de nosotros?",
        price: 899,
        stock: 34,
        category: "books",
        img: "https://http2.mlstatic.com/D_NQ_NP_726245-MLA50739544464_072022-V.webp",
      },
    {
      id: 4,
      title: "Meditaciones",
      description: "Aun así, encontró tiempo entre batalla y batalla para escribir en griego una obra intimista (Meditaciones), que representa una especie de notas personales de principios estoicos en las que reflexiona sobre la inevitabilidad de las cosas, la búsqueda de la virtud, los límites de la naturaleza humana, la fugacidad del tiempo o el modo correcto de comportarse en la vida.",
      price: 280,
      stock: 123,
      category: "books",
      img: "https://http2.mlstatic.com/D_NQ_NP_717159-MLA46016467620_052021-V.webp",
    },
    {
      id: 5,
      title: "Neurociencia del cuerpo",
      description:
        "La neurociencia vive hoy inmersa en una revolución con fuertes implicaciones clínicas, sociales y personales. El redescubrimiento de la influencia de los órganos del cuerpo sobre el cerebro nos traslada a una visión integral de la percepción.",
      price: 499,
      stock: 32,
      category: "books",
      img: "https://http2.mlstatic.com/D_NQ_NP_607096-MLA52488941041_112022-V.webp",
    },
    {
      id: 6,
      title: "Inteligencia emocional",
      description:
        "Inteligencia emocional para la vida cotidiana, de Justin Bariso Este fenomenal libro, es más que un libro de texto o de conocimientos científicos. Es una guía para la vida diaria. Con consejos simples, prácticos y enmarcados en situaciones cotidianas del trabajo, liderazgo, paternidad, relaciones y sociedad.",
      price: 1749,
      stock: 83,
      category: "books",
      img: "https://http2.mlstatic.com/D_NQ_NP_941476-MLA45738542320_042021-V.webp",
    },
    {
      id: 7,
      title: "Las 48 leyes",
      description:
        "Las 48 leyes del poder del autor Robert Greene es una obra que explica las dinámicas sociales del poder. Contiene ideas de Nicolás Maquiavelo, y ha sido comparada con la obra de Sun Tzu. Para el escritor Robert Greene, el término poder tiene un significado amoral.",
      price: 1499,
      stock: 50,
      category: "books",
      img: "https://http2.mlstatic.com/D_NQ_NP_749133-MLA52577238717_112022-V.webp",
    },
    {
      id: 8,
      title: "Poder sin limites",
      description:
        "En el libro Poder sin limites, el autor Anthony Robbins nos habla sobre como llegar al éxito, con cosas básicas que podemos poner en practicas en el trayecto de nuestras vidas, como ponerle pasión a cada trabajo que realicemos, así nos sentiremos mejor con nuestros trabajos. Tus zonas erróneas es un libro de motivación que te ayudara.",
      price: 1499,
      stock: 68,
      category: "books",
      img: "https://http2.mlstatic.com/D_NQ_NP_706265-MLA48903493842_012022-V.webp",
    },
    {
      id: 9,
      title: "Tus zonas erroneas",
      description:
        "Los libros de autoayuda no son una nueva tendencia, sino que llevan existiendo muchos años. De hecho, uno de los más aclamados por la crítica es Tus zonas erróneas, de Wayne Dyer, y se publicó en el año 1976, Con un estilo sencillo, Wayne Dyer explica cómo existen ciertas zonas de la mente que, basándose en pensamiento, emociones y creencias, llegan a errores de percepción que se convierten en un obstáculo para alcanzar la felicidad y la paz interior. ",
      price: 1099,
      stock: 96,
      category: "books",
      img: "https://http2.mlstatic.com/D_NQ_NP_966777-MLA50730434721_072022-V.webp",
    },
    {
      id: 10,
      title: "El hombre mas rico de babilonia",
      description:
        "El hombre más rico de Babilonia es un breve libro de apenas 150 páginas que narra la historia de Arkad, un joven babilonio que, tras dedicar muchos años a aprender los secretos de la riqueza, vuelve a su pueblo natal para transmitirles dichas ideas a sus antiguos vecinos.",
      price: 1099,
      stock: 89,
      category: "books",
      img: "https://http2.mlstatic.com/D_NQ_NP_995854-MLA31581147743_072019-V.webp",
    },
    
  ];

  const colectionRef = collection(DB, "products");

  for (let item of products) {
    /* addDoc(colectionRef, item).then((respuesta) =>
      console.log("Item creado con el id->", respuesta.id)
    ); */

    let newItem = await addDoc(colectionRef, item);
    console.log(newItem.id);
  }
}
