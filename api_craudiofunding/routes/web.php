<?php

/** @var \Laravel\Lumen\Routing\Router $router */
$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->group(['prefix' => 'projetos'], function () use ($router) {
        $router->post('', 'ProjetosController@store');
        $router->get('', 'ProjetosController@index');
        $router->get('{id}', 'ProjetosController@show');
        $router->put('{id}', 'ProjetosController@update');
        $router->delete('{id}', 'ProjetosController@destroy');

    });
});
