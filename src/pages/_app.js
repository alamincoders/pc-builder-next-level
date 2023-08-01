import RootLayout from '@/components/Layouts/RootLayout'
import store from '@/redux/store'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <RootLayout>
          <ToastContainer />
          <Component {...pageProps} />
        </RootLayout>
      </SessionProvider>
    </Provider>
  )
}
