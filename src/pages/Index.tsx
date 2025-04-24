
import TodoList from "@/components/TodoList";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Todo List</h1>
        <p className="text-gray-600">Stay organized and get things done</p>
      </div>
      <TodoList />
    </div>
  );
};

export default Index;
