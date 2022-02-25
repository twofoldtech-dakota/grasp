import TradesList from '@/components/trades/TradesList';
import { getTrades } from 'utils/supabase-client';
import { Trade } from 'types';
import { GetStaticPropsResult } from 'next';
import ContentWrapper from '@/components/ui/ContentWrapper/ContentWrapper';
import Stats from '@/components/stats/Stats';

interface Props {
  trades: Trade[];
}

export default function TradesPage({ trades }: Props) {
  return (
    <ContentWrapper title='Dashboard'>
      <Stats />
      <TradesList trades={trades} title="Recent Trades"/>
    </ContentWrapper>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const trades = await getTrades();

  return {
    props: {
      trades
    },
  };
}
