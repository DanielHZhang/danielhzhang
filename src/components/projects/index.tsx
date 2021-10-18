import {Flex, Heading, LinkBox, LinkOverlay, Tag, Text} from '@chakra-ui/react';
import NextLink from 'next/link';
import {WaterfallGrid} from 'src/components/common/waterfall';
import {Icon} from 'src/components/icons';
import {PageTitle} from 'src/components/title';
import {ProjectData, projects} from 'src/content';

const ProjectItem = (props: ProjectData): JSX.Element => {
  return (
    <LinkBox as='article'>
      <Flex
        direction='column'
        color='white'
        borderWidth='2px'
        borderColor='gold'
        borderRadius='12px'
        padding='2rem'
      >
        <Flex justify='space-between'>
          <Flex>
            <Heading fontSize='2.2rem' lineHeight='2.2rem' color='gold' mr='0.8rem' mt='2px'>
              <NextLink href={props.url || '#'} passHref={true}>
                <LinkOverlay>{props.title}</LinkOverlay>
              </NextLink>
            </Heading>
            {props.url?.startsWith('https://github') ? (
              <Icon type='github' size='2.4rem' />
            ) : (
              <Icon type='link' size='2.4rem' />
            )}
          </Flex>
          <Icon type={props.language} size='2.4rem' />
        </Flex>
        <Text mt='0.8rem' color='whiteAlpha.700'>
          {props.description}
        </Text>
        <Flex direction='row' wrap='wrap' align='flex-start'>
          {props.tags.map((value, index) => (
            <Tag
              key={index}
              size='lg'
              colorScheme='blue'
              py='0.4rem'
              mt='0.8rem'
              mr='0.8rem'
              fontSize='1.6rem'
            >
              {value}
            </Tag>
          ))}
        </Flex>
      </Flex>
    </LinkBox>
  );
};

export const Projects = (): JSX.Element => {
  return (
    <Flex direction='column' mb='4rem'>
      <PageTitle heading='Projects' subheading='STUFF I HAVE WORKED ON' />
      <WaterfallGrid items={projects}>
        {(data, index) => <ProjectItem key={index} {...data} />}
      </WaterfallGrid>
    </Flex>
  );
};
