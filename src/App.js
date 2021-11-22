import React,{useState} from "react"
import Menu from "./Menu"
import Categories from "./Categories"
import items from "./data"

function App (){
  const allCategories = ["all",... new Set(items.map((item)=>item.category))  
   ] 
  const [menuItems,setMenuItems]= useState(items)
  const [categories,setCategories] = useState(allCategories)



  const filterItems = (category)=>{
    const newItems = items.filter((item)=> item.category === category)
    setMenuItems(newItems)
  }
  
  
  return <main>
    <section>
     <div className="title">
       <h1>Our Menu</h1>
       <div className="underline"></div>
     </div>
    </section>
    <Categories filterItems={filterItems} categories={categories}/>
    <Menu items={menuItems}/>
  </main>
}

export default App;
