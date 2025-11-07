export default function StudentAdd({ handleAdd }) {
  function handleSubmit(e) {
    e.preventDefault();
    const mssv = e.target.mssv.value;
    const name = e.target.name.value;
    const age = e.target.age.value;
    const major = e.target.major.value;
    const coursesName = e.target.courses.value.split(",");
    const courses = coursesName.map((c, index) => {
      return { id: index + 1, name: c };
    });
    const student = {
      mssv,
      name,
      age,
      major,
      courses,
    };
    if (mssv && name && age && major && courses.length > 0) {
      handleAdd(student);
    }
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="mssv">Student ID</label>
      <input type="text" name="mssv" id="mssv" />
      <label htmlFor="name">Student name</label>
      <input type="text" name="name" id="name" />
      <hr />
      <label htmlFor="age">Student age</label>
      <input type="number" name="age" id="age" />
      <hr />
      <label htmlFor="major">Student major</label>
      <input type="text" name="major" id="major" />
      <hr />
      <label htmlFor="courses">Student Courses</label>
      <input type="text" name="courses" id="courses" />
      <hr />
      <button type="submit">ADD</button>
    </form>
  );
}
