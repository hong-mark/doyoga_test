
import style from './item.module.css'

function Item(pros){
    return(
        <div className={style.main}>
            <img src={pros.image}/>
            <div className={style.h20}></div>
            <div className={style.content}>                
                <p className={style.p1}>{pros.title}</p>
                <p className={style.p2}>NT {pros.money}</p>
                <div className={style.h8}></div>
                <p className={style.p3}>{pros.content}</p>
                <div className={style.h40}></div>
                <button type="button" onClick={()=>pros.handle(pros.index)}>選擇課程</button>
            </div>
        </div>
    );
}

export default Item;