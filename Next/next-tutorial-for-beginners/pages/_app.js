import Link from 'next/link'
import { useRouter } from 'next/router'
import '../styles/global.css'

export default function App({ Component, pageProps }) {

    const router = useRouter()

    function activeOnClicked (path) {
        return router.pathname === path ? 'active' : ''
    }

    return <>
        <div>
            <h1>Blog</h1>
            <nav className='header-nav'>
                <ul>
                    <li>
                        <Link className={activeOnClicked('/')} href='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={activeOnClicked('/about')} href='/about'>About</Link>
                    </li>
                    <li>
                        <Link className={activeOnClicked('/blog')} href='/blog'>Blog</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <Component {...pageProps} />
        <p>Footer</p>
    </>
}