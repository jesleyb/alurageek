import { productoServices } from "../servicios/productos-servicios.js";

const nuevoProduto = (name, price, imageUrl) => {
  const card = document.createElement("div");
  const contenido = `
        <div class="produto">
            <img src="${imageUrl}" alt="img">
            <h1 class="product-name"> ${name} </h1>
            <p class="preco">${price}</p>
        </div>   
    `;
  card.innerHTML = contenido;
  card.classList.add("prod-holder");

  return card;
};

const productos = document.querySelector("[datos-productos]");

const render = async () => {
  try {
    const listaProductos = await productoServices.listaProductos();
    listaProductos.forEach((elemento) => {
      productos.appendChild(
        nuevoProduto(
          elemento.name,
          elemento.price,
          elemento.imageUrl
        )
      );
    });
  } catch (error) {
    console.log(error);
  }
};

render();