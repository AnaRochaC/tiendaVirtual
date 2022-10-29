function crearInve() {
    const tipoProducto=document.getElementById('tipoProdu').value;
    const marcaProdu=document.getElementById('marca').value;
    const cantidadProdu=document.getElementById('canti').value;
    const valorProdu=document.getElementById('valorU').value;
   
    if (tipoProducto !== "") {
    let objetoEnviar = {
        tipoProducto:tipoProducto,
        marcaProducto:marcaProdu,
        cantidadProducto:cantidadProdu,
        valorProducto:valorProdu
    };

    const apiCrearPro = "http://localhost:8094/proyectotienda/inventarios/productos/crear";
    
    fetch(apiCrearPro, {
        method: "POST",
        body: JSON.stringify(objetoEnviar),
        headers:{"Content-type": "application/json;charset=UTF-8"},
    })
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            if (datos.hasOwnProperty("codProducto")) {
                console.log(datos)
                document.getElementById("rolMsgOk").style.display = "";
                document.getElementById("rolMsgError").style.display = "none";
            } else {
                console.log("No se puede grabar -> " + datos.status);
                document.getElementById("rolMsgOk").style.display = "none";
                document.getElementById("rolMsgError").style.display = "";
            }

        })
        .catch((miError) => {
            console.log(miError);
        });

        document.getElementById("formaCrear").reset();
        document.getElementById("formaCrear").classList.remove("was-validated");

    }
}
