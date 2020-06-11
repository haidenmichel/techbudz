import wixUsersBackend from 'wix-users-backend';

export function myBackendFunction(email, password) {
  return wixUsersBackend.login(email, password)
    .then( (sessionToken) => {
      return {sessionToken, "approved": true};
    } )
    .catch( (error) => {
      return {"approved": false, "reason": error};
    } );
}