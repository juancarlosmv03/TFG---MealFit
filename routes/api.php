<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

// 🔓 Rutas públicas (sin estar logueado)
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// 🔒 Rutas protegidas (solo si el usuario está autenticado con Sanctum)
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/logout', [AuthController::class, 'logout']);
});