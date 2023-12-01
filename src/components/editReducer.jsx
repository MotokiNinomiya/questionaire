//各入力欄の状態変更(=値の入力）を行うリデューサー関数
const editReducer = (state, action) => {
    switch (action.type) {
    case 'edit_caf-or-cop':
        return { ...state, caf_cop: action.payload };
    case 'edit_id':
        return { ...state, id: action.payload };
    case 'edit_phonenumber':
        return { ...state, phonenumber: action.payload };
    case 'edit_homephonenumber':
        return { ...state, homephonenumber: action.payload };
    case 'edit_prefecture':
        return { ...state, prefecture: action.payload };
    case 'edit_city':
        return { ...state, city: action.payload };
    case 'edit_address':
        return { ...state, address: action.payload };
    case 'edit_good_or_bad':
        return { ...state, good_or_bad: action.payload };
    case 'edit_ok_or_notok':
        return { ...state, ok_or_not: action.payload };
    case 'edit_enough_or_notenough':
        return { ...state, enought_or_notenough: action.payload };
    case 'edit_mannerpoints':
        return { ...state, mannerpoints: action.payload };
    case 'edit_mannerreason':
        return { ...state, mannerreason: action.payload };
    case 'edit_easy_or_difficult':
        return { ...state, easy_or_difficult: action.payload };
    case 'edit_explainpoints':
        return { ...state, explainpoints: action.payload };
    case 'edit_explainreason':
        return { ...state, explainreason: action.payload };
    case 'edit_suitable_or_long_or_short':
        return { ...state, suitable_or_long_or_short: action.payload };
    case 'edit_timepoints':
        return { ...state, timepoints: action.payload };
    case 'edit_timereason':
        return { ...state, timereason: action.payload };
    default:
        return state;
    }
};

export default editReducer;