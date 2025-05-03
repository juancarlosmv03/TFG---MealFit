<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('alimentos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->integer('calorias'); // kcal por 100g
            $table->decimal('proteinas', 5, 2); // gramos por 100g
            $table->decimal('grasas', 5, 2);    // gramos por 100g
            $table->decimal('carbohidratos', 5, 2); // gramos por 100g
            $table->string('tipo'); // Pollo, Carne, Pescado, Plato, Fruta, etc.
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alimentos');
    }
};
