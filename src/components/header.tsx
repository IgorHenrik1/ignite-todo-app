import { NewTaskBar } from "./newTaskBar";

export function Header() {
  return (
    <div className="h-[200px] bg-[#0D0D0D] flex items-center justify-center flex-col relative">
      <div className="text-[40px] font-black flex gap-3 items-center">
        <img className="w-[22px] h-9" src="/rocket.svg" alt="rocket icon" />
        <div>
          <span className="text-[#4EA8DE]">to</span>
          <span className="text-[#5E60CE]">do</span>
        </div>
      </div>
      <NewTaskBar />
    </div>
  );
}
