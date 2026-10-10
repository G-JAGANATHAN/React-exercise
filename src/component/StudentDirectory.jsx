
const StudentDirectory = ({ id, name, track, score }) => {
    return (
      <div className="card p-3 mb-3">
        <h2>{name}</h2>
        <p>ID: {id}</p>
        <p>Track: {track}</p>
        <p>Score: {score}</p>
      </div>
    );
  };
  
  const Student = () => {
    const students = [
      { id: "s1", name: "Arun", track: "React", score: 85 },
      { id: "s2", name: "Priya", track: "React", score: 92 },
      { id: "s3", name: "Kumar", track: "React", score: 76 },
    ];
   
    const sortedStudents = [...students].sort(
        (std1, std2) => std2.score - std1.score
      );
    

    return (
      <div className="container mt-5">
        {sortedStudents.map((student) => (
          <StudentDirectory
            
            id={student.id}
            name={student.name}
            track={student.track}
            score={student.score}
          />
        ))}
      </div>
    );
  };
  
  export default Student;
  