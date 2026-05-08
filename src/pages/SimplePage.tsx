import { PageHeader } from "@/components/portfolio/PageHeader";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  body?: React.ReactNode;
  bullets?: string[];
};

const SimplePage = ({ eyebrow, title, description, body, bullets }: Props) => (
  <div>
    <PageHeader eyebrow={eyebrow} title={title} description={description} />
    {body && <div className="portfolio-card prose prose-sm max-w-none leading-relaxed text-muted-foreground">{body}</div>}
    {bullets && (
      <ul className="mt-4 space-y-3">
        {bullets.map((b, i) => (
          <li key={i} className="portfolio-card flex items-start gap-3">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
            <span className="text-foreground">{b}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default SimplePage;
