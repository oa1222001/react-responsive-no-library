import "./styles.css";
import Article from "../../components/article/Article";
import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import blog04 from "../../assets/blog04.png";
import blog05 from "../../assets/blog05.png";
const Blog = () => {
  return (
    <div className="blog section__padding" id="blog">
      <div className="blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="blog-container">
        <div className="blog-container_bigCard">
          <Article
            img={blog01}
            date="Sep 26, 2021"
            title="GPT-3 and Open AI is the future. Let us explore how it is"
          />
        </div>
        <div className="blog-container_smallCard">
          <Article
            img={blog02}
            date="Sep 26, 2021"
            title="GPT-3 and Open AI is the future. Let us explore how it is"
          />
          <Article
            img={blog03}
            date="Sep 26, 2021"
            title="GPT-3 and Open AI is the future. Let us explore how it is"
          />
          <Article
            img={blog04}
            date="Sep 26, 2021"
            title="GPT-3 and Open AI is the future. Let us explore how it is"
          />
          <Article
            img={blog05}
            date="Sep 26, 2021"
            title="GPT-3 and Open AI is the future. Let us explore how it is"
          />
        </div>
      </div>
    </div>
  );
};
export default Blog;
