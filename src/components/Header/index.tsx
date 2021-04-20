//Import data atual
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss'; 

export function Header(){

    //Criando data atual
    const currentDate = format(new Date(),'EEEEEE, d MMMM', {
        locale: ptBR,
    });
    return(
        //Estrutura do cabeçalho
        
        <header className={styles.headerContainer}>

            <img src="/logo.svg" alt="podcastr"/>

            <p>O melhor para você ouvir, sempre</p>

            <span>{currentDate}</span>

        </header>
    );
}