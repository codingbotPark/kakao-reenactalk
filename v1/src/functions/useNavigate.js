const useNavigate = (pathname,effect=undefined,doReplace=false) => {
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
