import React from "react";
import { supabase } from "@/lib/supabaseClient";
import RaceWeekend from "./Weekend";

export type Weekend = {
  id: number;
  round: number;
  name: string;
  status: string | null;
};

const Calendar = async () => {
  const { data, error } = await supabase.from("Weekend").select("*");
  const weekends: Weekend[] | null = data ? data : null;

  return (
    <div className="flex flex-col w-full min-h-0 overflow-y-auto overflow-x-hidden items-center">
      {error && <pre>{JSON.stringify(error)}</pre>}
      {weekends?.map((weekend) => (
        <RaceWeekend key={weekend.id} weekend={weekend} />
      ))}
    </div>
  );
};

export default Calendar;
