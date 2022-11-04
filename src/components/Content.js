import { useContext } from "react";
import Appcontext from "../context/Appcontext";
import Accordion from "./Accordion";
function Content({ type, title, children }) {
  const { setSelectedPost } = useContext(Appcontext);

  function selectedFunction() {
    setSelectedPost(title);
  }

  return type === "directory" ? (
    <Accordion title={`📂${title}`}>
      {children?.map((one) => (
        <Content {...one} />
      ))}
    </Accordion>
  ) : (
    <div onClick={selectedFunction}>&nbsp;&nbsp;&nbsp;&nbsp;📝{title}</div>
  );
}
export default Content;
