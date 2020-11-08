import React from 'react';


export default function MovieList({ movies }) {


  return (
    <table className="table table-striped table-dark mt-3" >
      <thead>
        <tr>
          <th>#</th>
          <th>Film Adı</th>
          <th>Film Türü</th>
        </tr>

      </thead>
      <tbody>
        {movies.map((value, index) => {
          return <tr key={index}>

            <td>{value.id}</td>
            <td>{value.title}</td>
            <td>{value.description.split("|").map((value, index) => {
              return <span className="badge badge-danger mr-1 text-dark" key={index}>{value}</span>
            })}</td>

          </tr>
        })}


      </tbody>
    </table>

  )
}
