<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Document;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DocumentController extends Controller
{
    public function index()
    {
        $documents = Document::latest()->fastPaginate(5);
      
        return inertia('documents/Table' , [
            'documents' => $documents
        ]);
    }

    public function add_document()
    {
        return Inertia::render('documents/Add');
    }

    public function store(Request $request)
    {   
        $request->validate([
            'title' => 'required',
            'description' => 'required'
        ], [
            'required' => ":attribute tidak boleh kosong"
        ]);

        $document = Document::create([
            'user_id' => Auth::user()->id,
            'title' => $title = $request->input('title'),
            'slug' =>  Str::slug($request->input('title')). '-' . Str::random(5),
            'description' => $request->input('description')
        ]);

        return redirect()->route('table-document')->with('message', $title. ' berhasil ditambahkan');

    }
}
