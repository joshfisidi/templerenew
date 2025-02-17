export default function Template({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <div>Template</div>;
  }
  
  
  