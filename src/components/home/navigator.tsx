/** @jsxImportSource @emotion/react */

import {css} from '@emotion/react';
import {motion} from 'framer-motion';
import Link from 'next/link';
import {useState} from 'react';
import {Flex, Stack, Tooltip} from 'src/components/base';
import {HamburgerMenu} from 'src/components/hamburger';

const items = [
  'About',
  'Specializations',
  'Portfolio',
  'Notes',
  'Github',
  'LinkedIn',
  'Email',
  'Resume',
];

type ItemProps = {
  // name: string;
  href: string;
  children: string;
};

const PageMenuItem = (props: ItemProps): JSX.Element => {
  return (
    <Link href={props.href}>
      <motion.a whileHover={{scale: 1.1, rotateX: 10, rotateZ: 5}} css={{cursor: 'pointer'}}>
        <div>{props.children}</div>
      </motion.a>
    </Link>
  );
};

export const PageNavigator = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <Flex css={{position: 'fixed', top: '3.2rem', left: '3.2rem'}}>
      <HamburgerMenu onClick={() => setOpen(!open)} />
      {open && (
        <Stack as='ul' spacing='3.2rem' css={{marginLeft: '3.2rem'}}>
          {items.map((item, index) => (
            <PageMenuItem href={item} key={index}>
              {item}
            </PageMenuItem>
          ))}
        </Stack>
      )}
    </Flex>
  );
};
