<?php

use App\Http\Controllers\TodoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;



Route::get('/todo', [TodoController::class, 'index']);
Route::post('/add-task', [TodoController::class, 'saveTodo']);
Route::post('/update-task', [TodoController::class, 'updateTodo']);
Route::post('/delete-task', [TodoController::class, 'deleteTodo']);
Route::post('/set-as-complete', [TodoController::class, 'setAsComplete']);
