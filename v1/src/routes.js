import HomePage from "./page/HomePage/HomePage"
import IphonePage from "./page/IphonePage/IphonePage"
import WritePage from "./page/WritePage/WritePage"
import SignInPage from "./page/SignInPage/SignInPage"
import SignUpPage from "./page/SignUpPage/SignUpPage"

export default {
    '/':HomePage,
    '/talk':IphonePage,
    '/create':WritePage,
    '/signin':SignInPage,
    '/signup':SignUpPage,
}
