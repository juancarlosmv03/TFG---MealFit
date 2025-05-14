<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comida extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'alimento_id',
        'cantidad',
        'tipo',
        'fecha',
    ];

    // Relaciones

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function alimento()
    {
        return $this->belongsTo(Alimento::class);
    }
}
