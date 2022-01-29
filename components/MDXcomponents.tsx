import { ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/react';
import { FancyLink } from 'components/FancyLink';
import Image from 'next/image';

export const MDXcomponents = {
  Image: Image,
  a: (props: any) => <FancyLink {...props} color="teal.500" />,
  h1: (props: any) => (
    <Text my={3} as="h1" fontSize="4xl" {...props}>
      {props.children}
    </Text>
  ),
  h2: (props: any) => (
    <Text my={3} as="h2" fontSize="3xl" {...props}>
      {props.children}
    </Text>
  ),
  h3: (props: any) => (
    <Text my={3} as="h3" fontSize="2xl" {...props}>
      {props.children}
    </Text>
  ),
  h4: (props: any) => (
    <Text my={3} as="h4" fontSize="xl" {...props}>
      {props.children}
    </Text>
  ),
  h5: (props: any) => (
    <Text my={3} as="h5" fontSize="l" {...props}>
      {props.children}
    </Text>
  ),
  h6: (props: any) => (
    <Text my={3} as="h6" fontSize="m" {...props}>
      {props.children}
    </Text>
  ),

  p: (props: any) => (
    <Text my={3} {...props}>
      {props.children}
    </Text>
  ),
  li: (props: any) => {
    return <ListItem {...props}>{props.children}</ListItem>;
  },
  ul: (props: any) => {
    return (
      <UnorderedList pl={4} {...props}>
        {props.children}
      </UnorderedList>
    );
  },
  ol: (props: any) => {
    return (
      <OrderedList pl={4} {...props}>
        {props.children}
      </OrderedList>
    );
  },
};
