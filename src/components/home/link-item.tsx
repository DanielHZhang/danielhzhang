/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import {Flex} from 'src/components/base';
import {Icon, IconType} from 'src/components/icons';

type Props = {
  href: string;
  icon: IconType;
  children: string;
};

export const LinkItem = ({href, icon, children}: Props): JSX.Element => {
  return (
    <Flex mainAxis='flex-end'>
      <Link href={href}>
        <a>
          <Flex>
            <span css={{marginRight: '1rem'}}>{children}</span>
            <Icon type={icon} size='2.4rem' />
          </Flex>
        </a>
      </Link>
    </Flex>
  );
};
