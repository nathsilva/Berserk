<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Projeto extends Model
{
    public $timestamps = false;
    protected $fillable = ['nome', 'descricao', 'likes', 'usuario'];
    protected $appends = ['links'];

    public function comentarios()
    {
        return $this->hasMany(Comentario::class);
    }

    public function getLinksAttribute($links): array
    {
        return [
            'self' => '/api/projetos/' . $this->id,
            'alternativas' => '/api/projetos/' . $this->id . '/comentarios'
        ];
    }
}
