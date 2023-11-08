import React from "react";
import './App.css';
import Form from "./components/Form";　//Formコンポーネント(Form.jsx)をインポート
import pic from "./ntteastlogo.jpg"; //NTT東日本のロゴをインポート

function App() {
  const dataList = {
    prefectures: [
      {
        id: 1,
        name: "東京都",
      },
      {
        id: 2,
        name: "神奈川県",
      },
      {
        id: 3,
        name: "千葉県",
      },
      {
        id: 4,
        name: "埼玉県",
      },
      {
        id: 5,
        name: "茨城県",
      },
      {
        id: 6,
        name: "栃木県",
      },
      {
        id: 7,
        name: "群馬県",
      },
      {
        id: 8,
        name: "山梨県",
      },
      {
        id: 9,
        name: "新潟県",
      },
      {
        id: 10,
        name: "長野県",
      },
      {
        id: 11,
        name: "北海道",
      },
      {
        id: 12,
        name: "青森県",
      },
      {
        id: 13,
        name: "秋田県",
      },
      {
        id: 14,
        name: "岩手県",
      },
      {
        id: 15,
        name: "山形県",
      },
      {
        id: 16,
        name: "宮城県",
      },
      {
        id: 17,
        name: "福島県",
      },
      {
        id: 18,
        name: "静岡県",
      }
    ],
  };
  const datas = JSON.stringify(dataList);
  return (
    <div>
      <img src={pic} alt="picture" />
      <Form title={"NTT東日本　お客様満足度調査"} data={datas} />
    </div>
  );
}
export default App;
