//import { StrictMode } from 'react'                // Требуется при реализации строгого режима
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  //<StrictMode>      {/* В эту обёртку вставляются компоненты содержащие разметку HTML; «React.StrictMode» определяет «use strict», т.е. строгий режим разработки, при нём обработка
  //                      событий происходит два раза , если убрать этот тег, то рендериться и соответственно выводиться результат при обращении в консоль будет только один раз */}
    <App />
  //</StrictMode>,
)
