import Link from "next/link";

import MainLayout from "../components/layouts/MainLayout";
import DarkLayout from "../components/layouts/DarkLayout";

export default function AboutPage() {
    return (
        <>
            <h1>About Page</h1>
            <h1>
                Ir a <Link href="/">Home</Link>
            </h1>

            <div className="description">
                <p>
                    Get started by editing{' '}
                    <code className="code">pages/about.js</code>
                </p>
            </div>

        </>
    )
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}
