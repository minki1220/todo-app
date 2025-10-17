"use client";

import { useState, useEffect } from "react";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setCurrentTime(new Date());

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = () => {
    if (!currentTime) return "";
    return currentTime.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    });
  };

  const formatTime = () => {
    if (!currentTime) return "";
    return currentTime.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  if (!isMounted) {
    return (
      <div className="text-center mb-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-4 shadow-sm">
        <div className="text-4xl font-bold text-gray-800 mb-1 font-mono">
          --:--:--
        </div>
        <div className="text-sm text-gray-600">로딩 중...</div>
      </div>
    );
  }

  return (
    <div className="text-center mb-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-4 shadow-sm">
      <div className="text-4xl font-bold text-gray-800 mb-1 font-mono">
        {formatTime()}
      </div>
      <div className="text-sm text-gray-600">{formatDate()}</div>
    </div>
  );
}
