import React from 'react'
import './Form.css'; //Form.cssを読み込む
import { Button } from "./button";
import { Link,useNavigate} from "react-router-dom";




function Form2(props) {
    const navigate = useNavigate();
    const handleClick = (event) => {
        //navigate関数を使って画面遷移
        navigate('/form3');
    }
    return (    
        <div>
            <div className="labeltitle">
                <b>{props.title}</b>
            </div>
            <div>
                <p>NTT東日本のフレッツ回線をご利用していただきありがとうございます。</p>
                <p>NTT東日本では作業者の応対品質向上に向け、お客様満足度調査を実施しております</p>
                <p>作業者にフィードバックするために、以下の項目から１つ以上のご回答をお願いいたします</p>
            </div>  
            <Button onClick={handleClick}> 
                    送信
            </Button>
        </div>
    )
}

export default Form2

