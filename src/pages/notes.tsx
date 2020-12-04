/** @jsxImportSource @emotion/react */
import {Flex} from 'src/components/base';
import {MainLayout} from 'src/components/layout';
import {PageTitle} from 'src/components/title';

export default function NotesPage(): JSX.Element {
  return (
    <MainLayout>
      <PageTitle heading='Notes' subheading='MY GROWING KNOWLEDGE BASE' />
      <Flex flow='column' css={{marginTop: '3.6rem'}}>
        <div>wow</div>
      </Flex>
    </MainLayout>
  );
}
