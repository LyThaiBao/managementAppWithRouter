const BASE_URL = "http://localhost:3000/students";
async function handleApi(paramPath, option, successAction, setState) {
  setState.setLoad(true);
  try {
    const response = await fetch(`${BASE_URL}/${paramPath}`, option);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    successAction(data);
  } catch (err) {
    setState.setErr(err.message);
  } finally {
    setState.setLoad(false);
  }
}

export const API_OPTION = (student) => {
  return {
    get: { method: "GET" },
    delete: { method: "DELETE" },
    patch: {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    },
    post: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    },
  };
};

export function getData(paramPath, option, successAction, setState) {
  handleApi(paramPath, option, successAction, setState);
}
export function deleteData(paramPath, option, successAction, setState) {
  handleApi(paramPath, option, successAction, setState);
}
export function postData(paramPath, option, successAction, setState) {
  handleApi(paramPath, option, successAction, setState);
}
export function patchData(paramPath, option, successAction, setState) {
  handleApi(paramPath, option, successAction, setState);
}
