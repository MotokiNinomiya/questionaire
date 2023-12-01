import React from "react";
import './App.css';
import Form from "./components/Form";　//Formコンポーネント(Form.jsx)をインポート
import Form2 from "./components/Form2";　//Formコンポーネント(Form.jsx)をインポート
import Form3 from "./components/Form3";　//Formコンポーネント(Form.jsx)をインポート 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import editReducer from './components/editReducer';
import initialState  from './components/initialState';
import { useReducer } from 'react';


// providerを書くことで、valueをformに渡す

export const QuestionaireAnswer = React.createContext();

function App() {
  const [state, dispatch] = useReducer(editReducer, initialState);
  return (
　<QuestionaireAnswer.Provider value={[state,dispatch]}>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Form title={"NTT東日本　お客様満足度調査"}/>} />  {/*urlを設定 "localhost:3000/"にアクセスしたらFormコンポーネントを表示*/}
        <Route path="/form2" element={<Form2 title={"NTT東日本　お客様満足度調査"}/>} /> {/*//urlを設定 "localhost:3000/form2"にアクセスしたらForm2コンポーネントを表示*/}
        <Route path="/form3" element={<Form3 title={"NTT東日本　お客様満足度調査"}/>} /> {/*//同様　element以下が出したコンポーネント*/}
      </Routes>
    </BrowserRouter>
  </QuestionaireAnswer.Provider>
  );
}
export default App;