/** @jsxImportSource @emotion/react */
import {Flex} from 'src/components/base';
import {Hanzi} from 'src/components/home/hanzi';

export const HanziHero = (): JSX.Element => {
  return (
    <Flex flow='column'>
      <Hanzi type='zhang' />
      <Hanzi type='hai' />
      <Hanzi type='yao' />
    </Flex>
  );
};
