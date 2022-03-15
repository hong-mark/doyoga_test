
import style from './content9.module.css'
import iconImg from '../res/DOYOGA.png'
import fb from '../res/facebook-share-icon-png-18.jpg.png'
import ig from '../res/ig.png'
import line from '../res/line.png'
function Content9(){
    return(
        <div className={style.main}>
            <div className={style.area}  >
                <p>現在訂閱，獲得課程優惠碼！</p>
                <div>
                    <input  type="text"/>
                    <button type="button">訂閱</button>
                </div>
            </div>
            <div className={style.line}></div>
            <div className={style.h33}></div>
            <div className={style.area2}>
                <div className={style.area2left}>
                    <img src={iconImg}/>
                    <p>課程介紹</p>
                    <p>瑜伽空間</p>
                    <p>當月課表</p>
                </div>
                <div className={style.area2right}>
                    <input type="image" src={fb}/> 
                    <input type="image" src={ig}/> 
                    <input type="image" src={line}/> 
                </div>
                <p className={style.cc}>© 2021. All Rights Reserved.</p>
            </div>
            
        </div>
    );
}

export default Content9;