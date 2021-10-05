/** @jsxImportSource @emotion/react */

import {AnimatePresence, motion, Variants} from 'framer-motion';
import Link from 'next/link';
import {useState} from 'react';
import {Stack} from 'src/components/base';
import {HamburgerMenu} from 'src/components/navigator/hamburger';

type ItemData = {
  name: string;
  href: string;
};

const items: ItemData[] = [
  {name: 'About', href: '/about'},
  {name: 'Specializations', href: '/skills'},
  {name: 'Portfolio', href: '/portfolio'},
  {name: 'Notes', href: '/notes'},
  {name: 'GitHub', href: 'https://github.com/DanielHZhang'},
  {name: 'LinkedIn', href: 'https://www.linkedin.com/in/danielhzhang/'},
  {name: 'Email', href: 'mailto:'},
  {name: 'Resume', href: '/resume'},
];

const parentVariants: Variants = {
  initial: {opacity: 0},
  animate: {opacity: 1, transition: {staggerChildren: 0.1, stiffness: 400, damping: 100}},
  exit: {transition: {staggerChildren: 0.05, stiffness: 400, damping: 100}},
};

const childVariants: Variants = {
  initial: {x: -40, opacity: 0},
  animate: {x: 0, opacity: 1},
  exit: {x: -40, opacity: 0},
};

type ItemProps = {
  href: string;
  children: string;
};

const PageMenuItem = ({href, children}: ItemProps): JSX.Element => {
  return (
    <Link href={href}>
      <motion.a
        href={href}
        variants={childVariants}
        whileHover={{scale: 1.1, rotateX: 10, rotateZ: 5, color: '#49C1F0'}}
        css={{cursor: 'pointer', fontWeight: 600}}
      >
        {children}
      </motion.a>
    </Link>
  );
};

type Props = {
  initial?: boolean;
};

export const PageNavigator = ({initial = false}: Props): JSX.Element => {
  const [open, setOpen] = useState(initial);

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      css={{position: 'fixed', top: '3.2rem', left: '3.2rem', display: 'flex', userSelect: 'none'}}
    >
      <HamburgerMenu open={open} onClick={() => setOpen(!open)} />
      <AnimatePresence exitBeforeEnter={true}>
        {open && (
          <motion.div initial='initial' animate='animate' exit='exit' variants={parentVariants}>
            <Stack as='ul' spacing='3.2rem' css={{marginLeft: '3.2rem'}}>
              {items.map((item, index) => (
                <PageMenuItem key={index} href={item.href}>
                  {item.name}
                </PageMenuItem>
              ))}
            </Stack>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
