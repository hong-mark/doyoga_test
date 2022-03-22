
import { useState } from 'react';
import style from './check.module.css'
import { useNavigate } from "react-router-dom";

function CheckPage(){
    const [mail, handleEmailChange] = useState();
    const [phone, handlePhoneChange] = useState();
    let navigate = useNavigate();

    function click(){
        navigate('../checkresult',{state:{email:mail,cellphone:phone}});
    }

    return(
        <div className={style.main}>
            <input className={style.inputField}  type="text" placeholder='請輸入您的信箱' onChange={(e)=>handleEmailChange(e.target.value)}/>
            <input className={style.inputField}  type="text" placeholder='請輸入您的手機號碼' onChange={(e)=>handlePhoneChange(e.target.value)}/>
            <button className={style.custom_btn} type="button" onClick={click}>查詢</button>
        </div>
    )
}

export default CheckPage;