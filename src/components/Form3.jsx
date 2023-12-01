import React, { useState } from 'react';
import './Form.css'; //Form.cssを読み込む
import './Form2.css'; //Form2.cssを読み込む
import Form from './Form';
import { Button } from "./button";
import { Link,useNavigate} from "react-router-dom";
import pic from "../ntteastlogo.jpg"; //NTT東日本のロゴをインポート
import { Slider }from '@mui/material';

function Form3(props) {
    const navigate = useNavigate();
    const handleClick = (event) => {
    //navigate関数を使って画面遷移
    navigate('/');
    }
    return (    
        <div>
            <div className="logo">
                    {/*ヘッダーの実装*/}
                    <img src={pic} alt="picture" />
            </div>

            <div className="labeltitle">
                    <b>{props.title}</b>
            </div>

            {/*冒頭文の実装*/}
            <div className="phrase">
                <p>NTT東日本のフレッツ回線をご利用していただきありがとうございます。</p>
                <p>NTT東日本では作業者の応対品質向上に向け、お客様満足度調査を実施しております</p>
            </div>
            <Button onClick={handleClick}> 
                アンケート画面に戻る
            </Button>
        </div>
    )
}

export default Form3