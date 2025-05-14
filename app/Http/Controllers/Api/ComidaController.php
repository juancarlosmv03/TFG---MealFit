<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Comida;
use Illuminate\Support\Facades\Auth;

class ComidaController extends Controller
{
    public function index(Request $request)
{
    $fecha = $request->query('fecha') ?? now()->toDateString(); // por defecto hoy

    // Traemos las comidas del usuario para esa fecha, con el alimento incluido
    $comidas = Comida::with('alimento')
        ->where('user_id', Auth::id())
        ->where('fecha', $fecha)
        ->get();

    return response()->json($comidas);
}
    public function store(Request $request)
    {
        $data = $request->validate([
            'alimento_id' => 'required|exists:alimentos,id',
            'cantidad' => 'required|integer|min:1', // en gramos
            'tipo' => 'required|string|max:255', // desayuno, comida, cena...
            'fecha' => 'required|date',
        ]);

        $data['user_id'] = Auth::id();

        $comida = Comida::create($data);

        return response()->json($comida, 201);
    }
    public function destroy($id)
{
    $comida = Comida::where('id', $id)->where('user_id', Auth::id())->first();

    if (!$comida) {
        return response()->json(['message' => 'No autorizado o no encontrado'], 404);
    }

    $comida->delete();

    return response()->json(['message' => 'Comida eliminada'], 200);
}

public function update(Request $request, $id)
{
    $comida = Comida::where('id', $id)->where('user_id', Auth::id())->first();

    if (!$comida) {
        return response()->json(['message' => 'No autorizado o no encontrado'], 404);
    }

    $data = $request->validate([
        'cantidad' => 'required|integer|min:1'
    ]);

    $comida->update($data);

    return response()->json(['message' => 'Comida actualizada']);
}

}
