'use strict';

(function () {
    function init() {
        var router = new Router([

            new Route('home', 'inicio.html', true),
            new Route('lisTiend', 'listadoTiendas.html'),

            
            new Route('procrear', 'crear.html'),
            new Route('prolistar', 'listado.html'),
            new Route('proadmin', 'admin.html'),
    // Rutas de inicio de sesión y registro de usuarios
            new Route('regist', 'inicioDeSesion/register.html' ),
            new Route('iniciar', 'inicioDeSesion/login.html'),
    
    // Rutas de tienda 1
            new Route('lCatalogoT1', 'tiendas/tienda01/listCatalogoT1.html' ),
        // Catalogo de productos
            new Route('lacteoT1', 'tiendas/tienda01/productos/lacteos.html'),
            new Route('bebidaT1', 'tiendas/tienda01/productos/bebidas.html' ),
            new Route('limpiezaT1', 'tiendas/tienda01/productos/limpieza.html' ),
            new Route('despensaT1', 'tiendas/tienda01/productos/despensas.html' ),

    // Rutas de Tienda 2
            new Route('lCatalogoT2', 'tiendas/tienda02/listCatalogoT2.html' ),
        // Catalogo de productos
            new Route('frutaT2', 'tiendas/tienda02/productos/frutas.html'),
            new Route('verduraT2', 'tiendas/tienda02/productos/verduras.html'),

    // Rutas de Tienda 3
            new Route('lCatalogoT3', 'tiendas/tienda03/listCatalogoT3.html' ),
        // Catalogo de productos
            new Route('polloT3', 'tiendas/tienda03/productos/pollos.html'),
            new Route('carneT3', 'tiendas/tienda03/productos/carnes.html' ),
            new Route('pescadoT3', 'tiendas/tienda03/productos/pescados.html' ),

    // Ruta de Inventario
            new Route('inventi', 'inventario.html' )
        ]);
    }
    init();
}());
