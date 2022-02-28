import 'styles/main.css';
import 'styles/chrome-bug.css';
import { useEffect } from 'react';
import React from 'react';

import { UserProvider } from '@supabase/supabase-auth-helpers/react';
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';
import { AppProps } from 'next/app';
import { MyUserContextProvider } from 'utils/useUser';
import { ThemeProvider } from 'next-themes';

export default function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        document.body.classList?.remove('loading');
    }, []);

    return (
        <div>
            <UserProvider supabaseClient={supabaseClient}>
                <ThemeProvider>
                    <MyUserContextProvider supabaseClient={supabaseClient}>
                        <Component {...pageProps} />
                    </MyUserContextProvider>
                </ThemeProvider>
            </UserProvider>
        </div>
    );
}
