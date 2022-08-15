import '../styles/globals.css'
import "primereact/resources/themes/saga-green/theme.css";      //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import { store } from '../store/store'
import { Provider } from 'react-redux'
 

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Provider store={store}>
       <Component {...pageProps} />
    </Provider>,
     
    </>

  )
   
     
  
}

export default MyApp
