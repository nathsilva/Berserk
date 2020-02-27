<?php
namespace App\Http\Controllers;

use App\Projeto;

class ProjetosController extends BaseController
{
    public function __construct()
    {
        $this->classe = Projeto::class;
    }
}
