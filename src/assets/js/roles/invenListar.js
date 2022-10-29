function listadoInv() {
    const apiListaInv = "http://localhost:8094/proyectotienda/inventarios/consultar";
    const miPrimeraPromesa = fetch(apiListaInv).then((resultado) =>
      resultado.json()
    );
  
    Promise.all([miPrimeraPromesa]).then((arregloDeDatos) => {
      const misDatos = arregloDeDatos[0];
      agregarFilas(misDatos);
    });
  }
  
  function agregarFilas(arregloExterno) {
    const cantidad = arregloExterno.length;
    for (let i = 0; i < cantidad; i++) {
      const codPro = arregloExterno[i].codProducto;
      const cantiProdu = arregloExterno[i].cantidadProducto;
      const minimoProdu = arregloExterno[i].minimoProducto;
      const maximoProdu = arregloExterno[i].maximoProducto;
      const produ = arregloExterno[i].productos.tipoProducto + " "
      arregloExterno[i].productos.marcaProducto;
      
      document.getElementById("tablaRoles").insertRow(-1).innerHTML =
        "<td>" + codPro + "</td>" 
        + "<td>" + produ + "</td>"
        + "<td>" + cantiProdu + "</td>" 
        +"<td>" + minimoProdu + "</td>"
        + "<td>" + maximoProdu + "</td>" ;
    }
  }
  