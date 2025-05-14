<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('comidas', function (Blueprint $table) {
            // Nuevo campo relacionado con alimentos
            $table->foreignId('alimento_id')
                  ->nullable()
                  ->constrained('alimentos')
                  ->onDelete('cascade');

            // Nuevo campo para gramos consumidos
            $table->integer('cantidad')->nullable(); // en gramos

            // Opcional: eliminar columnas anteriores que ya no usaremos
            $table->dropColumn(['nombre_comida', 'calorias']);
        });
    }

    public function down(): void
    {
        Schema::table('comidas', function (Blueprint $table) {
            // Revertimos cambios
            $table->dropForeign(['alimento_id']);
            $table->dropColumn(['alimento_id', 'cantidad']);

            // Restaurar columnas eliminadas si hiciste dropColumn
            $table->string('nombre_comida');
            $table->integer('calorias');
        });
    }
};
