//Amplify専用のHTTP通信関数を利用する
//AWSの認証情報を自動的に通信データに添付してくれる
import { API } from 'aws-amplify';

const apiName = 'motokiquestionaireAPI'; //API GatewayでのAPI名
const path = '/questionaire'; // WebAPIのURL
const option = {
  // ヘッダーなどのオプション設定
  headers: {},
};

//WebAPIより全データ取得する関数
export const getData = async (setFunction) => {
  try {
    //GETでHTTP通信を開始
    const data = await API.get(apiName, path, option);
    //結果の保存
    setFunction(data);
  } catch (error) {
    console.error(error);
  }
};

//WebAPIに新たなデータを登録する関数
export const postData = async (newData) => {
  try {
    // オプションに送信データを設定
    option.body = {
      id: newData.id,
      feel_name: newData.feelName,
    }; //newDataと書いてもいい　option.bodyはそういう名前
    //POSTでHTTP通信を開始
    await API.post(apiName, path, option);
  } catch (error) {
    console.error(error);
  }
};

//WebAPIよりIDに該当するデータを取得する関数
export const getDataById = async (setFunction, id) => {
  try {
    //GETでHTTP通信を開始
    const data = await API.get(apiName, `${path}/${id}`, option);
    //結果の保存
    setFunction(data);
  } catch (error) {
    //通信を失敗した際の処理
    console.error(error);
  }
};

//WebAPIよりIDに該当するデータを更新する関数
export const updateData = async (newData) => {
  try {
    // オプションに送信データを設定
    option.body = {
      id: newData.id,
      feel_name: newData.feelName,
    };
    //PUTでHTTP通信を開始
    await API.put(apiName, `${path}/${newData.id}`, option);
  } catch (error) {
    console.error(error);
  }
};

//WebAPIよりIDに該当するデータを削除する関数
export const deleteData = async (id) => {
  try {
    //DELETEでHTTP通信を開始
    await API.del(apiName, `${path}/${id}`, option);
  } catch (error) {
    console.error(error);
  }
};
