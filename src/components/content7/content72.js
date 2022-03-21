
import style from './content72.module.css'
import style2 from './content72.step2.module.css'
import style3 from './content72.step3.module.css'
import img1 from '../../res/woman in white tank top and white leggings bending her body.jpg'
import img2 from '../../res/woman performing yoga.jpg'
import img3 from '../../res/woman in blue leggings and black tank top doing yoga.jpg'
import rightpng from '../../res/right.png'
import Item from './item'
import { useState } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import {Link} from 'react-router-dom';
import {
    formatDate,
    parseDate,
  } from 'react-day-picker/moment';

const datas = [
    {
        title:"首次體驗",
        content:"分基礎、中級、高級可以選擇。有長期習慣做瑜伽者建議選擇此方案。",
        money:"＄450 / 次",
        image:img1
    },
    {
        title:"短期體驗",
        content:"分基礎、中級、高級可以選擇。有長期習慣做瑜伽者建議選擇此方案。",
        money:"＄1800 / 月",
        image:img2
    },
    {
        title:"長期體驗",
        content:"分基礎、中級、高級可以選擇。有長期習慣做瑜伽者建議選擇此方案。",
        money:"＄5600 / 季",
        image:img3
    },
];

const Step1 = (props) => {
    if(props.disabled)
        return null;

    return (
      <div className={style.center}>
            <div className={style.area}>
                {datas.map((item,_index)=>(
                    <Item 
                        key={item.title}
                        index={_index}
                        title={item.title}
                        content={item.content}
                        image={item.image}
                        money={item.money}
                        handle={props.handle}
                    />
                ))}
            </div>
            <div className={style.h32}></div>
            <p className={style.p1}>立即預約</p>
            <div className={style.h16}></div>
            <p className={style.p2}>1. 如果有特殊體質、特殊狀況，請主動告知。</p>
            <p className={style.p2}>2. 取消預約或時間異動請於預約日前一天晚間 21:00 前告知，預約當日請勿異動或取消，以免影響您日後再預約的個人信用及難度。</p>
            <p className={style.p2}>3. 為維護上課品質，請遵守 DOYOGA 各項參觀規定，未遵守規定者，本公司保留謝絕入館之權利。</p>
            <p className={style.p2}>4. DOYOGA 保留修改預約須知之權利，修改後的條款將公佈於本網站上，不另外個別通知。如果您繼續在本網站進行參觀預約，就表示您已經了解、並同意遵守修改後的約定條款。</p>
      </div>
    )
}

function MyDayPickerInput(props) {
    const FORMAT = 'MM/DD/YYYY';
    return <DayPickerInput 
            inputProps={{ style: { width: 118,height:36,"paddingLeft":10,border: "1px solid #c0a4a5","borderRadius": 4,"fontSize":16,color:"#c0a4a5" } }}
            formatDate={formatDate}
            parseDate={parseDate}
            format={FORMAT}
            placeholder={FORMAT}
            onDayChange={props.handle}
            />;
}

const Step2= (props) => {

    const [selectedDate, handleDateChange] = useState(new Date());
    const [usedYoga, handleusedYogaChange] = useState();
    const [quations, handleQuations] = useState([]);
    const [time, handleTimeChange] = useState();
    const [name, handleNameChange] = useState();
    const [year, handleYearChange] = useState();
    const [gender, handleGenderChange] = useState("男");
    const [mail, handleEmailChange] = useState();
    const [phone, handlePhoneChange] = useState();
    
    if(props.disabled)
        return null;

    function handleQuationsChange(e) {
        const key = e.target.value;
        if(quations.includes(key)){
            const indexOfValue = quations.indexOf(key);
    
            if (indexOfValue >= 0) {
                quations.splice(indexOfValue, 1);
            }
        }else
            quations.push(key);

        handleQuations(quations);
      };

      function sendReserveHandler() {
        console.log(usedYoga);
        console.log(quations);
        console.log(time);
        console.log(name);
        console.log(year);
        console.log(gender);
        console.log(mail);
        console.log(phone);
        console.log(selectedDate);
        if(usedYoga == null || quations == null 
            || time == null || name == null || year == null 
            || mail == null || phone == null 
            || selectedDate == null)
            return;

        fetch("https://motoretag.taichung.gov.tw/DataAPI/api/ParkingSpotListAPI")
            .then(res=>res.json)
            .then(
                (result)=>{
                    sessionStorage.setItem('yoga', usedYoga);
                    sessionStorage.setItem('quations', quations.toString());
                    sessionStorage.setItem('time', time);
                    sessionStorage.setItem('name', name);
                    sessionStorage.setItem('year', year);
                    sessionStorage.setItem('gender', gender);
                    sessionStorage.setItem('mail', mail);
                    sessionStorage.setItem('phone', phone);
                    sessionStorage.setItem('date', selectedDate.toISOString());
                    props.handle();
                },
                (error)=>{
                    
                }
            );
      };
    
    return (
      <div className={style2.center}>
           <div className={style2.row}>
               <p className={style2.p1} >您選擇的是</p>
               <p className={style2.p2} >首次體驗課程-基礎</p>
           </div>
           <div className={style2.col}>
                <p className={style2.p1}>1. 是否接觸過瑜珈?</p>
                <div className={style2.h16}></div>
                <div className={style2.rownogap}>
                    <input type="radio" name="an1" value="1" onChange={(e)=>handleusedYogaChange(e.target.value)}/><label className={style2.p1}>是</label>
                    <div className={style2.w32}></div>
                    <input type="radio" name="an1" value="2" onChange={(e)=>handleusedYogaChange(e.target.value)}/><label className={style2.p1}>否</label>
                </div>
                <div className={style2.h32}></div>
               <p className={style2.p1}>2. 想改善的生活問題?</p>
               <div className={style2.h16}></div>
               <div className={style2.grid32}>
                    <div><input type="checkbox" value="an21" onChange={handleQuationsChange}/><label className={style2.p1}>肌耐力不足</label></div>
                    <div><input type="checkbox" value="an22" onChange={handleQuationsChange}/><label className={style2.p1}>柔軟度不佳</label></div>
                    <div><input type="checkbox" value="an23" onChange={handleQuationsChange}/><label className={style2.p1}>壓力大</label></div>
                    <div><input type="checkbox" value="an24" onChange={handleQuationsChange}/><label className={style2.p1}>姿勢不正</label></div>
                    <div><input type="checkbox" value="an25" onChange={handleQuationsChange}/><label className={style2.p1}>睡眠品質差</label></div>
                    <div><input type="checkbox" value="an26" onChange={handleQuationsChange}/><label className={style2.p1}>注意力不足</label></div>
               </div>
               <div className={style2.h32}></div>
               <p className={style2.p1}>3. 每週累積運動量約為多少？</p>
               <div className={style2.h16}></div>
               <div className={style2.grid22}>
                    <div><input type="radio" name="an3" value="1" onChange={(e)=>handleTimeChange(e.target.value)}/><label className={style2.p1}>150 分鐘以上</label></div>
                    <div><input type="radio" name="an3" value="2" onChange={(e)=>handleTimeChange(e.target.value)}/><label className={style2.p1}>75~150 分鐘</label></div>
                    <div><input type="radio" name="an3" value="3" onChange={(e)=>handleTimeChange(e.target.value)}/><label className={style2.p1}>30~75 分鐘</label></div>
                    <div><input type="radio" name="an3" value="4" onChange={(e)=>handleTimeChange(e.target.value)}/><label className={style2.p1}>30 分鐘以下</label></div>
               </div>
               <div className={style2.h32}></div>
               <p className={style2.p1}>4. 上課預約報到日</p>
               <p className={style2.p3}>若還沒有確定的日期，可以等待專員與您聯絡時再做詳細的諮詢哦！</p>
               <div className={style2.h16}></div>
               <div><MyDayPickerInput handle={handleDateChange}/></div>
               <div className={style2.h32}></div>
               <p className={style2.p1}>5. 填寫基本資料，完成預約後會寄送通知至電子信箱</p>
               <div className={style2.h16}></div>
               <div className={style2.grid22} style={{"columnGap": "8px"}}>
                    <label className={style2.p1}>姓名</label>
                    <label className={style2.p1}>年齡</label>
                    <input className={style2.inputField}  type="text" placeholder='請輸入您的姓名' onChange={(e)=>handleNameChange(e.target.value)}/>
                    <input className={style2.inputField}  type="text" placeholder='請輸入您的年齡' onChange={(e)=>handleYearChange(e.target.value)}/>
               </div>
               <div className={style2.h16}></div>
               <p className={style2.p1}>性別</p>
               <div className={style2.h8}></div>
               <select className={style2.custom_select} onChange={(e)=>handleGenderChange(e.target.value)}>
                    <option>男</option>
                    <option>女</option>
                </select>
                <div className={style2.h16}></div>
                <p className={style2.p1}>電子信箱</p>
                <div className={style2.h8}></div>
                <input className={style2.inputField}  type="text" placeholder='email@example.com' style={{width:"100%"}} onChange={(e)=>handleEmailChange(e.target.value)}/>
                <div className={style2.h16}></div>
                <p className={style2.p1}>手機號碼</p>
                <div className={style2.h8}></div>
                <input className={style2.inputField}  type="text" placeholder='0912-345-678' style={{width:"100%"}} onChange={(e)=>handlePhoneChange(e.target.value)}/>
                <div className={style2.h32}></div>
                <input className={style2.custom_btn} type="button" value="送出" onClick={(sendReserveHandler)}></input>
           </div>
      </div>
    )
}

const Step3 = (props) => {
    if(props.disabled)
        return null;

    return (
      <div className={style3.center}>
          <img className={style3.rightimg} src={rightpng}></img>
          <div className={style3.h20}></div>
          <label className={style3.p2}>已完成預約，以下是您的預約資訊:</label>
          <div className={style3.h32}></div>
          <div className={style3.infoarea}>
              <div className={style3.infotitle}>
                  <label className={style3.p_title}>預約資訊</label>
                  <label className={style3.p_title}>⌵</label>
              </div>
              <div className={style3.info_content}>
                    <div className={style3.info_classname}>
                            <label className={style3.p1}>您預約的是</label>
                            <label className={style3.p4}> {datas[sessionStorage.getItem('classindex')].title}-基礎</label>
                    </div>
                    <div className={style3.h16}></div>
                    <div className={style3.info_content_data}>
                        <label className={style3.p1}>上課預約報到日：{sessionStorage.getItem('date').split('T')[0]}</label>
                        <label className={style3.p1}>預約人：{sessionStorage.getItem('name')}</label>
                        <label className={style3.p1}>年齡：{sessionStorage.getItem('year')} 歲</label>
                        <label className={style3.p1}>性別：{sessionStorage.getItem('gender')}</label>
                        <label className={style3.p1}>電子信箱：{sessionStorage.getItem('mail')}</label>
                        <label className={style3.p1}>手機號碼：{sessionStorage.getItem('phone')}</label>
                    </div>
              </div>

          </div>
          <div className={style3.h24}></div>
          <label className={style3.p2}>上課注意事項</label>
          <div className={style3.h8}></div>
          <label className={style3.pnotion}>第一次上課請提前 10-15 分鐘至櫃檯報到，請攜帶毛巾、水 .穿著運動服、乾淨室內運動鞋。 如欲更改體驗時間請提前通知我們喔！</label>
          <div className={style3.h32}></div>
          <Link to="/">
            <input className={style3.custom_btn} type="button" value="返回首頁"></input>
          </Link>
      </div>
    )
}

function Content72(){
    const [index, setIndex] = useState(0);



    function nextStepHandler(classes){
        setIndex(index+1);
        if(classes != null)
            sessionStorage.setItem('classindex',classes);
    }

    function backHome(){
        window.history.forward();
    }

    return(
        <div className={style.main}>
            <p className={style.p1}>立即預約</p>
            <div className={style.pagearea}>
                <p className={ [style.pagebarpoint , index == 0 ? style.pagebarpointactive : style.pagebarpointdisable].join(" ")} >選擇方案</p>
                <p className={[style.pagebarpoint , index == 1 ? style.pagebarpointactive : style.pagebarpointdisable].join(" ")} >填寫資料</p>
                <p className={[style.pagebarpoint , index == 2 ? style.pagebarpointactive : style.pagebarpointdisable].join(" ")} >完成預約</p>
            </div>

            <Step1 disabled={index == 0 ? "" : "disable"} handle={nextStepHandler}/>
            <Step2 disabled={index == 1 ? "" : "disable"} handle={nextStepHandler}/>
            <Step3 disabled={index == 2 ? "" : "disable"} handle={backHome}/>
        </div>
    );
}

export default Content72;