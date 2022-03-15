
import style from "./content1.module.css";
import fb from "../res/facebook-share-icon-png-18.jpg.png";
import ig from "../res/ig.png";
import line from "../res/line.png";


function Content1(){
    return(
        <div className={style.backGround}>
            <div className={style.mainContent} >
                <p className={style.mainContentOneLable} >健身輕時尚</p>
                <p className={style.mainContentTwoLable} >DOYOGA，做你的瑜珈</p>
                <p className={style.mainContentThreeLable} >多給自己一點時間享受靜謐，傾聽內心的聲音。</p>
                <button type="button" className={style.previewBtn} >立即預約</button>
                <button type="button" className={style.resumeBtn} >課程介紹</button>
            </div>
            <div className={style.shareParent}>
                <input type="image" className={style.shareBtn} src={fb}  /> 
                <input type="image" className={style.shareBtn} src={ig}  /> 
                <input type="image" className={style.shareBtn} src={line} /> 
            </div>
        </div>
    )
}

export default Content1;