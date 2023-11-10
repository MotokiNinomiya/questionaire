import React from 'react'
import './Form.css'; //Form.cssを読み込む
import { Button } from "./button";
import { Link , useNavigate} from "react-router-dom";
import pic from "../ntteastlogo.jpg"; //NTT東日本のロゴをインポート

function Form3(props) {
    const navigate = useNavigate();
    const handleClick = (event) => {
    //navigate関数を使って画面遷移
    navigate('/');
    }
    return (    
        <div>
            <img src={pic} alt="picture" />
            <div className="labeltitle">
                <b>{props.title}</b>
            </div>
            <div>
                <p>NTT東日本のフレッツ回線をご利用していただきありがとうございます。</p>
            </div>  
            <Button onClick={handleClick}>
                アンケートページに戻る
            </Button>
        </div>
    )
}

export default Form3