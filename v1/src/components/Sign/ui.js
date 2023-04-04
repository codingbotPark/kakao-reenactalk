import S from "./Sign.style.scss";

export default {
  addWrapper: (title) => {
    return `
        <div class=${S.Wrapper} >
            <div class=${S.InnerWrapper} >
                <h1>${title}</h1>
            </div>
        </div>
        `;
  },
  addSignInButton: (placeHolder) => {
    return `
        <button class=${S.SignButtonWrapper} >
            <div class=${S.SignButtonInner} >
                <div>${placeHolder}</div>
            </div>
        </button>
    `;
  },
};
