import routes from "../routes";

const useNavigate = (pathname,doReplace=false) => {
  const customHistoryChangeEvnet = new CustomEvent("customHistoryChange",{
    detail:{
        pathname,
        doReplace,
    }
  })
  dispatchEvent(customHistoryChangeEvnet)
};

export default useNavigate;
