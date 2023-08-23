import "./ShowUsers.css";

const ShowUsers = (props) => {
  let i = 0;
  return (
    <div className="users">
      <ul className="users ul">
        {props.users.map((user) => (
          <li className="users li" key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowUsers;
