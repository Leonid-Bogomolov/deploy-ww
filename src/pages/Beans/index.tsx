///import { ThemeContext } from "../../App"
import Cards from "../../components/Cards"
//import Header from "../../components/Header"
import Search from "../../components/Search"
import { useState } from "react"
import style from "./style.module.css"

const Beans = () => {
    const [filterValue, setFilterValue] = useState("")
    ///const [theme, setTheme] = useState("light")             // создали состояние theme для смены цветовой темы с начальным зачением light



    return (
        
    //{/*<ThemeContext.Provider value={{ theme, setTheme }}>    {/* обернув компоненты в тег ThemeContext со свойством Provider(подрядчик) получаем возможность
      //                                                           изменять их CSS свойства хуком useContext (см component/SwitchTheme/index.tsx) и будем передавать в провайдере не строку,
      //                                                           а состояние theme в виде объекта "{theme: theme, setTheme: setTheme}", в укороченной записи -{theme, setTheme}  */}
          //  {/*<Header />*/}
        <div className={style.container}>
            <h1>Explore All Beans ...</h1>
            <Search setFilterValue={setFilterValue} />      {/* Внутри компонета Search функцией изменения состояния {setFilterValue} изменяем состояние самого компонента через
                //                                                      атрибут setFilterValue теперь состояние может передаваться с помощью Props определяемого(задаваемого) в
                //                                                      Search/index.tsx */}
            <Cards filterValue={filterValue} />             {/* состояние может передаваться с помощью Props определяемого(задаваемого) в Cards/index.tsx */}
        </div>    
    //{/*</ThemeContext.Provider>*/}
        
    )
}

export default Beans