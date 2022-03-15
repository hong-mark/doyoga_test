

import style from './item.module.css'

function Item(pros){
    return(
        <div className={style.main}>
            <img src={pros.image} />
            <div >
                <p >{pros.title}</p>
                <p >{pros.content}</p>
            </div>
        </div>
    );
}

export default Item;