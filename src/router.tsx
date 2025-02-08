import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import BeanPage from "./pages/Bean";
import Facts from "./pages/Facts";
import NotFound from "./pages/NotFound";
import Beans from "./pages/Beans";
import Loader from "./components/Loader";
import Review from "./components/Contact";
import Recipes from "./pages/Recipes";
import Combinations from "./pages/Combinations";
import History from "./pages/History";

const router = createBrowserRouter([         // используем функцию из библиотеки "react-router-dom" и по подсказке видим, что в аргументах массив роутеров
    //                                            если зажимая "Ctrl" кликнуть по названию функции, затем по RouteObject[] и дойдя до типа IndexRouteObject видим, что у нас один
    //                                            объект, один route. Внутри него мы видим, что здесь есть различные типы для каждого ключа.
    //                                            Есть path, id, loader, children, elements и так далее.

    // Так теперь выглядит начинка роутера:
    {
        path: "deploy-ww",                                      // вызываем начальную страницу
        element: <Layout />,                            // вызываем компонент <Layout /> 
        loader: Loader,                                 // Загрузчик вызывается не в качестве компонента, а в качестве функции, что бы пользовтель мог видеть, что идёт загрузка страниц
        children: [                                     // теперь главная страница будет перересовываться в зависимости от вызова той или иной страницы, выступающих как дочерних,
        //                                                   а Header и Footer будут оставаться на месте
            {index: true, element: <Home />},
            {path: "deploy-ww/bean/:id", element: <BeanPage />},  // пробелы в адресе не ставить !!!
            {path: "deploy-ww/beans", element: <Beans />},
            {path: "deploy-ww/facts", element: <Facts />},
            {path: "deploy-ww/recipes", element: <Recipes />},
            {path: "deploy-ww/combinations", element: <Combinations />},
            {path: "deploy-ww/History", element: <History />},
            {path: "deploy-ww/review", element: <Review />},      // страница формы
            {path: "*", element: <NotFound />},
        ],
    },
    // Так выглядел роутер:
    /*{
        path: "/",                          // Первым у нас будет path, уникальный ключ (путь).
        element: <Home />                   // какой элемент пользователь будет отрисовывать по этому пути (ключу)
    },
    {
        path: "/bean/:id",   // пишем адрес с указанием id(хотя обозвать можем как угодно, лишь бы понятно было о чём речь: beanId, name и т.д.) через ":", т.к. это значение перепенное
        element: <BeanPage />
    },
    {
        path: "/beans",
        element: <Beans />
    },
    {
        path: "/facts",                     // и так тоже самое по всем путям
        element: <Facts />
    },
    {
        path: "*",                          // здесь в path "*" прописываем путь к компоненту, который визуализируется, если пользователь пропишет не определённый путь (ошибётся в адресе)
        element: <NotFound />
    }, */
])

export default router
