const Leaderboard = () => {
  let username = "username";
  return (
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
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>
              {" "}
              <div className="avatar avatar-placeholder mr-[5px]">
                <div className="bg-track-dark text-neutral-content w-8 rounded-full">
                  <span className="text-xs">{username[0].toUpperCase()}</span>
                </div>
              </div>
              {username}
            </td>
            <th className="text-racing-red">54</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
