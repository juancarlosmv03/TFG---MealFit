<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Rutina;
use Illuminate\Support\Facades\Auth;

class RutinaController extends Controller
{
    // Mostrar todas las rutinas del usuario autenticado
    public function index()
    {
        $rutinas = Auth::user()
            ->rutinas()
            ->where('tipo', 'personalizada')
            ->latest()
            ->get();

        return response()->json($rutinas);
    }

    public function preestablecidas()
    {
        return response()->json(
            Rutina::where('tipo', 'preestablecida')
                ->where('user_id', 1)
                ->latest()
                ->get()
        );
    }


    // Crear una nueva rutina
    public function store(Request $request)
    {
        $data = $request->validate([
            'nombre' => 'required|string|max:255',
            'descripcion' => 'required|string|max:255',
            'tiempo_estimado' => 'required|integer|min:1',
            'calorias' => 'required|integer|min:0',
            'imagen' => 'nullable|image|max:2048', // max 2MB
        ]);

        // Si hay imagen, guardarla
        if ($request->hasFile('imagen')) {
            $path = $request->file('imagen')->store('rutinas', 'public');
            $data['imagen'] = $path;
        }

        $data['user_id'] = Auth::id();
        $data['tipo'] = 'personalizada';

        $rutina = Rutina::create($data);

        return response()->json($rutina, 201);
    }

    // Actualizar una rutina existente
    public function update(Request $request, $id)
    {
        $rutina = Rutina::where('id', $id)->where('user_id', Auth::id())->firstOrFail();

        $data = $request->validate([
            'nombre' => 'required|string|max:255',
            'descripcion' => 'required|string|max:255',
            'tiempo_estimado' => 'required|integer|min:1',
            'calorias' => 'sometimes|required|integer|min:0',
            'imagen' => 'nullable|image|max:2048',
        ]);

        if ($request->hasFile('imagen')) {
            $path = $request->file('imagen')->store('rutinas', 'public');
            $data['imagen'] = $path;
        }

        $rutina->update($data);

        return response()->json($rutina);
    }

    // Eliminar rutina
    public function destroy($id)
    {
        $rutina = Rutina::where('id', $id)->where('user_id', Auth::id())->firstOrFail();
        $rutina->delete();

        return response()->json(['message' => 'Rutina eliminada']);
    }
}
