interface UserDetailProps {
    name: string;
    age: number;
    email?: string;
    isAdmin: boolean;
}


const UserDetail = ({ name, age, email, isAdmin}:UserDetailProps) => {
    return <div>
        <hr />
        <h1>Name : {name}</h1>
        <p>Age : {age}</p>
        <p>Email : {email}</p>
        <p>Admin : {isAdmin ? "Yes" : "No"}</p>
        <hr />
    </div>;
};
export default UserDetail;