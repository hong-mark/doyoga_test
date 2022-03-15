
import style from './item.module.css'

function Item(pros){
    return(
        <div className={style.main}>
            <img src={pros.image} />
            <div className={style.content}>
                <p className={style.p1}>{pros.name}</p>
                <div className={style.Stars} style={{"--rating": pros.star}}></div>
                <p className={style.p2}>{pros.content}</p>
            </div>
        </div>
    );
}
export default Item;