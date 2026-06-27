interface Props {

    title:string;

    links:{
        label:string;
        href?:string;
    }[];

}

const FooterColumn=({
    title,
    links
}:Props)=>{

    return(

        <div>

            <h3 className="mb-5 font-bold">

                {title}

            </h3>

            <div className="space-y-3">

                {links.map(link=>(

                    <a

                        key={link.label}

                        href={link.href}

                        className="block text-slate-400 transition hover:text-cyan-400"

                    >

                        {link.label}

                    </a>

                ))}

            </div>

        </div>

    )

}

export default FooterColumn;