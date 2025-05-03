<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ejercicio extends Model
{
    use HasFactory;

    protected $fillable = [
        'rutina_id', 'nombre', 'repeticiones', 'descripcion', 'calorias_estimadas',
    ];

    public function rutina()
    {
        return $this->belongsTo(Rutina::class);
    }
}
