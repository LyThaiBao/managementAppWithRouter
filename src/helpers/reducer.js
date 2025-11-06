export default function reducer(currentData = [], action) {
  switch (action.type) {
    case "GET":
      return action.data;
    case "DELETE":
      return currentData.filter((c) => c.id != action.id);
    case "POST":
      return [...currentData, action.data];
    case "PATCH":
      return currentData.map((c) =>
        c.id === action.data.id ? action.data : c
      );
    default:
      return currentData;
  }
}
