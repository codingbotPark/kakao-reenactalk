import { createPortal } from "react-dom";

function Portal({ children, elementId }) {
  const rootElement = document.getElementById(elementId)
  console.log(rootElement)
  return createPortal(children,rootElement)
}

export default Portal