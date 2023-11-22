import React from 'react';
import { useState } from 'react';
import { useReducer } from 'react';
import './Form.css'; //Form.cssを読み込む
import './Form2.css'; //Form2.cssを読み込む
import { Button } from "./button";
import { Link,useNavigate} from "react-router-dom";
import pic from "../ntteastlogo.jpg"; //NTT東日本のロゴをインポート
import { Slider }from '@mui/material';
//import { postData, updateData, deleteData } from './httpMethods';
//入力欄の初期値に相当
const initlalState = {
    good_or_bad: '',
    ok_or_not: '',
    enough_or_notenough: '',
    mannerpoints: '',
    mannerreason: '',
    easy_or_difficult: '',
    explainpoints: '',
    explainreason: '',
    suitable_or_long_or_short: '',
    timepoints: '',
    timereason: '',
  };
  //各入力欄の状態変更(=値の入力）を行うリデューサー関数
  const editReducer = (state, action) => {
    switch (action.type) {
      case 'edit_good_or_bad':
        return { ...state, good_or_bad: action.payload };
      case 'edit_ok_or_notok':
        return { ...state, ok_or_notok: action.payload };
      case 'edit_enought_or_notenough':
        return { ...state, enought_or_notenough: action.payload };
      case 'edit_mannerpoints':
        return { ...state, mannerpoints: action.payload };
      case 'edit_mannerreason':
        return { ...state, mannerreason: action.payload };
      default:
        return state;
    }
  };


export const Form2 = (props) => {
    //ラジオボタンの初期値設定
    const RADIO_VALUES = ["大満足", "満足", "不満", "大不満"];
    // const RADIO_VALUES2 = ["よかった", "よくなかった"];
    // const RADIO_VALUES3 = ["よかった", "よくなかった"];
    // const RADIO_VALUES4 = ["分かりやすかった", "分かりにくかった"];
    // const RADIO_VALUES5 = ["適切だった", "長かった", "短かった"];


    const [state, dispatch] = useReducer(editReducer, initlalState);

    const navigate = useNavigate();
    const handleClick = ({target}) => {
        //navigate関数を使って画面遷移
        navigate('/form3');
    };

    // スライダーの値を状態として管理します
    const [sliderValue, setSliderValue] = useState(5);
    // スライダーの値が変更されたときのハンドラー
    const handleSliderChange = (event,newValue) => {
        setSliderValue(newValue);
        dispatch({ type: 'edit_mannerpoints', payload: newValue });
    };
    //eventがないとエラーが出る
    //Objects are not valid as a React child (found: [object MouseEvent]). If you meant to render a collection of children, use an array instead.
    // スライダーの値を状態として管理します
    const [sliderValue2, setSliderValue2] = useState(5);
    // スライダーの値が変更されたときのハンドラー
    const handleSliderChange2 = (event,newValue) => {
        setSliderValue2(newValue);
        dispatch({ type: 'edit_explainpoints', payload: newValue });
    };

    // スライダーの値を状態として管理します
    const [sliderValue3, setSliderValue3] = useState(5);
    // スライダーの値が変更されたときのハンドラー
    const handleSliderChange3 = (event,newValue) => {
        setSliderValue3(newValue);
        dispatch({ type: 'edit_timepoints', payload: newValue });
    };

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

            <div className="container">
            {/*ラジオボタンの実装*/}
                <div>
                    <h3>1.工事全体について</h3>
                </div>
                <div>
                    <p>1-1 工事担当者のお客様対応について</p>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" name="radio" value="verygood" /> 
                        大満足
                    </label>
                    </div>
                    <div className="radio">
                    <label>
                        <input type="radio" name="radio" value="good" /> 
                        満足
                    </label>
                    </div>
                    <div className="radio">
                    <label>
                        <input type="radio" name="radio" value="bad" /> 
                        不満
                    </label>
                    </div>
                    <div className="radio">
                    <label>
                        <input type="radio" name="radio" value="verybad" /> 
                        大不満
                    </label>
                </div>
            </div>

            <div className="container">
                {/*ラジオボタンの実装2*/}
                <div>
                    <h3>2.工事作業者の【マナー】について</h3>
                </div>
                <div>
                    <p>2-1 挨拶・言葉遣いについて応対マナーはいかがでしたでしょうか？</p>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" name="radio" value="OK" /> 
                        よかった
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" name="radio" value="notOK" /> 
                        よくなかった
                    </label>
                </div>
                <div>
                    <p>2-2 身だしなみ(服装・髪型など)はいかがでしたでしょうか？</p>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" name="radio" value="enough" /> 
                        よかった
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" name="radio" value="notenough" /> 
                        よくなかった
                    </label>
                </div>
                {/*スライダーの実装*/}
                {/* react-sliderコンポーネントを使用 */}
                <div>
                    <p>2-3 工事担当者の応対マナーについて0-10点満点で評価をお願いいたします</p>
                </div>
                <div className="slider">
                    <Slider
                        value={sliderValue}
                        onChange={handleSliderChange}
                        min={0}
                        max={10}
                        step={1}
                        marks={true}
                        valueLabelDisplay="auto"
                        defaultValue={5}
                        aria-label="Temperature"
                    />
                    {/* スライダーの値を表示*/}
                    <p>{sliderValue}</p>
                </div>
                <div className="reason">
                    <p>2-4 上記を評価した理由を教えてください</p>
                    <input 
                    type="text" 
                    style={{width: "460px", height: "100px"}}
                    />
                </div>
            </div>
            <div className="container">
                {/*ラジオボタンの実装2*/}
                <div>
                    <h3>3.工事作業者の【説明】について</h3>
                </div>
                <div>
                    <p>3-1 工事作業前、作業後の説明について分かりやすかったでしょうか？</p>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" name="radio" value="easy" /> 
                        分かりやすかった
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" name="radio" value="difficult" /> 
                        分かりにくかった
                    </label>
                </div>
                <div>
                    <p>3-2 工事担当者の説明について0-10点満点で評価をお願いいたします。</p>
                </div>
                <div className="slider">
                    <Slider
                        value={sliderValue2}
                        onChange={handleSliderChange2}
                        min={0}
                        max={10}
                        step={1}
                        marks={true}
                        valueLabelDisplay="auto"
                        defaultValue={5}
                        aria-label="Temperature"
                    />
                    {/* スライダーの値を表示*/}
                    <p>{sliderValue2}</p>
                </div>
                <div className="reason">
                    <p>3-3 上記を評価した理由を教えてください</p>
                    <input 
                    type="text" 
                    style={{width: "460px", height: "100px"}}
                    />
                </div>
            </div>

            <div className="container">
                {/*ラジオボタンの実装2*/}
                <div>
                    <h3>4.工事作業者の【時間】について</h3>
                </div>
                <div>
                    <p>4-1 実際の作業時間について事前の説明と比較していかがだったでしょうか？</p>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" name="radio" value="suitable" /> 
                        適切だった
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" name="radio" value="long" /> 
                        長かった
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" name="radio" value="short" /> 
                        短かった
                    </label>
                </div>
                <div>
                    <p>4-2 工事担当者の作業時間について0-10点満点で評価をお願いいたします。</p>
                </div>
                <div className="slider">
                    <Slider
                        value={sliderValue3}
                        onChange={handleSliderChange3}
                        min={0}
                        max={10}
                        step={1}
                        marks={true}
                        valueLabelDisplay="auto"
                        defaultValue={5}
                        aria-label="Temperature"
                    />
                    {/* スライダーの値を表示*/}
                    <p>{sliderValue3}</p>
                </div>
                <div className="reason">
                    <p>4-3 上記を評価した理由を教えてください</p>
                    <input 
                    type="text" 
                    style={{width: "460px", height: "100px"}}
                    />
                </div>
            </div>

            <Button onClick={handleClick}> 
                送信
            </Button>
        </div>
    );
};

export default Form2;



