const PATHS: Record<string, React.ReactNode> = {
  store: <><path d="M3 9l1.5-5h15L21 9" /><path d="M4 9v11h16V9" /><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" /><path d="M10 20v-6h4v6" /></>,
  tools: <><path d="M14.7 6.3a4 4 0 0 0-5.4 5.1L3 17.700 6.300 21l6.300-6.300a4 4 0 0 0 5.100-5.400l-2.600 2.600-2.400-.6-.6-2.400z" /></>,
  tag: <><path d="M20.600 13.400l-7.200 7.200a2 2 0 0 1-2.800 0L3 13V3h10l7.600 7.600a2 2 0 0 1 0 2.800z" /><circle cx="7.500" cy="7.500" r="1.500" /></>,
  palette: <><path d="M12 3a9 9 0 1 0 0 18c1.100 0 1.800-.9 1.500-1.900-.3-1 .4-2.100 1.500-2.100H17a4 4 0 0 0 4-4c0-5-4-10-9-10z" /><circle cx="7.500" cy="11" r="1" /><circle cx="10" cy="7" r="1" /><circle cx="15" cy="7" r="1" /></>,
  cart: <><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.700 13.400a2 2 0 0 0 2 1.600h9.700a2 2 0 0 0 2-1.600L23 6H6" /></>,
  phone: <path d="M22 16.900v3a2 2 0 0 1-2.200 2 19.800 19.800 0 0 1-8.600-3.100 19.500 19.500 0 0 1-6-6A19.800 19.800 0 0 1 2.100 4.200 2 2 0 0 1 4.100 2h3a2 2 0 0 1 2 1.700c.1 1 .4 1.900.7 2.800a2 2 0 0 1-.5 2.100L8.100 9.900a16 16 0 0 0 6 6l1.300-1.300a2 2 0 0 1 2.100-.4c.9.300 1.800.6 2.800.7a2 2 0 0 1 1.700 2z" />,
  truck: <><path d="M1 3h15v13H1z" /><path d="M16 8h4l3 3v5h-7z" /><circle cx="5.500" cy="18.500" r="2.500" /><circle cx="18.500" cy="18.500" r="2.500" /></>,
  check: <path d="M20 6L9 17l-5-5" />,
};

export default function Icon({ name, className = "size-6" }: { name: keyof typeof PATHS | string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {PATHS[name]}
    </svg>
  );
}
