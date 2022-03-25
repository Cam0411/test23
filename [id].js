async function load(fetch,params){
   const res = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=d446dfce025a6b8b811140d296404e39`
   )
   const data = await res.json()
   console.log(data);
}
load()