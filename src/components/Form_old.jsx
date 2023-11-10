import React from "react";
import './Form.css'; //Form.cssを読み込む

export const Form = (props) => {
    const data = JSON.parse(props.data);
    const mPrefectures = Object.keys(data.prefectures).map(function (key) {
        return data.prefectures[key];
    });

    const handleChange = (e) => { };

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
            <div className="container">
                <div className="spacer" />
                <div>
                    <h4>ご契約ID(CAFまたはCOPから始まる番号)</h4>
                    <select>
                        <option value="caf">CAF</option>
                        <option value="cop">COP</option>
                    </select>
                    <input type="text" />
                </div>
                <div className="spacer" />
                <div>
                    <h4>携帯電話番号</h4>
                    <input type="text" />
                </div>
                <div className="spacer" />
                <div>
                    <h4>固定電話番号</h4>
                    <input type="text" />
                </div>
                <div>
                    <h3>ご住所</h3>
                </div>
                <div className="container2">
                    <div className="spacer" />
                    <div>
                        <label>都道府県：</label>
                        <select onChange={(e) => handleChange(e)}>
                            {mPrefectures.map((item) => (
                                <option value={item.id}>{item.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="spacer" />
                    <div>
                        <label>市区町村：</label>
                        <input type="text" />
                    </div>
                    <div className="spacer" />
                    <div>
                        <label>建物、番地：</label>
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div>
                <p>記載していただいた個人情報は、作業者へフィードバック以外には使用しません</p>
                <p>第三者に個人情報を提供することもございません。</p>
                <p>なお、そのほか個人情報に関してはNTT東日本プライバシーポリシーに則って適切に取り扱います</p>
                <p>NTT東日本プライバシーポリシーは<a href="https://www.ntt-east.co.jp/info/disclaimer/privacy.html">こちら</a>をご確認ください</p>
                <button>次へ</button>
            </div>
        </div>
    );
};
export default Form;
