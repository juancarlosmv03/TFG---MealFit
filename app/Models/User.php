<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name', 'email', 'password', 'edad', 'altura', 'peso', 'objetivo', 'foto_perfil',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function rutinas()
    {
        return $this->hasMany(Rutina::class);
    }

    public function comidas()
    {
        return $this->hasMany(Comida::class);
    }
}
