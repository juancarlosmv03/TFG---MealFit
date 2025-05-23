<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rutina extends Model
{
    use HasFactory;

   protected $fillable = [
    'user_id',
    'nombre',
    'descripcion',
    'tiempo_estimado',
    'calorias',
    'imagen',
];


    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
