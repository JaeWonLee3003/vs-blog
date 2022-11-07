import { useContext } from "react";
import Appcontext from "../context/Appcontext";
import Accordion from "./Accordion";
function Content({ type, title, children, path }) {
  const { setSelectedPost, setOpenPost, openPost } = useContext(Appcontext);

  function selectedFunction() {
    setSelectedPost(title);

    if (!openPost.includes(path));

    setOpenPost([...openPost, title]);
  }

  return type === "directory" ? (
    <Accordion title={`📂${title}`}>
      {children?.map((one, index) => (
        <Content {...one} key={index} />
      ))}
    </Accordion>
  ) : (
    <div onClick={selectedFunction}>&nbsp;&nbsp;&nbsp;&nbsp;📝{title}</div>
  );
}
export default Content;
