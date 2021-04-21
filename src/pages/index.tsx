//SPA
//SSR
//SSG

export default function Home(props) { 
  //Chamando API por SPA dados estao sendo carregados somente no momento em que a pessoa acessa a aplicação
/*  useEffect(() => {}, [])

    fetch('http://localhost:3333/episodes')
    .then(response => response.json())
    .then(data => console.log(data))
*/
  return (
    <h1></h1>
  )
}

//Chamando API por SSR 

//Apenas de eu chamar essa função o next ja vai entender que deve executar essa função antes de exibir o conteudo da pagina 
//SSR vai executar toda vez que alguem acessar a home da nossa aplicação
/*export async function getServerSideProps(){

    const response = await fetch('http://localhost:3333/episodes')
    const data = await response.json()

    return { 
      props: {
        episodes: data,
      }
    }
}*/

//Chamando a API pelo metodo SSG, para isso deve se alterar apenas de "getServerSideProps" para "getStaticProps" e passar o revalidate
export async function getStaticProps(){

  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return { 
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}