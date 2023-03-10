// import Header from "../components/Header";
import { useRouter } from "next/router";
// import Footer from "../components/Footer";
export async function getServerSideProps({ query }) {
  const { id,seasonid } = query;
  const apiKey = "537a4a8b666eff5ba82510cb7241c3da";
  const res = await fetch(
    // `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    `https://api.themoviedb.org/3/tv/${id}/season/${seasonid}?${apiKey}&language=en-US`
  );
  const data = await res.json();
  if (res.ok) {
    return {
      props: { data },
    };
  }
}

function id({ data }) {
  console.log(data);
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="min-h-screen bg-slate-800 font-serif ">
      {/* <Header /> */}
      <h1 className="font-bold text-4xl text-slate-300 pl-20 pt-10 pb-3">{data.title}</h1>
      <p>
        <span className="t pl-20 text-slate-300 font-bold"> ⭐  {data.vote_average} |</span>
        <span className=" text-slate-300 font-bold"> {data.release_date} </span>
      </p>
        <p className="text-zinc-200 p-20 pt-6 pb-1">{data.overview}</p>
      <iframe
        className="aspect-square w-full p-20"
        src={"https://www.2embed.to/embed/tmdb/movie?id=" + id}
        frameborder="0"
      ></iframe>
      {/* <div className="pt-5 pb-5 bg-slate-900"><Footer/></div> */}
      
    </div>
  );
}

export default id;
