async function fetchUSer(id:string){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if (!res.ok) {
        return null;
    }
    const user = await res.json()
    return user
}



export default async function UserPage({
    params,
}:{
    params: Promise<{ userId:string}>
}) {
    const { userId } = await params;
    const user = await fetchUSer(userId) 

    return (
        <div>
            <h1>{user.name}</h1>
            <p><strong>Email:</strong>{user.email}</p>
            <p><strong>Phone:</strong>{user.phone}</p>
            <p><strong>Website:</strong>{user.website}</p>
            <p><strong>Company:</strong>{user.company.name}</p>
            <p><strong>Address:</strong>{user.address.city}</p>
        </div>
    )
}