import Link from "next/link";

interface Props {
    children: React.ReactNode;
    href: string;
}

export const BtnAcions = ({ children, href }: Props) => {
    return (
        <Link href={href} className="border border-cyan-500 rounded-2xl px-3 py-2 text-cyan-500 flex items-center gap-1 hover:bg-cyan-500 hover:text-white transition-colors">
            {children}
        </Link>
    )
}
