import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const MyFavorites = () => {
  const [favorites, setFavorite] = useState();
  const { user } = useContext(AuthContext);
  const { email } = user.auth.currentUser;
  // useEffect(() => {
  //   fetch(`https://orchid-server.vercel.app/favorite?email=${email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFavorite(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return <div>
  
  </div>;
};

export default MyFavorites;
