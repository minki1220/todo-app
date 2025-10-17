"use client";

import { useState } from "react";

interface AddTodoFormProps {
  onAdd: (text: string) => void;
}

export default function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    onAdd(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="새로운 할 일을 입력하세요..."
          className="flex-1 px-4 py-3 border-2 text-gray-400 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          추가
        </button>
      </div>
    </form>
  );
}
