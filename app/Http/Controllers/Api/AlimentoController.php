<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Alimento;
use Illuminate\Http\Request;

class AlimentoController extends Controller{
    public function index(Request $request)
{
    // Si en el futuro queremos filtrar, podemos usar query ?q=pollo
    $query = $request->query('q');

    $alimentos = Alimento::query()
        ->when($query, function ($q) use ($query) {
            $q->where('nombre', 'like', "%{$query}%");
        })
        ->orderBy('nombre')
        ->get();

    return response()->json($alimentos);
}
}

