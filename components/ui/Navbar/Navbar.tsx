import Link from 'next/link';

import Logo from 'components/icons/Logo';
import { useUser } from 'utils/useUser';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
import { useRouter } from 'next/router';
import ThemeChanger from '../Theme/ThemeChange';

const Navbar = () => {
    const { user } = useUser();
    const router = useRouter();

    return (
        <div className="navbar bg-base-300">

            <div className="navbar-start">
                <div className="dropdown">
                    <label className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    {user && (
                        <ul
                            tabIndex={0}
                            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link href="/trades">
                                    <a>Trades</a>
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
                <Link href="/">
                    <a
                        className="text-xl normal-case btn btn-ghost"
                        aria-label="Logo"
                    >
                        <Logo />
                    </a>
                </Link>
            </div>
            <div className="hidden navbar-center lg:flex">
                {user && (
                    <ul className="p-0 menu menu-horizontal">
                        <li>
                            <Link href="/trades">
                                <a>Trades</a>
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
            <div className="navbar-end">
                {user ? (
                    <ul className="p-0 menu menu-horizontal">
                        <li>
                            <div className="dropdown dropdown-end hover:cursor-default">
                                <label
                                    tabIndex={0}
                                    className="btn btn-ghost btn-circle avatar"
                                >
                                    <div className="rounded-full">
                                        <img src="https://api.lorem.space/image/face?hash=33791" />
                                    </div>
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                                >
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>Settings</a>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a
                                                onClick={async () => {
                                                    supabaseClient.auth.signOut();
                                                    router.push('/signin');
                                                }}
                                            >
                                                Logout
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <ThemeChanger />
                        </li>
                    </ul>
                ) : (
                    <ul className="p-0 menu menu-horizontal">
                        {router.pathname != '/signin' && (
                            <li className="self-center">
                                <Link href="/signin">
                                    <a>Login</a>
                                </Link>
                            </li>
                        )}
                        <li className="self-center">
                            <Link href="/pricing">
                                <a className="btn btn-secondary">Get started</a>
                            </Link>
                        </li>
                        <li className="self-center">
                          <ThemeChanger />
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Navbar;
