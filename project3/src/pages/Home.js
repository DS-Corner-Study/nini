import { useSearchParams } from "react-router-dom";

const Home = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("sort"));

    return <div>Home 페이지입니다</div>;
};
export default Home;