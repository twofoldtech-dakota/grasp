import TradesList from '@/components/trades/TradesList';
import { getTrades } from 'utils/supabase-client';
import { Trade } from 'types';
import { GetStaticPropsResult } from 'next';
import ContentWrapper from '@/components/ui/ContentWrapper/ContentWrapper';
import Stats from '@/components/stats/Stats';
import SidebarLayout from '@/components/SidebarLayout';

interface Props {
    trades: Trade[];
}

export default function TradesPage({ trades }: Props) {
    const pageTitle = 'Trades';
    return (
        <SidebarLayout title={pageTitle}>
            <ContentWrapper title={pageTitle}>
                <Stats />
                <TradesList trades={trades} title="Recent Trades" />
            </ContentWrapper>
        </SidebarLayout>
    );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
    const trades = await getTrades();

    return {
        props: {
            trades
        }
    };
}
