"use client";

import { useState, useEffect } from "react";
import { Todo, DailyHistory } from "@/types/todo";
import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";
import TodoHistory from "./TodoHistory";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [history, setHistory] = useState<DailyHistory[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // 로컬스토리지에서 초기 데이터 로드
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    const savedHistory = localStorage.getItem("todoHistory");

    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
    setIsLoaded(true);
  }, []);

  // todos가 변경될 때마다 로컬스토리지에 저장
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos, isLoaded]);

  // history가 변경될 때마다 로컬스토리지에 저장
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("todoHistory", JSON.stringify(history));
    }
  }, [history, isLoaded]);

  // 날짜별로 히스토리 그룹화
  const updateHistory = (newTodo: Todo) => {
    const today = new Date().toDateString();
    const existingDayIndex = history.findIndex(
      (day) => new Date(day.date).toDateString() === today
    );

    if (existingDayIndex >= 0) {
      // 오늘 날짜가 이미 존재하면 해당 날짜에 추가
      const updatedHistory = [...history];
      updatedHistory[existingDayIndex].todos.push(newTodo);
      setHistory(updatedHistory);
    } else {
      // 오늘 날짜가 없으면 새로 생성
      setHistory([
        {
          date: new Date().toISOString(),
          todos: [newTodo],
        },
        ...history,
      ]);
    }
  };

  // Todo 추가
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([...todos, newTodo]);
    updateHistory(newTodo);
  };

  // Todo 삭제
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));

    // 히스토리에서도 삭제
    const updatedHistory = history
      .map((day) => ({
        ...day,
        todos: day.todos.filter((todo) => todo.id !== id),
      }))
      .filter((day) => day.todos.length > 0); // 빈 날짜는 제거

    setHistory(updatedHistory);
  };

  // Todo 완료 토글
  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

    // 히스토리에서도 완료 상태 업데이트
    setHistory(
      history.map((day) => ({
        ...day,
        todos: day.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      }))
    );
  };

  // Todo 수정
  const editTodo = (id: string, text: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));

    // 히스토리에서도 텍스트 업데이트
    setHistory(
      history.map((day) => ({
        ...day,
        todos: day.todos.map((todo) =>
          todo.id === id ? { ...todo, text } : todo
        ),
      }))
    );
  };

  if (!isLoaded) {
    return <div className="text-center text-gray-400 py-8">로딩 중...</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* 왼쪽: Todo 목록 (2/3 영역) */}
      <div className="lg:col-span-2">
        <AddTodoForm onAdd={addTodo} />

        {/* Todo 목록 */}
        <div className="space-y-2">
          {todos.length === 0 ? (
            <p className="text-center text-gray-400 py-8">
              할 일을 추가해보세요! 🎯
            </p>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleComplete}
                onDelete={deleteTodo}
                onEdit={editTodo}
              />
            ))
          )}
        </div>

        {/* 통계 */}
        {todos.length > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex justify-between text-sm text-gray-600">
              <span>전체: {todos.length}개</span>
              <span>완료: {todos.filter((t) => t.completed).length}개</span>
              <span>남은 일: {todos.filter((t) => !t.completed).length}개</span>
            </div>
          </div>
        )}
      </div>

      {/* 오른쪽: 히스토리 (1/3 영역) */}
      <div className="lg:col-span-1">
        <div className="lg:sticky lg:top-8">
          <TodoHistory history={history} />
        </div>
      </div>
    </div>
  );
}
