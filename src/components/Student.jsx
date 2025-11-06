export default function Student({ id, name, age, major }) {
  return (
    <div>
      <h3>{name}</h3>
      <span>{age}</span>
      <h4>{major}</h4>
    </div>
  );
}
