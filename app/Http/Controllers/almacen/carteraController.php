<?php

namespace SmartKet\Http\Controllers\almacen;

use Illuminate\Http\Request;

use SmartKet\Http\Requests;
use SmartKet\Http\Controllers\Controller;

class carteraController extends Controller
{
    public function index(){
    	return view('almacen.cartera.carteraView');
    }
}
