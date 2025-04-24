
import React from "react";
import { Check, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({ id, text, completed, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div
      className={cn(
        "group flex items-center gap-3 rounded-lg border p-4 transition-all hover:border-purple-200",
        completed && "bg-gray-50"
      )}
    >
      <button
        onClick={() => onToggle(id)}
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 transition-colors hover:border-purple-500",
          completed && "border-purple-500 bg-purple-500"
        )}
      >
        {completed && <Check className="h-4 w-4 text-white" />}
      </button>
      <span
        className={cn(
          "flex-1 text-gray-700 transition-colors",
          completed && "text-gray-400 line-through"
        )}
      >
        {text}
      </span>
      <button
        onClick={() => onDelete(id)}
        className="invisible group-hover:visible"
        aria-label="Delete todo"
      >
        <Trash2 className="h-5 w-5 text-gray-400 transition-colors hover:text-red-500" />
      </button>
    </div>
  );
};

export default TodoItem;
