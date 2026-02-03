import Link from "next/link";
import { Weekend } from "./Calendar";

interface Props {
  weekend: Weekend;
}

const RaceWeekend = ({ weekend }: Props) => {
  return (
    <Link href={"/"}>
      <div className="flex p-[20px] h-[100px] w-[90%] max-w-[1000px] m-[20px] bg-carbon-fiber justify-between items-center border-solid rounded-[8px]">
        <div className="flex flex-col">
          <p className="text-xs">Round {weekend.round}</p>
          <p>{weekend.name}</p>
          <p className="text-xl">18. Feb - 20</p>
        </div>
        <div className="flex flex-col h-full justify-between">
          <p>{weekend.status}</p>
          <p className="text-xs">Not tipped yet</p>
        </div>
      </div>
    </Link>
  );
};

export default RaceWeekend;
