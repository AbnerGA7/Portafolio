interface Props {
  className?: string;
}

const ExcelIcon: React.FC<Props> = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" width="128" height="128">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="#217346"></rect>
    <path fill="#FFFFFF" d="M7.5 7h2.3l2.2 3.4L14.2 7h2.3l-3.3 5 3.3 5h-2.3L12 13.6 9.8 17H7.5l3.3-5z"></path>
  </svg>
);

export { ExcelIcon };
