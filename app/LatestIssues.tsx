import prisma from '@/prisma/client';
import { Avatar, Card, Flex, Heading, Table } from '@radix-ui/themes';
import Link from '@/app/components/Link';
import { IssueStatusBadge } from './components';

export default async function LatestIssues() {
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: 'desc' },
    take: 7,
    include: {
      assignedToUser: true,
    },
  });
  return (
    <Card>
      <Heading size={'4'} mb={'5'}>
        Latest Issues
      </Heading>
      <Table.Root>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Flex justify={'between'} align={'center'}>
                  <Flex direction={'column'} align={'start'} gap={'2'}>
                    <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                    <IssueStatusBadge status={issue.status} />
                  </Flex>
                  {issue.assignedToUserId && (
                    <Avatar
                      src={issue.assignedToUser!.image!}
                      fallback='?'
                      size={'2'}
                      radius='full'
                    />
                  )}
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
}
