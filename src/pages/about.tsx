/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import {Flex, Stack} from 'src/components/base';
import {MainLayout} from 'src/components/layout';
import {PageTitle, HeadTitle} from 'src/components/title';

export default function AboutPage(): JSX.Element {
  return (
    <MainLayout>
      <HeadTitle description='About' />
      <Flex flow='column' crossAxis='center'>
        <Flex flow='column' css={{maxWidth: '72rem'}}>
          <PageTitle heading='About' subheading='WHO I AM' />
          <Stack flow='column' spacing='1.6rem' css={{fontSize: '2rem', marginTop: '3.6rem'}}>
            <p>Hey there! I'm Daniel, a software engineer from Toronto, Canada.</p>
            <p>
              My experience in software development spans across the stack, having built substantial
              frontend and backend web applications. I focus on writing maintainable and scalable
              code that meets project requirements.
            </p>
            <p>
              I deeply enjoy learning, creating, and growing with diverse people and teams. I owe a
              lot of my knowledge to the open source community and adopting an accessible,
              human-centric, problem-oriented approach to development.
            </p>
            <p>
              My goal as a software engineer is to build and empower others to build a healthier,
              more productive, and more sustainable future.
            </p>
            <p>
              My goal as a founder and entrepreneur is to leverage the unparalleled opportunities
              with new technologies to create a better world for everyone.
            </p>
            <p>
              <span>{"Here's my "}</span>
              <Link href='/'>
                <a>
                  <strong>resume</strong>
                </a>
              </Link>
              <span>{' and '}</span>
              <Link href='/'>
                <a>
                  <strong>email</strong>
                </a>
              </Link>
              <span>{" if you're interested in working with me."}</span>
            </p>
          </Stack>
        </Flex>
      </Flex>
    </MainLayout>
  );
}
