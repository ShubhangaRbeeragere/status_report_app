// import {useState,useEffect} from 'react';
// import './m.css'
// import User from './Mitem';

// //get /////////////////////////////////
// const Apptest = () => {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     await fetch("http://localhost:8080/milestones/getMilestones")
//       .then((res) => res.json())
//       .then((data) => setUsers(data))
//       .catch((err) => {
//         console.log(err);
//       });
//   };

  
//   const onDelete = async (id) => {
//     await fetch(`http://localhost:8080/milestones/deleteM` ,{
//       method: "DELETE",
//       cache: "no-cache",
//       credentials: "same-origin",
//       headers: {
//         "Content-Type": "application/json",
       
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: "follow",
   

//     })
//       .then((res) => {
//         if (res.status !== 200) {
//           return;
//         } else {
//           setUsers(
//             users.filter((user) => {
//               return user.id !== id;
//             })
//           );
//         }
//       })
//       .catch((err) => {
//         console.log(users);
//         console.log(err);
//       });
//   };



//   return (
//     <div className="mtest">
      

//       <div>
//         {users.map((user) => (
//           <User
//             id={user.milestone_id}
//             key={user.id}
//             title={user.title}
//             content={user.content}
//             onDelete={onDelete}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Apptest;