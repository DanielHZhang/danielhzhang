import { Icon, IconType } from '@/components/icons';
import Link from 'next/link';

type Props = {
  align?: 'left' | 'right';
  title: string;
  href: string;
  icon: IconType;
};

export const LinkItem = ({ align, href, icon, title }: Props): JSX.Element => {
  return (
    <div className={`flex ${align === 'right' ? 'justify-end' : 'justify-start'} inline-flex`}>
      <Link href={href}>
        <a className="select-none">
          <div className="flex items-center">
            <span className={`text-da-c9-a6 ${align === 'right' ? 'mr-4 order-first' : 'ml-4 order-last'}`}>
              {title}
            </span>
            <span className={`${align === 'right' ? 'order-last' : 'order-first'}`}>
              <Icon className="icon-sm" type={icon} />
            </span>
          </div>
        </a>
      </Link>
    </div>
    // <Flex inline={true} mainAxis={align === 'right' ? 'flex-end' : 'flex-start'}>
    //   <Link href={href} passHref={true}>
    //     <Anchor css={{ userSelect: 'none' }}>
    //       <Flex crossAxis="center">
    //         <span
    //           css={{
    //             margin: align === 'right' ? '0 1rem 0 0' : '0 0 0 1rem',
    //             order: align === 'right' ? 0 : 1,
    //             color: '#dac9a6',
    //           }}
    //         >
    //           {title}
    //         </span>
    //         <span css={{ order: align === 'right' ? 1 : 0 }}>
    //           <Icon type={icon} size="2.4rem" />
    //         </span>
    //       </Flex>
    //     </Anchor>
    //   </Link>
    // </Flex>
  );
};
