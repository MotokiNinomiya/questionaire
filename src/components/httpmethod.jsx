import { API } from 'aws-amplify';

const apiName = 'QuestionaireNinomiyaAPI';
const path = '/Questionaire';
const option = {
  headers: {}
};

export const postData = async (newData) => {
  try {
    const datetime = Math.floor(Date.now() / 1000); //現在のUNIXTIME（秒）
    const ID = crypto.randomUUID(); //uuid v4
    const newItem = {
        datetime : datetime,
        ID: ID,
        address: newData.address,
        caf_cop: newData.caf_cop,
        city: newData.city,
        easy_or_difficult: newData.easy_or_difficult,
        enough_or_notenough: newData.enough_or_notenough,
        explainpoints: newData.explainpoints,
        explainreason: newData.explainreason,
        good_or_bad: newData.good_or_bad,
        homephonenumber: newData.homephonenumber,
        id: newData.id,
        mannerpoints: newData.mannerpoints,
        mannerreason: newData.mannerreason,
        ok_or_not: newData.ok_or_not,
        phonenumber: newData.phonenumber,
        prefecture: newData.prefecture,
        suitable_or_long_or_short: newData.suitable_or_long_or_short,
        timepoints: newData.timepoints,
        timereason: newData.timereason
    };
    option.body = newItem;
    await API.post(apiName, path, option);
  } catch (error) {
    console.error(error);
  }
};