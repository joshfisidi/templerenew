export default function ProtocolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container">
      <div className="flex flex-col gap-8 py-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Health Protocols
          </h1>
          <p className="text-muted-foreground">
            Evidence-based natural healing protocols for various health conditions.
          </p>
        </div>
        {children}
      </div>
    </div>
  )
}
