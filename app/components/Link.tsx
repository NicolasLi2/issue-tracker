import NextLink from 'next/link';
import { Link as RadixLink } from '@radix-ui/themes';

interface Props {
  href: string;
  children: string;
  className?: string;
}

export default function Link({ href, children, className }: Props) {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <RadixLink className={className}>{children}</RadixLink>
    </NextLink>
  );
}
