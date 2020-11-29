/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import {Anchor, Flex} from 'src/components/base';
import {Icon, IconType} from 'src/components/icons';

type Props = {
  align: 'left' | 'right';
  href: string;
  icon: IconType;
  children: string;
};

export const LinkItem = ({align, href, icon, children}: Props): JSX.Element => {
  return (
    <Flex mainAxis={align === 'right' ? 'flex-end' : 'flex-start'}>
      <Link href={href}>
        <Anchor href={href}>
          <Flex crossAxis='center'>
            <span
              css={{
                margin: align === 'right' ? '0 1rem 0 0' : '0 0 0 1rem',
                order: align === 'right' ? 0 : 1,
              }}
            >
              {children}
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
