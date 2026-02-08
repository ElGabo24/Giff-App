interface Props {
    title: string;
    descripcion?: string;
}

export const CustomHeader = ({title, descripcion}: Props) => {
    return (
        <div className="content-center">
            <h1>{ title }</h1>
            {descripcion && <p>{descripcion}</p>}
        </div>
    )
}
