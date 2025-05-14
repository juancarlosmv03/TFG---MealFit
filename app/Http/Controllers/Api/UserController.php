<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;


class UserController extends Controller
{
    public function updateProfile(Request $request)
    {
        $request->validate([
            'edad' => 'required|integer|min:10|max:100',
            'altura' => 'required|integer|min:100|max:250',
            'peso' => 'required|integer|min:30|max:300',
            'objetivo' => 'required|in:perder_grasa,ganar_musculo,mantener',
            'foto_perfil' => 'nullable|image|max:2048',
        ]);

        $user = Auth::user();

        if ($request->hasFile('foto_perfil')) {
            $path = $request->file('foto_perfil')->store('fotos_perfil', 'public');
            $user->foto_perfil = $path;
        }

        $user->edad = $request->edad;
        $user->altura = $request->altura;
        $user->peso = $request->peso;
        $user->objetivo = $request->objetivo;

        $user->save();

        return response()->json([
            'message' => 'Perfil actualizado con éxito',
            'user' => $user
        ]);
    }
}
