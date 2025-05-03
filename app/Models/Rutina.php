<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rutina extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'nombre', 'descripcion', 'tiempo_estimado',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function ejercicios()
    {
        return $this->hasMany(Ejercicio::class);
    }
}
