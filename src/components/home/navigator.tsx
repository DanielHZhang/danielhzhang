/** @jsxImportSource @emotion/react */

import {css} from '@emotion/react';
import {motion} from 'framer-motion';
import Link from 'next/link';
import {useState} from 'react';
import {Flex, Stack, Tooltip} from 'src/components/base';
import {HamburgerMenu} from 'src/components/hamburger';

type ItemData = {
  name: string;
  href: string;
};

const items: ItemData[] = [
  {name: 'About', href: '/about'},
  {name: 'Specializations', href: '/specialization'},
  {name: 'Portfolio', href: '/portfolio'},
  {name: 'Notes', href: '/notes'},
  {name: 'GitHub', href: 'https://github.com/DanielHZhang'},
  {name: 'LinkedIn', href: 'https://www.linkedin.com/in/danielhzhang/'},
  {name: 'Email', href: 'mailto:'},
  {name: 'Resume', href: '/resume'},
];

type ItemProps = {
  // name: string;
  href: string;
  children: string;
};

const PageMenuItem = ({href, children}: ItemProps): JSX.Element => {
  return (
    <Link href={href}>
      <motion.a
        href={href}
        whileHover={{scale: 1.1, rotateX: 10, rotateZ: 5, color: '#49C1F0'}}
        css={{cursor: 'pointer'}}
      >
        {children}
      </motion.a>
    </Link>
  );
};

export const PageNavigator = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      css={{position: 'fixed', top: '3.2rem', left: '3.2rem', display: 'flex', userSelect: 'none'}}
    >
      <HamburgerMenu open={open} onClick={() => setOpen(!open)} />
      {open && (
        <Stack as='ul' spacing='3.2rem' css={{marginLeft: '3.2rem'}}>
          {items.map((item, index) => (
            <PageMenuItem href={item.href} key={index}>
              {item.name}
            </PageMenuItem>
          ))}
        </Stack>
      )}
    </motion.div>
  );
};
