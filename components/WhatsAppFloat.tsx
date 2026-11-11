import { waLink } from "@/lib/data";

export default function WhatsAppFloat() {
  return (
    <a className="group fixed bottom-5 right-5 z-[60]" href={waLink("Hello VaaSaa Interiors!")} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" />
      <span className="relative grid size-14 place-items-center rounded-full bg-[#25D366] shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12">
        <svg viewBox="0 0 32 32" width="30" height="30" fill="#fff" aria-hidden>
          <path d="M16 3C9 3 3.3 8.600 3.300 15.500c0 2.400.7 4.600 1.900 6.500L3 29l7.200-1.900c1.800 1 3.800 1.500 5.800 1.500 7 0 12.700-5.600 12.700-12.500S23 3 16 3zm0 22.900c-1.800 0-3.600-.5-5.100-1.400l-.4-.2-4.300 1.100 1.200-4.100-.3-.4a10 10 0 0 1-1.600-5.400C5.500 9.900 10.200 5.400 16 5.400s10.500 4.500 10.500 10.100S21.800 25.900 16 25.900zm5.800-7.500c-.3-.2-1.900-.9-2.200-1s-.5-.2-.7.200-.8 1-1 1.200-.4.200-.7.100a8.500 8.500 0 0 1-4.200-3.700c-.3-.6.300-.5.900-1.700.1-.2 0-.4 0-.5l-1-2.300c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.100-.9.400s-1.200 1.200-1.200 2.800 1.200 3.300 1.400 3.500 2.400 3.700 5.900 5.100c2.200.9 3 .9 4 .8.600-.1 1.900-.8 2.200-1.500s.3-1.400.2-1.500-.3-.2-.6-.3z" />
        </svg>
      </span>
    </a>
  );
}
