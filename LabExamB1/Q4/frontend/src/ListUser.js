import React, { useEffect, useState } from "react";
import axios from "axios";
export const ListUser = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const result = axios.get("http://localhost:5000/users");
    result.then((data) => {
      setUser([...data.data]);
    });
  }, []);

  console.log(user);
  return (
    <div>
      <table>
        <thead>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Addrrss</td>
          <td>Pincode</td>
          <td>Action </td> 
        </thead>
<tbody>
{user.map((d) => {
          <tr>
            <td>{d.fname}</td>
          </tr>;
        })}
</tbody>
        
      </table>
    </div>
  );
};
