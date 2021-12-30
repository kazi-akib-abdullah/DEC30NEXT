import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../comps/Layout/Layout'
import store from '../comps/redux/store'
import { Provider } from 'react-redux'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
    return(
      <Provider store={store}>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </Provider>
  )
}

export default MyApp
