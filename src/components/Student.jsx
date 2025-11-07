export default function Student({ mssv, id, name, age, major }) {
  return (
    <div>
      <span>{mssv}</span>
      <h3>{name}</h3>
      <span>{age}</span>
      <h4>{major}</h4>
    </div>
  );
}
