import { Electrodomesticos } from "../Entidades/Electrodomesticos";
export { ListaElectro };

let ListaElectroA: Electrodomesticos[] = [
  {
    id: 1,
    Nombre: "Refigeradora",
    Modelo: "Mabe",
    Precio: 520,
    Consumo: "F",
    Peso: 85,
  },
  {
    id: 2,
    Nombre: "Lavadora",
    Modelo: "Indurama",
    Precio: 290,
    Consumo: "A",
    Peso: 13,
  },
  {
    id: 3,
    Nombre: "Licuadora",
    Modelo: "LG",
    Precio: 54.69,
    Consumo: "F",
    Peso: 5,
  }
];

let ListaElectro: Electrodomesticos[] = [
  {
    id: 1,
    Nombre: "Refigeradora",
    Modelo: "Mabe",
    Precio: 640,
    Consumo: "F",
    Peso: 85,
  },
  {
    id: 2,
    Nombre: "Lavadora",
    Modelo: "Indurama",
    Precio: 400,
    Consumo: "A",
    Peso: 13,
  },
  {
    id: 3,
    Nombre: "Licuadora",
    Modelo: "LG",
    Precio: 84.69,
    Consumo: "F",
    Peso: 5,
  },
  {
    id: 1,
    Nombre: "Refigeradora",
    Modelo: "Mabe",
    Precio: 640,
    Consumo: "F",
    Peso: 85,
  },
  {
    id: 2,
    Nombre: "Lavadora",
    Modelo: "Indurama",
    Precio: 400,
    Consumo: "A",
    Peso: 13,
  },
  {
    id: 3,
    Nombre: "REMOVEDORA",
    Modelo: "LG",
    Precio: 84.69,
    Consumo: "F",
    Peso: 5,
  },
  {
    id: 1,
    Nombre: "SECADORA",
    Modelo: "Mabe",
    Precio: 640,
    Consumo: "F",
    Peso: 85,
  },
  {
    id: 2,
    Nombre: "TELEVISION",
    Modelo: "Indurama",
    Precio: 400,
    Consumo: "A",
    Peso: 13,
  },
  {
    id: 3,
    Nombre: "LAPTO",
    Modelo: "LG",
    Precio: 84.69,
    Consumo: "F",
    Peso: 5,
  },
  {
    id: 1,
    Nombre: "COMPUTADORA",
    Modelo: "Mabe",
    Precio: 640,
    Consumo: "F",
    Peso: 85,
  },
  {
    id: 2,
    Nombre: "Taladro",
    Modelo: "Indurama",
    Precio: 400,
    Consumo: "A",
    Peso: 13,
  },
  {
    id: 3,
    Nombre: "Freidora de aire",
    Modelo: "LG",
    Precio: 84.69,
    Consumo: "F",
    Peso: 5,
  },
  {
    id: 1,
    Nombre: "Baño",
    Modelo: "Mabe",
    Precio: 640,
    Consumo: "F",
    Peso: 85,
  },
  {
    id: 2,
    Nombre: "Horno",
    Modelo: "Indurama",
    Precio: 400,
    Consumo: "A",
    Peso: 13,
  },
  {
    id: 3,
    Nombre: "BAtidora",
    Modelo: "LG",
    Precio: 84.69,
    Consumo: "F",
    Peso: 5,
  },
];
//LISTA ADMINISTRADOR
export function ListarAdmin() {
  let lis = "";
  let lista = <HTMLElement>document.getElementById("lista-A");
  for (let i = 0; i < ListaElectroA.length; i++) {
    lis =
      "<tr>" +
      lis +
      "<td>" +
      ListaElectro[i].id +
      "</td>" +
      "<td>" +
      ListaElectroA[i].Nombre +
      "</td>" +
      "<td>" +
      ListaElectroA[i].Modelo +
      "</td>" +
      "<td>" +
      ListaElectroA[i].Precio +
      "</td>" +
      "<td>" +
      ListaElectroA[i].Consumo +
      "</td>" +
      "<td>" +
      ListaElectroA[i].Peso +
      " Kg" +
      "</td>" +
      /*`<td><button class="editar btn btn-warning">Editar</button> 
            <button class="eliminar btn btn-danger">Eliminar</button></td>` */ "</tr>";
  }
  lista.innerHTML = lis;
}
//Listar clIENTE
export function Listar() {
  let lis = "";
  let lista = <HTMLElement>document.getElementById("lista-C");
  for (let i = 0; i < ListaElectro.length; i++) {
    lis =
      "<tr>" +
      lis +
      "<td>" +
      ListaElectro[i].id +
      "</td>" +
      "<td>" +
      ListaElectro[i].Nombre +
      "</td>" +
      "<td>" +
      ListaElectro[i].Modelo +
      "</td>" +
      "<td>" +
      ListaElectro[i].Precio +
      "</td>" +
      "<td>" +
      ListaElectro[i].Consumo +
      "</td>" +
      "<td>" +
      ListaElectro[i].Peso +
      " Kg" +
      "</td>" +
      /*`<td> <button class="btn-add-cart" data-codigo="${ListaElectro[i].id}">Añadir al Carrito</button></td>` +*/
      "</tr>";
  }
  lista.innerHTML = lis;
   const itemContainer = document.querySelector(".item");

   if (itemContainer) {
     itemContainer.innerHTML = ""; // Limpiar contenido previo

     ListaElectro.forEach((nuevalista) => {
       const divItem = document.createElement("div");
       divItem.className = "info-product";
       divItem.innerHTML = `
        <h2>${nuevalista.Nombre}</h2>
        <label>Precio:</label>
        <p class="price">$${nuevalista.Precio.toFixed(2)}</p>
        <button class="btn-add-cart">Añadir al carrito</button>`;
      
        
       itemContainer.appendChild(divItem);
     });
   }

}
//INSERTAR
export function insertar() {
  // Obtener referencia al campo de entrada y al botón de envío
  const codigoInput = document.getElementById(
    "insertarcodigo"
  ) as HTMLInputElement;
  const nombreInput = document.getElementById(
    "insertarnombre"
  ) as HTMLInputElement;
  const edadInput = document.getElementById(
    "insertarmodelo"
  ) as HTMLInputElement;
  const poderInput = document.getElementById(
    "insertarprecio"
  ) as HTMLInputElement;
  const ciudadInput = document.getElementById("combobox") as HTMLInputElement;
  const pesoInput = document.getElementById("insertarpeso") as HTMLInputElement;
  const btnguarda = document.getElementById("btnguarda") as HTMLButtonElement;

  btnguarda.addEventListener("click", () => {
    // Obtener los valores de los campos de entrada
    const codigo = parseInt(codigoInput.value);
    const nombre = nombreInput.value;
    const modelo = edadInput.value;
    const precio = parseInt(poderInput.value);
    const consumo = ciudadInput.value;
    const peso = parseInt(pesoInput.value);

    const consumototal: number = comprobarConsumoEnergetico(consumo);
    const pesototal: number = comprobarPeso(peso);

    let total = preciofinal(precio, pesototal, consumototal);

    //llamar a la tabla Administrar
    const listadministrar = new Electrodomesticos(
      codigo,
      nombre,
      modelo,
      precio,
      consumo,
      peso
    );

    ListaElectroA.push(listadministrar);

    // Llamar a la función Cliente con los datos capturados
    const nuevalista = new Electrodomesticos(
      codigo,
      nombre,
      modelo,
      total,
      consumo,
      peso
    );
    ListaElectro.push(nuevalista);

    const itemContainer = document.querySelector(".item");

    if (itemContainer) {
      itemContainer.innerHTML = ""; // Limpiar contenido previo

      ListaElectro.forEach((nuevalista) => {
        const divItem = document.createElement("div");
        divItem.className = "info-product";
        divItem.innerHTML = `
        <h2>${nuevalista.Nombre}</h2>
        <p class="price">$${nuevalista.Precio.toFixed(2)}</p>
        <button class="btn-add-cart">Añadir al carrito</button>
      `;

        itemContainer.appendChild(divItem);
      });
    }
    ListarAdmin();
    Listar();
    limpiarInputs();
  });
}

//MODIFICAR
export function Modificar() {
  const codigoInput = document.getElementById("editcodigo") as HTMLInputElement;
  const nombreInput = document.getElementById("editnombre") as HTMLInputElement;
  const modeloInput = document.getElementById("editmodelo") as HTMLInputElement;
  const precioInput = document.getElementById("editprecio") as HTMLInputElement;
  const consumoInput = document.getElementById("comboedit") as HTMLInputElement;
  const pesoInput = document.getElementById("editpeso") as HTMLInputElement;
  const btneditguarda = document.getElementById(
    "btneditguarda"
  ) as HTMLButtonElement;

  btneditguarda.addEventListener("click", () => {
    const codigo = parseInt(codigoInput.value);
    const nombre = nombreInput.value;
    const modelo = modeloInput.value;
    const precio = parseInt(precioInput.value);
    const consumo = consumoInput.value;
    const peso = parseInt(pesoInput.value);

    const indice = ListaElectro.findIndex(
      (Electrodomesticos) => Electrodomesticos.id === codigo
    );

    const consumototal: number = comprobarConsumoEnergetico(consumo);
    const pesototal: number = comprobarPeso(peso);

    let total = preciofinal(precio, pesototal, consumototal);

    //llamar a la tabla Administrar
    const listadministrar = new Electrodomesticos(
      codigo,
      nombre,
      modelo,
      precio,
      consumo,
      peso
    );
    ListaElectroA[indice] = listadministrar;
    //llamar a la tabla Cliente
    const lista = new Electrodomesticos(
      codigo,
      nombre,
      modelo,
      total,
      consumo,
      peso
    );
    ListaElectro[indice] = lista;

     const itemContainer = document.querySelector(".item");

     if (itemContainer) {
       itemContainer.innerHTML = ""; // Limpiar contenido previo

       ListaElectro.forEach((nuevalista) => {
         const divItem = document.createElement("div");
         divItem.className = "info-product";
         divItem.innerHTML = `
        <h2>${nuevalista.Nombre}</h2>
        <p class="price">$${nuevalista.Precio.toFixed(2)}</p>
        <button class="btn-add-cart">Añadir al carrito</button>
      `;

         itemContainer.appendChild(divItem);
       });
     }
    Listar();
    ListarAdmin();
    limpiarInputs();
  });
}

export function eliminar() {
  const indiceAEliminar = document.getElementById(
    "deletecodigo"
  ) as HTMLInputElement;
  const btnguardar = document.getElementById(
    "btndeleteguarda"
  ) as HTMLButtonElement;

  btnguardar.addEventListener("click", () => {
    const codigo = parseInt(indiceAEliminar.value);
    const indice = ListaElectro.findIndex(
      (Electrodomesticos) => Electrodomesticos.id === codigo
    );
    ListaElectroA.splice(indice, 1);
    ListaElectro.splice(indice, 1);
    Listar();
    ListarAdmin();
    limpiarInputs();
  });
}

export function comprobarConsumoEnergetico(letra: string) {
  let letratotal: number = 0;

  if (letra == "A") {
    letratotal = 100;

    console.log(letratotal);
    // Vuelve a pedir el dato
  }
  if (letra == "B") {
    letratotal = 80;

    console.log(letratotal);
    // Vuelve a pedir el dato
  }
  if (letra == "C") {
    letratotal = 60;

    console.log(letratotal);
    // Vuelve a pedir el dato
  }
  if (letra == "D") {
    letratotal = 50;

    console.log(letratotal);
    // Vuelve a pedir el dato
  }
  if (letra == "E") {
    letratotal = 30;

    console.log(letratotal);
    // Vuelve a pedir el dato
  }
  if (letra == "F") {
    letratotal = 20;

    console.log(letratotal);
    // Vuelve a pedir el dato
  }
  return letratotal;
}

export function comprobarPeso(peso: number) {
  let pesototal: number = 0;
  if (peso >= 1 && peso <= 19) {
    pesototal = 10;
  }
  if (peso >= 20 && peso <= 49) {
    pesototal = 50;
  }
  if (peso >= 50 && peso <= 79) {
    pesototal = 80;
  }
  if (peso >= 80) {
    pesototal = 100;
  }
  return pesototal;
}

export function preciofinal(
  preciobase: number,
  pesototal: number,
  letra: number
) {
  let preciototal;

  preciototal = preciobase + pesototal + letra;

  return preciototal;
}

//LIMPIAR INPUTS
export function limpiarInputs() {
  const nombreInput = document.getElementById("editcodigo") as HTMLInputElement;
  const editnombre = document.getElementById("editnombre") as HTMLInputElement;
  const editmodelo = document.getElementById("editmodelo") as HTMLInputElement;
  const editprecio = document.getElementById("editprecio") as HTMLInputElement;
  const editpeso = document.getElementById("editpeso") as HTMLInputElement;
  const insertarcodigo = document.getElementById(
    "insertarcodigo"
  ) as HTMLInputElement;
  const insertarnombre = document.getElementById(
    "insertarnombre"
  ) as HTMLInputElement;
  const insertarmodelo = document.getElementById(
    "insertarmodelo"
  ) as HTMLInputElement;
  const insertarprecio = document.getElementById(
    "insertarprecio"
  ) as HTMLInputElement;
  const insertarpeso = document.getElementById(
    "insertarpeso"
  ) as HTMLInputElement;
  const deletecodigo = document.getElementById(
    "deletecodigo"
  ) as HTMLInputElement;

  deletecodigo.value = "";
  nombreInput.value = "";
  editnombre.value = "";
  editmodelo.value = "";
  editprecio.value = "";
  editpeso.value = "";
  insertarcodigo.value = "";
  insertarnombre.value = "";
  insertarmodelo.value = "";
  insertarprecio.value = "";
  insertarpeso.value = "";
}


//ACCIONES BOTON CARRITO

const btnCart = document.querySelector(".container-cart-icon");
const containerCartProducts = document.querySelector(
  ".container-cart-products"
);

btnCart.addEventListener("click", () => {
  containerCartProducts.classList.toggle("hidden-cart");
});

/* ========================= */
const cartInfo = document.querySelector(".cart-product");
const rowProduct = document.querySelector(".row-product");

// Lista de todos los contenedores de productos
const productsList = document.querySelector(".container-items");

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector(".total-pagar");

const countProducts = document.querySelector("#contador-productos");

const cartEmpty = document.querySelector(".cart-empty");
const cartTotal = document.querySelector(".cart-total");

productsList.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-add-cart")) {
    const product = e.target.parentElement;

    const infoProduct = {
      quantity: 1,
      title: product.querySelector("h2").textContent,
      price: product.querySelector("p").textContent,
    };

    const exits = allProducts.some(
      (product) => product.title === infoProduct.title
    );

    if (exits) {
      const products = allProducts.map((product) => {
        if (product.title === infoProduct.title) {
          product.quantity++;
          return product;
        } else {
          return product;
        }
      });
      allProducts = [...products];
    } else {
      allProducts = [...allProducts, infoProduct];
    }

    showHTML();
  }
});

rowProduct.addEventListener("click", (e) => {
  if (e.target.classList.contains("icon-close")) {
    const product = e.target.parentElement;
    const title = product.querySelector("p").textContent;

    allProducts = allProducts.filter((product) => product.title !== title);

    console.log(allProducts);

    showHTML();
  }
});

// Funcion para mostrar  HTML
const showHTML = () => {
  if (!allProducts.length) {
    cartEmpty.classList.remove("hidden");
    rowProduct.classList.add("hidden");
    cartTotal.classList.add("hidden");
  } else {
    cartEmpty.classList.add("hidden");
    rowProduct.classList.remove("hidden");
    cartTotal.classList.remove("hidden");
  }

  // Limpiar HTML
  rowProduct.innerHTML = "";

  let total = 0;
  let totalOfProducts = 0;

  allProducts.forEach((product) => {
    const containerProduct = document.createElement("div");
    containerProduct.classList.add("cart-product");

    containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

    rowProduct.append(containerProduct);

    total = total + parseInt(product.quantity * product.price.slice(1));
    totalOfProducts = totalOfProducts + product.quantity;
  });

  valorTotal.innerText = `$${total}`;
  countProducts.innerText = totalOfProducts;
};