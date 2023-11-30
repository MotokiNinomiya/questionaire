import React from 'react';
import { useState } from 'react';
import { useReducer } from 'react';
import './Form.css'; //Form.cssを読み込む
import './Form2.css'; //Form2.cssを読み込む
import { Button } from "./button";
import { Link,useNavigate} from "react-router-dom";
import pic from "../ntteastlogo.jpg"; //NTT東日本のロゴをインポート
import { Slider }from '@mui/material';
import { postData, updateData, deleteData } from './httpmethod';

//入力欄の初期値に相当
const initialState = {
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

  const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 1,
        label: '1',
    },
    {
        value: 2,
        label: '2',
    },
    {   
        value: 3,
        label: '3',
    },
    {
        value: 4,
        label: '4',
    },
    {
        value: 5,
        label: '5',
    },
    {
        value: 6,
        label: '6',
    },
    {
        value: 7,
        label: '7',
    },
    {
        value: 8,
        label: '8',
    },
    {
        value: 9,
        label: '9',
    },
    {
        value: 10,
        label: '10',
    },
   ];
  


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
      case 'edit_easy_or_difficult':
        return { ...state, easy_or_difficult: action.payload };
      case 'edit_explainpoints':
        return { ...state, explainpoints: action.payload };
      case 'edit_explainreason':
        return { ...state, explainreason: action.payload };
      case 'edit_suitable_or_long_or_short':
        return { ...state, suitable_or_long_or_short: action.payload };
      case 'edit_timepoints':
        return { ...state, timepoints: action.payload };
      case 'edit_timereason':
        return { ...state, timereason: action.payload };
      default:
        return state;
    }
  };
// ↑dispatchでデータを収集し、stateで集める

export const Form2 = (props) => {
    //ラジオボタンの初期値設定
    const RADIO_VALUES = ["大満足", "満足", "不満", "大不満"];
    const RADIO_VALUES2 = ["よかった", "よくなかった"];
    const RADIO_VALUES3 = ["よかった", "よくなかった"];
    const RADIO_VALUES4 = ["分かりやすかった", "分かりにくかった"];
    const RADIO_VALUES5 = ["適切だった", "長かった", "短かった"];


    const [state, dispatch] = useReducer(editReducer, initialState);

    const navigate = useNavigate();
    const handleClick = ({target}) => {
        //ここでデータを送信する処理を書く
        postData(state); 
        //navigate関数を使って画面遷移
        navigate('/form3');
    };

    // スライダーの値を状態として管理します
    //const [sliderValue, setSliderValue] = useState(5);
    // スライダーの値が変更されたときのハンドラー
    const handleSliderChange = (event,newValue) => {
        //setSliderValue(newValue);
        dispatch({ type: 'edit_mannerpoints', payload: newValue });
    };
    //eventがないとエラーが出る
    //Objects are not valid as a React child (found: [object MouseEvent]). If you meant to render a collection of children, use an array instead.
    // スライダーの値を状態として管理します
    //const [sliderValue2, setSliderValue2] = useState(5);
    // スライダーの値が変更されたときのハンドラー
    const handleSliderChange2 = (event,newValue) => {
        //setSliderValue2(newValue);
        dispatch({ type: 'edit_explainpoints', payload: newValue });
    };

    // スライダーの値を状態として管理します
    //const [sliderValue3, setSliderValue3] = useState(5);
    // スライダーの値が変更されたときのハンドラー
    const handleSliderChange3 = (event,newValue) => {
        //setSliderValue3(newValue);
        dispatch({ type: 'edit_timepoints', payload: newValue });
    };

    //ラジオボタン1を押した時の処理
    //const [selectedRadioBtnValue, setSelectedRadioBtnValue] = useState("");

    const onRadioBtnChanged = (target) => {
        //setSelectedRadioBtnValue(target.value);
        dispatch({ type: 'edit_good_or_bad', payload: target.value });
    };

    //ラジオボタン2を押した時の処理
    //const [selectedRadioBtnValue2, setSelectedRadioBtnValue2] = useState("");

    const onRadioBtnChanged2 = (target) => {
        //setSelectedRadioBtnValue2(target.value);
        dispatch({ type: 'edit_ok_or_notok', payload: target.value });
    };

    //ラジオボタン3を押した時の処理
    //const [selectedRadioBtnValue3, setSelectedRadioBtnValue3] = useState("");

    const onRadioBtnChanged3 = (target) => {
        //setSelectedRadioBtnValue3(target.value);
        dispatch({ type: 'edit_enought_or_notenough', payload: target.value });
    };

    //ラジオボタン4を押した時の処理
    //const [selectedRadioBtnValue4, setSelectedRadioBtnValue4] = useState("");

    const onRadioBtnChanged4 = (target) => {
        //setSelectedRadioBtnValue4(target.value);
        dispatch({ type: 'edit_easy_or_difficult', payload: target.value });
    };

    //ラジオボタン5を押した時の処理
    //const [selectedRadioBtnValue5, setSelectedRadioBtnValue5] = useState("");

    const onRadioBtnChanged5 = (target) => {
        //setSelectedRadioBtnValue5(target.value);
        dispatch({ type: 'edit_suitable_or_long_or_short', payload: target.value });
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
                {/*divを繰り返しすることで縦に*/}
                    {RADIO_VALUES.map((radioValue) => (
                    <div className="radio">
                        <label key={radioValue}>
                            <input
                            type="radio"
                            value={radioValue}
                            name="sample"
                            onChange={onRadioBtnChanged}
                            />
                            {radioValue}
                        </label>
                    </div>
                    ))}

            </div>

            <div className="container">
                {/*ラジオボタンの実装2*/}
                <div>
                    <h3>2.工事作業者の【マナー】について</h3>
                </div>
                <div>
                    <p>2-1 挨拶・言葉遣いについて応対マナーはいかがでしたでしょうか？</p>
                </div>
                    {RADIO_VALUES2.map((radioValue) => (
                        <div className="radio">
                            <label key={radioValue}>
                                <input
                                type="radio"
                                value={radioValue}
                                name="sample"
                                onChange={onRadioBtnChanged2}
                                />
                                {radioValue}
                            </label>
                        </div>
                        ))}
                <div>
                    <p>2-2 身だしなみ(服装・髪型など)はいかがでしたでしょうか？</p>
                </div>
                <div>
                    {RADIO_VALUES3.map((radioValue) => (
                            <div className="radio">
                                <label key={radioValue}>
                                    <input
                                    type="radio"
                                    value={radioValue}
                                    name="sample"
                                    onChange={onRadioBtnChanged3}
                                    />
                                    {radioValue}
                                </label>
                            </div>
                            ))}
                </div>
                {/*スライダーの実装*/}
                {/* react-sliderコンポーネントを使用 */}
                <div>
                    <p>2-3 工事担当者の応対マナーについて0-10点満点で評価をお願いいたします</p>
                </div>
                <div className="slider">
                    <Slider
                        value={state.mannerpoints}
                        onChange={handleSliderChange}
                        min={0}
                        max={10}
                        step={1}
                        valueLabelDisplay="on"
                        defaultValue={5}
                        aria-label="Temperature"
                        marks={marks}
                    />
                    {/* スライダーの値を表示*/}
                    <p>{state.mannerpoints}</p>
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
                <div>
                    {RADIO_VALUES4.map((radioValue) => (
                                <div className="radio">
                                    <label key={radioValue}>
                                        <input
                                        type="radio"
                                        value={radioValue}
                                        name="sample"
                                        onChange={onRadioBtnChanged4}
                                        />
                                        {radioValue}
                                    </label>
                                </div>
                                ))}
                </div>
                <div>
                    <p>3-2 工事担当者の説明について0-10点満点で評価をお願いいたします。</p>
                </div>
                <div className="slider">
                    <Slider
                        value={state.explainpoints}
                        onChange={handleSliderChange2}
                        min={0}
                        max={10}
                        step={1}
                        valueLabelDisplay="auto"
                        defaultValue={5}
                        aria-label="Temperature"
                        marks={marks}
                    />
                    {/* スライダーの値を表示*/}
                    <p>{state.explainpoints}</p>
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
                <div>
                    {RADIO_VALUES5.map((radioValue) => (
                                <div className="radio">
                                    <label key={radioValue}>
                                        <input
                                        type="radio"
                                        value={radioValue}
                                        name="sample"
                                        onChange={onRadioBtnChanged5}
                                        />
                                        {radioValue}
                                    </label>
                                </div>
                                ))}
                </div>
                <div>
                    <p>4-2 工事担当者の作業時間について0-10点満点で評価をお願いいたします。</p>
                </div>
                <div className="slider">
                    <Slider
                        value={state.timepoints}
                        onChange={handleSliderChange3}
                        min={0}
                        max={10}
                        step={1}
                        valueLabelDisplay="auto"
                        defaultValue={5}
                        aria-label="Temperature"
                        marks={marks}
                        sx={{fontSize: 20}} 
                    />
                    {/* スライダーの値を表示*/}
                    <p>{state.timepoints}</p>
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



