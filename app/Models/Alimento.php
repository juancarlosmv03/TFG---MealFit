<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alimento extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'calorias',
        'proteinas',
        'grasas',
        'carbohidratos',
        'tipo',
    ];

    public function comidas()
    {
        return $this->hasMany(Comida::class);
    }
}
