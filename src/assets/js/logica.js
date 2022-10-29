function logicaNegocio(url, param) {
  switch (url) {
    case "src/componentes/listado.html":
      listadoInv();
      break;
    case "src/componentes/crear.html":
      break;
    case "src/componentes/admin.html":
      inventarioAdmin();
      break;
    case "src/componentes/roles/roleliminar.html":
      eliminarProdu();
      break;
    default:
  }
}
