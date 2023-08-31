// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
const client_id = "56b3833f4f404d4baa4f87d8e09e478b";

const redirect_url = "http://localhost:3000/";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];


export const getTokenFromUrl=  ()=>{
  return window.location.hash.substring(1).split("&").reduce((initial,item)=>{
    let parts =item.split("=");
    initial[parts[0]]=decodeURIComponent(parts[1])

    return initial
  
  } ,{})
}
export const loginUrl = `${authEndpoint}?client_id=${client_id}&redirect_uri=${redirect_url}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
