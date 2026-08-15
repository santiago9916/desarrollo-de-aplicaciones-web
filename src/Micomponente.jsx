const user={
    nombre:"oswaldo",
    apellido:"perez",
    Edad:99,
    avatar:"https://cdn-images-1.medium.com/max/1200/1*LoEp9-DPOrhVjg0Lv9-Gow.jpeg",
}

export default function Micomponente(){
    return(
        <div>
        <h1>hola {user.nombre} {user.apellido}</h1>
        <img src={user.avatar} alt=" "/>
        </div>
    )
}