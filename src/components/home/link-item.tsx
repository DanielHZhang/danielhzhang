/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import {Anchor, Flex} from 'src/components/base';
import {Icon, IconType} from 'src/components/icons';

type Props = {
  align?: 'left' | 'right';
  title: string;
  href: string;
  icon: IconType;
};

export const LinkItem = ({align, href, icon, title}: Props): JSX.Element => {
  return (
    <Flex inline={true} mainAxis={align === 'right' ? 'flex-end' : 'flex-start'}>
      <Link href={href} passHref={true}>
        <Anchor css={{userSelect: 'none'}}>
          <Flex crossAxis='center'>
            <span
              css={{
                margin: align === 'right' ? '0 1rem 0 0' : '0 0 0 1rem',
                order: align === 'right' ? 0 : 1,
                color: '#dac9a6',
              }}
            >
              {title}
            </span>
            <span css={{order: align === 'right' ? 1 : 0}}>
              <Icon type={icon} size='2.4rem' />
            </span>
          </Flex>
        </Anchor>
      </Link>
    </Flex>
  );
};
