type Driver = {
  name: string;
  points: number;
  constructorId: number;
};

const DriversTable = ({ data: drivers }: { data: Driver[] }) => {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-carbon-fiber m-[20px] border-t-asphalt-gray border-t-4 w-full max-w-[1000px]">
          <table className="table">
            <thead className="text-asphalt-gray">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              {drivers.map((driver, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{driver.name}</td>
                  <th className="text-racing-red">{driver.points}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DriversTable;
