import Footer from "../components/footer";
import Header from "../components/header"
import { AllArticles, AllContent, ArticleContent, Main, MainContent, RelevantArticle } from "../styles/Style";



const Home = () => {
    return (
        <>
        <Main>
            <AllContent>
                <MainContent>
                    <Header/>
                    <ArticleContent>
                        <RelevantArticle>Her skal den relevante artikkelen ligge</RelevantArticle>
                        <AllArticles>Her skal alle artikler ligge</AllArticles>
                    </ArticleContent>
                    <Footer/>
                </MainContent>
            </AllContent>
        </Main>
        </>
    );
};

export default Home;