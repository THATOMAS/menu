const Menu = ({items})=>{
    return <div className="section-center">
        {items.map((menuItem)=>{
            const{id,title,category,price,img,desc} = menuItem

            return <article className="menu-item">
                <img src={img} alt={title} className="photo"/>
                <div className="item-info">
                    <header>
                        <h3>{title}</h3>
                        <h4 className="price">{`$${price}`}</h4>
                    </header>
                </div>
            </article>
        })}

    </div>
}

export default Menu;