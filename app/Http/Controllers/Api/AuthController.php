<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    /**
     * Registro de usuario y login automático por token.
     */
    public function register(Request $request)
    {
        $request->validate([
            'name'                  => 'required|string|max:255',
            'email'                 => 'required|string|email|unique:users,email',
            'password'              => 'required|string|min:6|confirmed',
        ]);

        // Creamos el usuario
        $user = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // Creamos el token personal
        $token = $user->createToken('spa-token')->plainTextToken;

        // Respondemos con usuario + token
        return response()->json([
            'user'  => $user,
            'token' => $token,
        ], 201);
    }

    /**
     * Login de usuario, devuelve token.
     */
    public function login(Request $request)
    {
        $request->validate([
            'email'    => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        // Buscamos usuario por email
        $user = User::where('email', $request->email)->first();

        // Verificamos contraseña
        if (! $user || ! Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Credenciales no válidas'], 401);
        }

        // Generamos token
        $token = $user->createToken('spa-token')->plainTextToken;

        return response()->json([
            'user'  => $user,
            'token' => $token,
        ], 200);
    }

    /**
     * Obtiene los datos del usuario autenticado.
     */
    public function user(Request $request)
    {
        return response()->json($request->user());
    }

    /**
     * Logout: revoca todos los tokens actuales.
     */
    public function logout(Request $request)
    {
        // Revocamos todos los tokens del usuario
        $request->user()->tokens()->delete();

        return response()->json(['message' => 'Logout exitoso']);
    }
}
