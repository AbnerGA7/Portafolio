interface Props {
  className?: string;
}

const PdfIcon: React.FC<Props> = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" width="128" height="128">
    <path fill="#E5252A" d="M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path>
    <path fill="#FFFFFF" fill-opacity=".55" d="M14 2v6h6z"></path>
    <text x="12" y="18" fill="#FFFFFF" font-family="sans-serif" font-size="6" font-weight="700" text-anchor="middle">PDF</text>
  </svg>
);

export { PdfIcon };
