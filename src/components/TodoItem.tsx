"use client";

import { useState } from "react";
import { Todo } from "@/types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
  onEdit,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState(todo.text);

  const handleSave = () => {
    if (editingText.trim() === "") return;
    onEdit(todo.id, editingText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditingText(todo.text);
    setIsEditing(false);
  };

  return (
    <div className="group flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      {/* 체크박스 */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 text-purple-500 rounded focus:ring-2 focus:ring-purple-500 cursor-pointer"
      />

      {/* Todo 텍스트 또는 편집 입력 */}
      {isEditing ? (
        <input
          type="text"
          value={editingText}
          onChange={(e) => setEditingText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSave();
            if (e.key === "Escape") handleCancel();
          }}
          className="flex-1 px-3 py-2 border-2 border-purple-500 rounded focus:outline-none"
          autoFocus
        />
      ) : (
        <span
          className={`flex-1 ${
            todo.completed ? "text-gray-400 line-through" : "text-gray-700"
          }`}
        >
          {todo.text}
        </span>
      )}

      {/* 버튼들 */}
      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors"
            >
              저장
            </button>
            <button
              onClick={handleCancel}
              className="px-3 py-1 bg-gray-400 text-white text-sm rounded hover:bg-gray-500 transition-colors"
            >
              취소
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
            >
              수정
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
            >
              삭제
            </button>
          </>
        )}
      </div>
    </div>
  );
}
