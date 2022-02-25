export default function Stats() {
  return (
      <div className="grid shadow stats stats-vertical md:stats-horizontal justify-items-stretch">
        <div className="grid grid-cols-1 place-items-center stat">
          <div className="stat-title">Downloads</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc text-info">Jan 1st - Feb 1st</div>
        </div>

        <div className="grid grid-cols-1 place-items-center stat">
          <div className="stat-title">New Users</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc text-success">↗︎ 400 (22%)</div>
        </div>

        <div className="grid grid-cols-1 place-items-center stat">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc text-error">↘︎ 90 (14%)</div>
        </div>
      </div>
  );
}
