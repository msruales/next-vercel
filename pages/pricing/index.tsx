import Link from "next/link";

import MainLayout from "../../components/layouts/MainLayout";
import DarkLayout from "../../components/layouts/DarkLayout";

export default function PricingPage() {
    return (
        <MainLayout>
            <h1>Pricing Page</h1>
            <h1>
                Ir a <Link href="/">Home</Link>
            </h1>

            <div className="description">
                <p>
                    Get started by editing{' '}
                    <code className="code">pages/pricing.js</code>
                </p>
            </div>

        </MainLayout>
    )





}

