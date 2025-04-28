<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
})->name('landing');
Route::get('/dashboard', function () {
    return view('indes');
})->name('dashboard');
Route::get('/rutinas', function () {
    return view('rutinas');
})->name('rutinas');