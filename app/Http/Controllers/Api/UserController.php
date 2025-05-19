<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

use App\Models\User;


class UserController extends Controller
{
public function updateProfile(Request $request)
{
    $user = auth()->user();

    // Validación combinada
    $rules = [
        'edad' => 'sometimes|integer|min:10|max:100',
        'altura' => 'sometimes|integer|min:100|max:250',
        'peso' => 'sometimes|numeric|regex:/^\d{1,3}(\.\d{1,2})?$/|min:20|max:300',
        'objetivo' => 'sometimes|in:perder_grasa,ganar_musculo,mantener',
        'factor_actividad' => 'sometimes|numeric|between:1.2,1.9',
        'foto_perfil' => 'sometimes|image|max:2048',
    ];

    $validated = $request->validate($rules);

    // ✅ Solo si se envía una imagen, la actualizamos
    if ($request->hasFile('foto_perfil')) {
        if ($user->foto_perfil && Storage::disk('public')->exists($user->foto_perfil)) {
            Storage::disk('public')->delete($user->foto_perfil);
        }

        $file = $request->file('foto_perfil');
        $filename = time() . '_' . $file->getClientOriginalName();
        $path = $file->storeAs('fotos_perfil', $filename, 'public');

        $user->foto_perfil = $path; // solo la ruta relativa
    }

    // ✅ Actualizar datos si vienen
    if ($request->filled('edad')) $user->edad = $request->edad;
    if ($request->filled('altura')) $user->altura = $request->altura;
    if ($request->filled('peso')) $user->peso = $request->peso;
    if ($request->filled('objetivo')) $user->objetivo = $request->objetivo;
    if ($request->filled('factor_actividad')) $user->factor_actividad = $request->factor_actividad;

    $user->save();

   return response()->json([
    'message' => 'Perfil actualizado con éxito',
    'user' => $user,
    'foto_perfil' => $user->foto_perfil ? asset('storage/' . $user->foto_perfil) : null,
]);
}

    public function cambiarEmail(Request $request)
{
    $request->validate([
        'email' => 'required|email|unique:users,email',
    ]);

    $user = $request->user();
    $user->email = $request->email;
    $user->save();

    return response()->json(['message' => 'Email actualizado correctamente']);
}

public function cambiarNombre(Request $request)
{
    $request->validate([
        'name' => 'required|string|max:50',
    ]);

    $user = $request->user();
    $user->name = $request->name;
    $user->save();

    return response()->json(['message' => 'Nombre actualizado correctamente']);
}

public function eliminarCuenta(Request $request)
{
    $user = $request->user();
    $user->delete();

    return response()->json(['message' => 'Cuenta eliminada']);
}

public function cambiarContrasena(Request $request)
{
    $request->validate([
        'actual' => 'required|string',
        'nueva' => 'required|string|min:6',
    ]);

    $user = $request->user();

    if (!Hash::check($request->actual, $user->password)) {
        return response()->json(['message' => 'La contraseña actual es incorrecta'], 422);
    }

    $user->password = Hash::make($request->nueva);
    $user->save();

    return response()->json(['message' => 'Contraseña actualizada correctamente']);
}

public function updateProfilePicture(Request $request)
{
    $request->validate([
        'foto_perfil' => 'required|image|max:2048',
    ]);

    $user = auth()->user();

    // Eliminar la anterior si existe
    if ($user->foto_perfil && Storage::exists('public/' . $user->foto_perfil)) {
        Storage::delete('public/' . $user->foto_perfil);
    }

    // Guardar nueva
    $file = $request->file('foto_perfil');
    $filename = time() . '_' . $file->getClientOriginalName();
    $path = $file->storeAs('public/fotos_perfil', $filename);

    $user->foto_perfil = str_replace('public/', '', $path); // fotos_perfil/imagen.jpg
    $user->save();

    return response()->json([
        'message' => 'Foto de perfil actualizada correctamente',
        'foto_perfil' => asset('storage/' . $user->foto_perfil), // http://localhost:8000/storage/...
    ]);
}

}
