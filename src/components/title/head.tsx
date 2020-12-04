import Head from 'next/head';

type Props = {
  description?: string;
};

export const HeadTitle = ({description}: Props): JSX.Element => (
  <Head>
    <title>Daniel Zhang{description ? ` | ${description}` : ''}</title>
  </Head>
);
