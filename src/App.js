import './App.css';
import MainLayout from './components/layout/MainLayout';
import Menu from './components/layout/Menu';

function App() {
  return (
    <MainLayout >
      <div className="row">
        <Menu />
        <article className="col col__article">
          <h1>Content</h1>
          <p>Lorem ipsum dolor sit amet. Qui ad minima veniam quis. Sapiente delectus, ut enim ipsam. Iusto odio
            dignissimos ducimus, qui in ea commodi autem. Adipisci velit, sed ut et voluptates repudiandae. Iste
            natus error sit voluptatem. Soluta nobis est eligendi optio, cumque nihil molestiae. Sequi nesciunt,
            neque porro quisquam est, omnis voluptas nulla. In ea voluptate velit esse quam. Eveniet, ut
            perspiciatis, unde omnis iste natus error sit voluptatem.</p>
        </article>
        <aside className="col col__aside">
          right side
        </aside>
      </div>
    </ MainLayout >
  );
}

export default App;
