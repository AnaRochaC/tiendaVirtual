function eliminarProdu(parametro){
    const apiObtenerCate = "http://localhost:8094/proyectotienda/inventarios/borrar" + parametro;
    const miPromesaCate = fetch(apiObtenerCate,{method:'DELETE'}).then(respuesta => respuesta.json())
        .catch(miError => console.log(miError))

    Promise.all([miPromesaCate]).then((arregloDatos) => {
        const datos = arregloDatos[0];
        if (datos.status=="200") {
            document.getElementById('alertCateEliminar').classList.add('alert-primary');
            document.getElementById('msgCateEliminar').innerHTML="La categoria ha sido eliminada :)) ";
        } else {
            document.getElementById('alertCateEliminar').classList.add('alert-danger');
            document.getElementById('msgCateEliminar').innerHTML="La categoria NOO ha sido eliminada :(( ";
        }
    });
}