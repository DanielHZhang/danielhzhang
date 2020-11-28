/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import {ReactNode} from 'react';
import {Flex} from 'src/components/base';
import {Icon} from 'src/components/icons';

type Props = {
  href: string;
  icon: string | ReactNode;
  children: string;
};

export const LinkItem = ({href, icon, children}: Props): JSX.Element => {
  return (
    <Flex mainAxis='flex-end'>
      <Link href={href}>
        <a>
          <Flex>
            <span css={{marginRight: '1rem'}}>{children}</span>
            {typeof icon === 'string' ? <Icon type={icon} size='2.4rem' /> : icon}
          </Flex>
        </a>
      </Link>
    </Flex>
  );
};
