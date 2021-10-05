/** @jsxImportSource @emotion/react */

import {Flex} from 'src/components/base';
import {Hanzi} from 'src/components/home';

export const Logo = (): JSX.Element => {
  return (
    <Flex css={{height: '10rem', border: '4px solid white'}}>
      <div
        css={{
          fontFamily: 'Manrope',
          fontSize: '3.2rem',
          lineHeight: '3.2rem',
        }}
      >
        <div>DANIEL</div>
        <div>ZHANG</div>
        <Flex>
          <Hanzi type='zhang' size='3.6rem' />
          <Hanzi type='hai' size='3.6rem' />
          <Hanzi type='yao' size='3.6rem' />
        </Flex>
      </div>
      {/* <div>
        <Hanzi type='zhang' size={4} />
        <Hanzi type='hai' size={4} />
        <Hanzi type='yao' size={4} />
      </div> */}
    </Flex>
  );
};
