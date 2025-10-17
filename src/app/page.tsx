import TodoList from "@/components/TodoList";
import Clock from "@/components/Clock";
import QuickLinks from "@/components/QuickLinks";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Clock />
        <QuickLinks />
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            📝 To-Do List
          </h1>
          <TodoList />
        </div>
      </div>
    </div>
  );
}
