import routes from "../routes";

const useNavigate = (pathname,doReplace=false,effect=undefined) => {
  const customHistoryChangeEvnet = new CustomEvent("customHistoryChange",{
    detail:{
        pathname,
        doReplace,
        effect,
    }
  })
  dispatchEvent(customHistoryChangeEvnet)
};

export default useNavigate;
