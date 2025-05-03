<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comida extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'tipo', 'nombre_comida', 'calorias', 'fecha',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
