
import { useState } from 'react';
import style from './content8.module.css'
import Item from './item';

import img1 from '../../res/user-1.png'
import img2 from '../../res/user-2.png'
import img3 from '../../res/user-3.png'
import img4 from '../../res/user-4.png'
import img5 from '../../res/user-5.png'
import img6 from '../../res/user-6.png'

var datas = [
    {
        name: "Joanne Oct 17 2020",
        content: "服務很好、設備優良！",
        image: img1,
        star: 4.5
    },
    {
        name: "穎旻 Oct 17 2020",
        content: "上課後身體健康很多",
        image: img2,
        star: 5
    },
    {
        name: "子琪 Oct 17 2020",
        content: "上課很有趣！",
        image: img3,
        star: 4.2
    },
    {
        name: "子婷 Oct 17 2020",
        content: "服務很好、教的很到位！",
        image: img4,
        star: 4.3
    },
    {
        name: "夢夢 Oct 17 2020",
        content: "教練很漂亮",
        image: img5,
        star: 4.2
    },
    {
        name: "安娜 Oct 17 2020",
        content: "教練人很好",
        image: img6,
        star: 4.3
    },
];

function Content8() {
    const [index, setIndex] = useState(0);
    const [hasleft, setHasLeft] = useState(false);
    const [hasright, setHasRight] = useState(datas.length > 3);
    const [isMobile, setIsMobile] = useState(document.body.clientWidth < 768);
    window.addEventListener('resize', e => { setIsMobile(document.body.clientWidth < 768)  }, false);
    if(isMobile)
        var Itemlist = datas.slice(index * 3, (index +1)*3 );
    else
        var Itemlist = datas;

    function nextHandler(){
        setIndex(index+1);
        setHasLeft(true);
        setHasRight((index+2)*3 < datas.length);
    }

    function previewHandler(){
        setIndex(index-1);
        setHasLeft((index-1) !=0);
        setHasRight(index*3 < datas.length);
    }

    return (
        <div className={style.main}>
            <div className={style.h40}></div>
            <p className={style.p1}>聽聽他們怎麼說</p>
            <div className={style.h32}></div>
            <div className={style.cgrid}>
                {Itemlist.map((item) => (
                    <Item
                        key={item.name}
                        name={item.name}
                        content={item.content}
                        image={item.image}
                        star={item.star}
                    />
                ))}
            </div>
            <div className={style.nextandpre} style={{display: isMobile ?"" :"none"}}>
                <input className={style.Btn} type='button' value='←' disabled={hasleft ? "" : "disable"} onClick = {previewHandler}/>
                <input className={style.Btn} type='button' value='→'  disabled={hasright ? "" : "disable"}  onClick = {nextHandler}/>
            </div>
        </div>
    );
}

export default Content8;