import React, { useEffect, useState } from 'react';

export function GithubUser({ username }) {
   const [user, setUser] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      if (username) {
         setLoading(true);
         fetch(`https://api.github.com/users/${username}`)
            .then((res) => {
               if (!res.ok) {
                  throw new Error('User not found');
               }
               return res.json();
            })
            .then((json) => {
               setUser(json);
               setError(null);
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
      }
   }, [username]);

   return (
      <div>
         {loading && <div>Loading...</div>}
         {error && <div>{error.message}</div>}
         {user && (
            <div>
               <img src={user.avatar_url} alt={`${user.login}'s avatar`} style={{ width: 100, height: 100 }} />
               <div><strong>Login:</strong> {user.login}</div>
               <div><strong>Name:</strong> {user.name}</div>
            </div>
         )}
      </div>
   );
}