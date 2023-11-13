import React from "react";
import './Form.css'; //Form.cssを読み込む
import { Button } from "./button";
import { Link,useNavigate } from "react-router-dom"; //変更点 11/10　useNavigateによって画面遷移を実装　htmlのaタグみたいな
import prefecturesList from "./prefectures";
import pic from "../ntteastlogo.jpg"; //NTT東日本のロゴをインポート


export const Form = (props) => {
    // const data = JSON.parse(props.data); //これが問題
    
    // const mPrefectures = Object.keys(data.prefectures).map(function (key) {
    //     return data.prefectures[key];
    // });

    //変更点　11/10
    const navigate = useNavigate();
    const handleClick = (event) => {
        //navigate関数を使って画面遷移
        navigate('/form2');
    }
    
     

    const handleChange = (e) => { };

    return (
        <div>
            <div className="logo">
                {/*ヘッダーの実装*/}
                <img src={pic} alt="picture" />
            </div>
            <div className="labeltitle">
                <b>{props.title}</b>
            </div>
            {/*冒頭文*/}
            <div className="phrase">
                <p>NTT東日本のフレッツ回線をご利用していただきありがとうございます。</p>
                <p>NTT東日本では作業者の応対品質向上に向け、お客様満足度調査を実施しております</p>
                <p>作業者にフィードバックするために、以下の項目から１つ以上のご回答をお願いいたします</p>
            </div>
            {/*フォーム部分の実装*/}
            <div className="container">
                {/*契約IDフォームの実装*/}
                <div className="spacer">
                    <h4>ご契約ID(CAFまたはCOPから始まる番号)</h4>
                    <select>
                        <option value="caf">CAF</option>
                        <option value="cop">COP</option>
                    </select>
                    <input type="text" />
                </div>
                {/*電話番号フォームの実装*/}
                <div className="spacer">
                    <h4>携帯電話番号</h4>
                    <input type="text" />
                </div>
                <div className="spacer">
                    <h4>固定電話番号</h4>
                    <input type="text" />
                </div>
                {/*住所フォームの実装*/}
                <div>
                    <h3>ご住所</h3>
                </div>
                {/*住所フォームの実装*/}
                <div className="container2">
                    <div className="spacer">
                        <label>都道府県：</label>
                        <select onChange={(e) => handleChange(e)}>
                            {prefecturesList.prefectures.map((item) => (
                                <option value={item.id}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="spacer">
                        <label>市区町村：</label>
                        <input type="text" />
                    </div>
                    <div className="spacer">
                        <label>建物、番地：</label>
                        <input type="text" />
                    </div>
                </div>
            </div>
            {/*最後の文章実装*/}
            <div className="phrase">
                <p>記載していただいた個人情報は、作業者へフィードバック以外には使用しません</p>
                <p>第三者に個人情報を提供することもございません。</p>
                <p>なお、そのほか個人情報に関してはNTT東日本プライバシーポリシーに則って適切に取り扱います</p>
                <p>NTT東日本プライバシーポリシーは<a href="https://www.ntt-east.co.jp/info/disclaimer/privacy.html">こちら</a>をご確認ください</p>
            </div>    
            {/*次ページに遷移するボタンの実装*/}
            <Button onClick={handleClick} > 
                次へ
            </Button>   
        </div>
    );
};

export default Form;