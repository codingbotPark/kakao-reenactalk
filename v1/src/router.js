import NotFoundPage from "./page/NotFoundPage/NotFoundPage";
import routes from "./routes";

export default function router(path){
    return routes[path]?? NotFoundPage
}