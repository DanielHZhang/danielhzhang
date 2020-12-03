import Head from 'next/head';
type Props = {
  description?: string;
};

export const Title = ({description}: Props): JSX.Element => (
  <Head>
    <title>Daniel Zhang{description ? ` | ${description}` : ''}</title>
  </Head>
);
