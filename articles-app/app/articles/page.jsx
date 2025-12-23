function SideBar({name, age}) {
    return <h1>Hola {name} y tengo { parseInt(age) } </h1>;
}

export default function Page() {
    return <SideBar name="Adan" age="17" />;

} 