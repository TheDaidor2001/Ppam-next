import Link from "next/link"

interface Props {
    children: React.ReactNode;
    classes: string;
    href: string
}


export const Cardindex = ({ children, classes, href }: Props) => {
    return (
        <Link
            href={href}
            className={`border-2 text-white flex flex-col items-center rounded-2xl py-10 px-5 min-h-72 ${classes}`}
        >
            {children}
        </Link>
    )
}
