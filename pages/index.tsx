import React  from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import TodoLayout from '../components/TodoLayout/TodoLayout';

const initState = [
  { text: 'Fork repository', complete: false },
  { text: 'Open build and deploy settings and connect', complete: false },
  { text: 'Push a new commit', complete: false },
];

const Home = (props: any) => (
  <>
    <Header />
    <TodoLayout initTodos={props.data} />
    <Footer />
  </>
);

Home.getInitialProps = async () => ({ data: initState});

export default Home;
