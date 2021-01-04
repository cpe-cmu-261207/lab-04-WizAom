export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
  return <>
    <td><p id="p">course : {props.name}</p>
    <p>grade : {props.grd}</p>
    <p>weight : {props.crd}</p>
    <button className = "bg-blue-500 rounded-2xl p-1 text-left hover:bg-red-200" onClick = {() =>props.del(props.name)} > remove </button></td>
  </>;
};