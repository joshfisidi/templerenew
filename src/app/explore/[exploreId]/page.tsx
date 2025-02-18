export default async function ExplorePage({
    params,
}: {
    params: Promise<{ exploreId: string }>;
}) {
    const exploreId = (await params).exploreId;
    return (
        <div>
            <h1>Explore</h1>
            <p>{exploreId}</p>
        </div>
    )
}
