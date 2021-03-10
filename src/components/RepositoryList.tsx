import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
import { useEffect, useState } from "react";

interface Repository {
    name: string;
    html_url: string;
    description: string;
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories ? repositories.map((repository) => (
                    <RepositoryItem key={repository.name} repository={repository} />   
                )): 'Carregando...'}
               
            </ul>
        </section>
    )
}