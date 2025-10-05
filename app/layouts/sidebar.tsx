type Props = {
    className: string;
}

export default function Sidebar({className}: Props) {
    return (
        <div className={className}>
            <h1>Ini Sidebar</h1>
        </div>
    )
}