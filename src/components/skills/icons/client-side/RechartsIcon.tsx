interface Props {
  className?: string;
}

const RechartsIcon: React.FC<Props> = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" width="128" height="128">
    <rect x="3" y="12" width="4" height="9" rx="1" fill="#22B5BF"></rect>
    <rect x="10" y="7" width="4" height="14" rx="1" fill="#8884D8"></rect>
    <rect x="17" y="3" width="4" height="18" rx="1" fill="#82CA9D"></rect>
  </svg>
);

export { RechartsIcon };
