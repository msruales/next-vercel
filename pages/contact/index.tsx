
import Link from "next/link";
import MainLayout from "../../components/layouts/MainLayout";

export const ContactPage = () => {
    return (
        <MainLayout>
            <h1>Contact Page</h1>
            <h1>
                Ir a <Link href="/">Home</Link>
            </h1>

            <div className='description'>
                <p>
                    Get started by editing{' '}
                    <code className='code'>pages/contact.js</code>
                </p>
            </div>
        </MainLayout>
    );
};

export default ContactPage;
