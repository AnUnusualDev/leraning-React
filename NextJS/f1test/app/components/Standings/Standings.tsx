import StandingsManager from "./StandingsManager";
import { supabase } from "../../../lib/supabaseClient";

const Standings = async () => {
  const { data: drivers } = await supabase.from("Driver").select("*");
  const { data: constructors } = await supabase.from("Constructor").select("*");
  return (
    <>
      <StandingsManager driversData={drivers} constructorsData={constructors} />
    </>
  );
};

export default Standings;
