import { Check, CirclePlus, TrashIcon } from "lucide-react";
import { useState } from "react";

interface Task {
  title: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTask.trim() === "") return;
    const newTaskObj: Task = { title: newTask, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTaskObj]);
    setNewTask("");
  };

  function handleCheckTask(task: Task) {
    const taksTitle = task.title;
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.title === taksTitle
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(task: Task) {
    const taskTitle = task.title;
    const filteredTasks = tasks.filter((task) => task.title !== taskTitle);
    setTasks(filteredTasks);
  }

  return (
    <div className="bg-[#1a1a1a] h-screen w-full">
      <div className="h-[200px] bg-[#0D0D0D] flex items-center justify-center flex-col relative">
        <div className="text-[40px] font-black flex gap-3 items-center">
          <img className="w-[22px] h-9" src="/rocket.svg" alt="rocket icon" />
          <div>
            <span className="text-[#4EA8DE]">to</span>
            <span className="text-[#5E60CE]">do</span>
          </div>
        </div>
        <div className="mx-auto absolute bottom-[-27px]">
          <form className="flex gap-2 w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              name="task"
              placeholder="Adicione uma nova tarefa"
              value={newTask}
              onChange={handleChange}
              className="bg-[#262626] p-4 border mx-auto rounded-lg
        border-[#0D0D0D] text-base text-[#808080] 
        max-w-[634px] w-[634px]"
            />
            <button
              type="submit"
              className="bg-[#1E6F9F] text-white flex text-sm font-bold p-4 gap-2 rounded-lg items-center"
            >
              Criar <CirclePlus size={16} />
            </button>
          </form>
        </div>
      </div>
      <div className="relative max-w-[736px] w-full mx-auto">
        <div className=" mx-auto pt-[90px] space-y-6">
          <div className="flex justify-between">
            <div className="space-x-2">
              <span className="text-[#4EA8DE] text-sm font-bold">
                Tarefas criadas
              </span>
              <span
                className="text-white p-2 text-xs rounded-[100px] bg-[#333333] 
            font-bold"
              >
                {tasks.length}
              </span>
            </div>
            <div className="space-x-2">
              <span className="text-[#8284FA] text-sm font-bold">
                Concluídas
              </span>
              <span
                className="text-white p-2 text-xs rounded-[100px] bg-[#333333] 
            font-bold"
              >
                {tasks.filter((task) => task.completed).length}{" "}
              </span>
            </div>
          </div>

          <div className="rounded-lg border-t border-t-[#808080]/80">
            {tasks.length === 0 && (
              <div className="text-base text-[#808080] space-y-4">
                <img
                  src="/public/Clipboard.svg"
                  alt=""
                  width={56}
                  height={56}
                  className="mx-auto mt-16"
                />
                <div className="flex flex-col gap-2 text-center">
                  <span className="font-bold">
                    Você ainda não tem tarefas cadastradas
                  </span>
                  <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
              </div>
            )}

            <ul className="space-y-3">
              {tasks.map((task, index) => (
                <li key={index} className="text-white">
                  <div className="bg-[#262626] border-[#333333] rounded-lg p-4">
                    <div className="flex justify-between">
                      <div className="flex gap-3 w-[100%]">
                        <div
                          onClick={() => handleCheckTask(task)}
                          className={`rounded-full size-4 border flex justify-center items-center cursor-pointer ${
                            task.completed
                              ? "bg-[#5E60CE] border-[#5E60CE]"
                              : "bg-transparent"
                          } border-[#4EA8DE]`}
                        >
                          {task.completed && <Check className="size-2" />}
                        </div>
                        <p
                          className={`text-sm w-[80%]  ${
                            task.completed
                              ? "text-[#808080] line-through"
                              : "text-[#F2F2F2]"
                          } border-[#4EA8DE]`}
                        >
                          {task.title}
                        </p>
                      </div>
                      <TrashIcon
                        onClick={() => deleteTask(task)}
                        className="cursor-pointer size-4 text-[#808080]"
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
