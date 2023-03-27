import '@/styles/globals.css'
import axios from "axios";
import { parseCookies, destroyCookie } from "nookies";
import baseUrl from "../utils/baseUrl";
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
MyApp.getInitialProps = async ({ Component, ctx }) => {
  const { token } = parseCookies(ctx);
  let pageProps = {};

 
    try {
      
      const res = await axios.get(`${baseUrl}/api/auth`, {
        headers: { Authorization: token },
      
      });

      const { user } = res.data;
      
      pageProps.user = user;
   
    } catch (error) {
      destroyCookie(ctx, "token");
   
    
  }

  return { pageProps };
};
