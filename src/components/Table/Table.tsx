import useScores from "../../hooks/useScores";
import "./table.css";

function Table() {
  const { data, loading, error } = useScores();

  if (loading) {
    return (
      <div role="status" aria-live="polite">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div role="alert">Error: {error}</div>;
  }

  return (
    <div className="table-container">
      <table className="table text-center" id="high-scores-table">
        <caption>High Scores</caption>
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((score, index) => (
            <tr key={score.id}>
              <td scope="row">#0{index + 1}</td>
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
