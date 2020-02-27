<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Comentario extends Model
{
    public $timestamps = false;
    protected $fillable = ['comentario', 'projeto_id'];
    protected $appends = ['links'];

    public function projeto()
    {
        return $this->belongsTo(Projeto::class);
    }

    public function getLinksAttribute($links): array
    {
        return [
            'self' => '/api/projetos/' . $this->id,
            'questao' => '/api/projetos/' . $this->projeto_id
        ];
    }
}
