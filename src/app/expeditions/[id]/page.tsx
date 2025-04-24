interface Props {
  params: Promise<{ id: string }>;
}

const ExpeditionPage = async ({ params }: Props) => {
  const { id } = await params;
  return <section>{id}</section>;
};

export default ExpeditionPage;
