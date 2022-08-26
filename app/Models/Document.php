<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;

    protected $with = ['user'];
    protected $fillable = ['user_id','title', 'slug', 'description'];
    public function user() {
        return $this->belongsTo(User::class);
    }
}
