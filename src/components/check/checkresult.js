import { useLocation,useNavigate } from 'react-router-dom';
import style from './check.module.css'

function CheckResultPage(){

    let navigate = useNavigate();
    let location = useLocation();
    let data = location.state;
    let params ={
        mail  : data.email,
        phone : data.cellphone
    }

    function cancelReserve(){
        sessionStorage.clear();
        navigate('../')
    }

    return(
        <div className={style.main}>
            {sessionStorage.getItem('mail') == params.mail && sessionStorage.getItem('phone')==params.phone ?
            <div className={style.main}>
                <label>姓名:{sessionStorage.getItem('name')}</label>
                <label>時間:{sessionStorage.getItem('date').split('T')[0]}</label>
                <button className={style.custom_btn} type="button" onClick={cancelReserve}>取消</button>
            </div>
            :<label>親愛的客戶目前沒有您的預約，麻煩立即預約。</label>}
        </div>
    );
}

export default CheckResultPage;