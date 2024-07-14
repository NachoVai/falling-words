import useScores from "../../hooks/useScores";
import "./table.css";

function Table() {
  const { data, loading, error } = useScores();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="table-container">
      <table className="table text-center" id="table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((score, index) => (
            <tr key={score.id}>
              <td>#0{index + 1}</td>
              <td>{score.name}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
