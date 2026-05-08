export const PageHeader = ({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) => (
  <div className="mb-8 border-b border-border pb-6">
    <p className="text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
    <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h1>
    {description && <p className="mt-3 max-w-2xl text-muted-foreground">{description}</p>}
  </div>
);
