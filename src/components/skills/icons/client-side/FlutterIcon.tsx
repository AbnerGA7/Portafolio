interface Props {
  className?: string;
}

const FlutterIcon: React.FC<Props> = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" width="128" height="128">
    <path fill="#42A5F5" d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"></path>
  </svg>
);

export { FlutterIcon };
