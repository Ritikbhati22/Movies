import Header from "../components/Header";
import Link from "next/link";
import Footer from "../components/Footer";
import Pagination from "../components/pagination";
export async function getStaticProps() {
  const res = await fetch(
    "https://api.themoviedb.org/3/tv/popular?api_key=537a4a8b666eff5ba82510cb7241c3da&language=en-US=&page=1"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
function index({ data }) {
  return (
    <div className="min-h-screen bg-slate-800 flex-row-reverse">
      <Header />
      {data.results.map((element) => {
        return (
          <div className="inline-block ml-10 mr-4 pt-5">
            <Link href={"shows/seasons/" + element.id}>
              <img
                key={element.id}
                src={"https://image.tmdb.org/t/p/w500" + element.poster_path}
                className="h-72 w-50 rounded-lg text-justify pl-3"
              />
            </Link>
          </div>
        );
      })}

      <div className="pt-5">
        <Pagination/>
        <Footer />
      </div>
    </div>
  );
}

export default index;
