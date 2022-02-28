import { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { PageMeta } from '../types';
import { SidebarHeader } from '../components/ui/Sidebar/SidebarHeader';
import { SidebarLink } from '../components/ui/Sidebar/SidebarLink';
import Footer from './ui/Footer';
import router from 'next/router';

type Props = {
    children: ReactNode;
    meta?: PageMeta;
    title: string;
};

export default function SidebarLayout({
    children,
    title,
    meta: pageMeta
}: Props) {
    const meta = {
        title: title,
        description: 'Crypto trading journal that helps you find your edge',
        cardImage: '/og.png',
        ...pageMeta
    };

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <link href="/favicon.ico" rel="shortcut icon" />
                <meta content={meta.description} name="description" />
                <meta
                    property="og:url"
                    //TODO
                    // content={`https://app.graspcrpyto.io${router.asPath}`}
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.cardImage} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@vercel" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.cardImage} />
            </Head>
            <SidebarHeader
                title={title}
                topLeftLinks={
                    <>
                        <Link href="/">
                            <a>
                                <SidebarLink>Dashboard</SidebarLink>
                            </a>
                        </Link>

                        <Link href="/trades">
                            <a>
                                <SidebarLink>Trades</SidebarLink>
                            </a>
                        </Link>
                    </>
                }
                bottomLeftLinks={<></>}
                topNavContent={
                    <>
                        <Link href="/">
                            <a>
                                <button className="btn">Need Help?</button>
                            </a>
                        </Link>
                    </>
                }
            >
                <main id="skip">{children}</main>
            </SidebarHeader>
            <Footer />
        </>
    );
}
