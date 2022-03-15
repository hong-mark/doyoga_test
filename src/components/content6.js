

import img1 from '../res/woman doing yoga beside wall.jpg'
import img2 from '../res/rawan-yasser-zQ1ypq-WHzQ-unsplash.jpg'
import style from './content6.module.css'
function Content6(){
    return(
        <div className={style.main} >
            <div className={style.area1}>
                <div className={style.content}>
                    <p className={style.p1}>精心設計、課程多元</p>
                    <p className={style.p2}>教師帶領多元課程，釋放壓力，與身心常見的緊繃不適溫柔和解。</p>
                    <div className={style.h24}></div>
                    <p className={style.p3}>課程介紹</p>
                </div>
            </div>
            <div className={style.area2}>
                <img src={img1} />
                <img src={img2} />
                <img src={img1} />
                <img src={img2} />
            </div>
        </div>
    );
}

export default Content6;