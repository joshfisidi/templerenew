export default async function ProtocolDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <h1>Details about protocol {id}</h1>;
  }
  