import { Button } from "@radix-ui/themes";
import Link from "next/link";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button color="red">
      {/* <Pencil2Icon /> */}
      {/* <Link href={`/issues/${issueId}/edit`}>edit issue</Link> */}
      delete issue
    </Button>
  );
};

export default DeleteIssueButton;
