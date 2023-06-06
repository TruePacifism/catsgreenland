// import React, { useState, useEffect } from 'react';
// import VK, { Auth } from 'react-vk';
// import { useAuth } from 'react-auth';

// const VkAuthGPT = () => {
//   const { signIn } = useAuth();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     if (user) {
//       signIn(user);
//     }
//   }, [user, signIn]);

//   const handleVkAuth = response => {
//     if (response.session) {
//       VK.Api.call('users.get', { user_ids: response.session.mid }, result => {
//         const userData = {
//           id: response.session.mid,
//           name: `${result.response[0].first_name} ${result.response[0].last_name}`,
//           photo: result.response[0].photo_100,
//           provider: 'vk',
//         };
//         setUser(userData);
//       });
//     }
//   };

//   return (
//     <div>
//       <VK apiId={YOUR_APP_ID}>
//         <Auth onAuth={handleVkAuth} />
//       </VK>
//     </div>
//   );
// };

// export default VkAuthGPT;
