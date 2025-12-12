const m={"https://":"h~","http://":"p~","www.":"w~",".com":".c",".org":".o",".net":".n"},
n=u=>u.trim().replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/\/+$/,"").toLowerCase(),
e=u=>btoa(n(u).replace(/https?:\/\/|www\.|\.com|\.org|\.net/g,k=>m[k])).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),
d=s=>{
 let u=atob(s.replace(/-/g,"+").replace(/_/g,"/"));
 for(const[k,v]of Object.entries(m))u=u.replaceAll(v,k);
 return/^https?:\/\//.test(u)?u:"https://"+u;
};
(()=>{const c=new URLSearchParams(location.search).get("c");if(c)location.replace(d(c));})();
