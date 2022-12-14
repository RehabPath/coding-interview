import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='app'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
