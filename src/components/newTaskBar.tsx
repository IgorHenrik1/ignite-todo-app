import { CirclePlus } from "lucide-react";

export function NewTaskBar() {
  return (
    <div className="mx-auto absolute bottom-[-27px] flex gap-2">
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className="bg-[#262626] p-4 border mx-auto rounded-lg
        border-[#0D0D0D] text-base text-[#808080] 
        max-w-[634px] w-[634px]"
      />
      <button className="bg-[#1E6F9F] text-white flex text-sm font-bold p-4 gap-2 rounded-lg items-center">
        Criar <CirclePlus size={16} />
      </button>
    </div>
  );
}
