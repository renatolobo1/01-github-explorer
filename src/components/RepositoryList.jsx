const repositoryName = 'Renato';

export function RepositoryList() {
  return (
    <section className="repository-list" >
      <h1>Lista de repositórios</h1>

      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in Ract</p>

          <a href="">
            Acessar Repositório
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <strong>unform</strong>
          <p>Forms in Ract</p>

          <a href="">
            Acessar Repositório
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <strong>unform</strong>
          <p>Forms in Ract</p>

          <a href="">
            Acessar Repositório
          </a>
        </li>
      </ul>
    </section>
  )
}