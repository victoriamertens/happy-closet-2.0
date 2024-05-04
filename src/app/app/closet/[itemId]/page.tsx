import { PrismaClient } from "@prisma/client";
import { MainBtnStyling } from "@/app/_lib/TailwindWrappers/MainBtnStyling";
import { useUser, currentUser } from "@clerk/nextjs";
import Link from "next/link";
import DeleteModal from "../../@/Modals/DeleteModal";

type SearchParamProps = {
  show: Record<string, string> | null | undefined;
};

export default async function Item({
  params,
  searchParams,
}: {
  params: { itemId: number; show: boolean };
  searchParams: SearchParamProps;
}) {
  const prisma = new PrismaClient();
  const user = await currentUser();
  const show = searchParams.show;
  const modalURL = "/app/closet/" + params.itemId + "/?show=true";
  console.log("PARAMS:", show, searchParams, params.itemId);

  if (user) {
    const singleItemDetails = await prisma.items.findFirst({
      where: { user_id: user.id, id: Number(params.itemId) },
    });

    return (
      <div>
        <h1>{singleItemDetails?.item_name}</h1>

        <MainBtnStyling btnType="main" buttonText="Edit" />
        <Link href={modalURL}>
          <MainBtnStyling btnType="secondary" buttonText="Delete" />
        </Link>
        {show && <DeleteModal itemId={params.itemId} />}
      </div>
    );
  }
}
