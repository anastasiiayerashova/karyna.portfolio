import Header from "./Header/Header.jsx"
import { Suspense } from "react"

const SharedLayout = ({children}) => {
    return (
        <>
            <header>
                <Header/>
            </header>
            <main>
                <Suspense fallback={null}>{children}</Suspense>
            </main>
        </>

    )
}

export default SharedLayout