<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TodoController extends Controller
{
    //
    public function index()
    {
        $todos = DB::select('SELECT * FROM todo_table WHERE DELETED_AT IS NULL ORDER BY CREATED_AT DESC');

        return Inertia::render('Todo/Index', [
            'todos' => $todos,
        ]);
    }


    public function saveTodo(Request $request)
    {
        $validated = $this->validateTodo($request);

        DB::insert(
            'INSERT INTO todo_table (TITLE, DESCRIPTION, IS_COMPLETED, CREATED_AT, UPDATED_AT) VALUES (?, ?, ?, NOW(), NOW())',
            [
                $validated['title'],
                $validated['description'] ?? '',
                false
            ]
        );

        $todos = DB::select('SELECT * FROM todo_table WHERE DELETED_AT IS NULL');


        return redirect('/todo')->with('success', 'Todo saved successfully.');
    }
    public function updateTodo(Request $request)
    {
        $validated = $this->validateTodo($request);

        DB::update(
            'UPDATE todo_table SET TITLE = ?, DESCRIPTION = ?, UPDATED_AT = NOW() WHERE ID = ?',
            [
                $validated['title'],
                $validated['description'] ?? '',
                $request->id,
            ]
        );

        return redirect('/todo')->with('success', 'Todo updated successfully.');
    }


    public function setAsComplete(Request $request)
    {
        $request->validate([
            'id' => 'required|integer|exists:todo_table,ID',
        ]);

        DB::update(
            'UPDATE todo_table SET IS_COMPLETED = ?, COMPLETED_AT = NOW(), UPDATED_AT = NOW() WHERE ID = ?',
            [1, $request->id]
        );

        return redirect('/todo')->with('success', 'Todo marked as completed.');
    }



    private function validateTodo(Request $request): array
    {
        return $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);
    }
}
