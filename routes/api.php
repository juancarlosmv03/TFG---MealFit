<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\RutinaController;
use App\Http\Controllers\Api\ComidaController;
use App\Http\Controllers\Api\AlimentoController;



// Rutas públicas
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login',    [AuthController::class, 'login']);

// Rutas protegidas por token (solo auth:sanctum)
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user',              [AuthController::class, 'user']);
    Route::post('/logout',           [AuthController::class, 'logout']);

    // Esta ruta ahora **solo** usa auth:sanctum, NO pasa por CSRF ni cookies
    Route::post('/user/update-profile', [UserController::class, 'updateProfile']);
    Route::post('/comidas', [ComidaController::class, 'store']);
    Route::get('/comidas', [ComidaController::class, 'index']);
    Route::get('/alimentos', [AlimentoController::class, 'index']);

    Route::get('/rutinas', [RutinaController::class, 'index']);
    Route::post('/rutinas', [RutinaController::class, 'store']);
    Route::put('/rutinas/{id}', [RutinaController::class, 'update']);
    Route::delete('/rutinas/{id}', [RutinaController::class, 'destroy']);
    Route::get('/rutinas/preestablecidas', [RutinaController::class, 'preestablecidas']);
    Route::delete('/comidas/{id}', [ComidaController::class, 'destroy']);
    Route::put('/comidas/{id}', [ComidaController::class, 'update']);
    Route::post('/cambiar-email', [UserController::class, 'cambiarEmail']);
    Route::post('/cambiar-nombre', [UserController::class, 'cambiarNombre']);
    Route::delete('/eliminar-cuenta', [UserController::class, 'eliminarCuenta']);
    Route::post('/cambiar-contrasena', [UserController::class, 'cambiarContrasena']);
    Route::post('/usuario/foto-perfil', [UserController::class, 'updateProfilePicture']);
});


