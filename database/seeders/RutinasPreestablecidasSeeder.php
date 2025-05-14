<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Rutina;

class RutinasPreestablecidasSeeder extends Seeder
{
    public function run(): void
    {
        Rutina::create([
            'user_id' => 1,
            'nombre' => 'Full Body Rápida',
            'descripcion' => 'Cuerpo completo',
            'tiempo_estimado' => 15,
            'calorias' => 180,
            'tipo' => 'preestablecida',
            'imagen' => null,
        ]);

        Rutina::create([
            'user_id' => 1,
            'nombre' => 'Cardio Suave',
            'descripcion' => 'Cardio',
            'tiempo_estimado' => 10,
            'calorias' => 120,
            'tipo' => 'preestablecida',
            'imagen' => null,
        ]);

        Rutina::create([
            'user_id' => 1,
            'nombre' => 'Abdomen Fuerte',
            'descripcion' => 'Core',
            'tiempo_estimado' => 12,
            'calorias' => 140,
            'tipo' => 'preestablecida',
            'imagen' => null,
        ]);
    }
}
