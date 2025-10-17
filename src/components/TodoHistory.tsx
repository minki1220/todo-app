"use client";

import { DailyHistory } from "@/types/todo";

interface TodoHistoryProps {
  history: DailyHistory[];
}

export default function TodoHistory({ history }: TodoHistoryProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const isToday = date.toDateString() === today.toDateString();
    const isYesterday = date.toDateString() === yesterday.toDateString();

    if (isToday) return "오늘";
    if (isYesterday) return "어제";

    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📅 기록</h2>

      {history.length === 0 ? (
        <p className="text-center text-gray-400 py-8">아직 기록이 없습니다</p>
      ) : (
        <div className="space-y-4">
          {history.map((day) => (
            <div
              key={day.date}
              className="bg-gray-50 rounded-lg p-4 border border-gray-200"
            >
              <h3 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <span className="text-purple-500">●</span>
                {formatDate(day.date)}
                <span className="text-xs text-gray-500 font-normal">
                  ({day.todos.length}개)
                </span>
              </h3>

              <div className="space-y-2">
                {day.todos.map((todo) => (
                  <div
                    key={todo.id}
                    className="bg-white rounded p-3 text-sm border border-gray-100"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span
                        className={`flex-1 ${
                          todo.completed
                            ? "text-gray-400 line-through"
                            : "text-gray-700"
                        }`}
                      >
                        {todo.text}
                      </span>
                      {todo.completed && (
                        <span className="text-green-500 text-xs">✓</span>
                      )}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {formatTime(todo.createdAt)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
